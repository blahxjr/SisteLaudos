-- Inicialização do banco para dev: cria extensão pgvector (se disponível)

CREATE EXTENSION IF NOT EXISTS pgvector;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Cria tabela de memória caso não exista
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
