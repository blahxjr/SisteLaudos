const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

const BASE = path.resolve(process.cwd(), 'data', 'agent-memory');

async function ensureBase() {
  await fs.mkdir(BASE, { recursive: true });
}

function id() {
  return crypto.randomUUID ? crypto.randomUUID() : crypto.randomBytes(16).toString('hex');
}

async function saveRecord(record) {
  await ensureBase();
  const rid = record.id || id();
  const file = path.join(BASE, `${rid}.json`);
  const now = new Date().toISOString();
  const data = Object.assign({ id: rid, created_at: now }, record);
  await fs.writeFile(file, JSON.stringify(data, null, 2), 'utf8');
  return data;
}

async function listRecords(filterFn) {
  await ensureBase();
  const files = await fs.readdir(BASE);
  const out = [];
  for (const f of files) {
    if (!f.endsWith('.json')) continue;
    try {
      const txt = await fs.readFile(path.join(BASE, f), 'utf8');
      const obj = JSON.parse(txt);
      if (!filterFn || filterFn(obj)) out.push(obj);
    } catch (e) {
      // ignore malformed
    }
  }
  return out.sort((a,b) => new Date(a.created_at) - new Date(b.created_at));
}

async function getRecord(rid) {
  const file = path.join(BASE, `${rid}.json`);
  try {
    const txt = await fs.readFile(file, 'utf8');
    return JSON.parse(txt);
  } catch (e) {
    return null;
  }
}

module.exports = { saveRecord, listRecords, getRecord };
