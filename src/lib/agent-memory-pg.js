/*
  Adaptador mínimo para memória persistente em Postgres.
  Uso: manter interface compatível com src/lib/agent-memory.js
  Notas:
  - Criar DATABASE_URL no ambiente (ex.: postgres://repairnote:repairnote@localhost:5432/repairnote)
  - Este adaptador contém inicialização segura (cria tabela se não existir).
  - Coluna embedding double precision[] prevista para futuro uso de vetores.
*/

const { Pool } = require('pg');
const format = require('util').format;

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://repairnote:repairnote@localhost:5432/repairnote';
const pool = new Pool({ connectionString: DATABASE_URL });

async function initialize() {
  const client = await pool.connect();
  try {
    await client.query(`CREATE EXTENSION IF NOT EXISTS pgvector;`);
  } catch (e) {
    // extensão pode não estar disponível dependendo da imagem; ignore se falhar
  }
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS memory_record (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        type TEXT,
        title TEXT,
        body JSONB,
        tags TEXT[],
        source TEXT,
        confidence NUMERIC,
        embedding DOUBLE PRECISION[],
        created_at TIMESTAMPTZ DEFAULT now()
      );
    `);
  } finally {
    client.release();
  }
}

async function saveRecord(record) {
  await initialize();
  const client = await pool.connect();
  try {
    const id = record.id || null;
    const q = `INSERT INTO memory_record (id, type, title, body, tags, source, confidence, embedding) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`;
    const vals = [id, record.type || null, record.title || null, record.body || null, record.tags || null, record.source || null, record.confidence || null, record.embedding || null];
    const res = await client.query(q, vals);
    return res.rows[0];
  } finally {
    client.release();
  }
}

async function getRecord(rid) {
  await initialize();
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM memory_record WHERE id = $1 LIMIT 1', [rid]);
    return res.rows[0] || null;
  } finally {
    client.release();
  }
}

async function listRecords(filter = {}) {
  await initialize();
  const client = await pool.connect();
  try {
    let q = 'SELECT * FROM memory_record';
    const clauses = [];
    const vals = [];
    if (filter.type) { vals.push(filter.type); clauses.push(format('type = $%d', vals.length)); }
    if (filter.tag) { vals.push(filter.tag); clauses.push(format('$%d = ANY(tags)', vals.length)); }
    if (clauses.length) q += ' WHERE ' + clauses.join(' AND ');
    q += ' ORDER BY created_at ASC';
    const res = await client.query(q, vals);
    return res.rows;
  } finally {
    client.release();
  }
}

module.exports = { initialize, saveRecord, getRecord, listRecords };
