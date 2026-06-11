# Esquema inicial de Memória Persistente

Este documento descreve o esquema conceitual inicial para a memória persistente utilizada pelos agentes.

Entidades mínimas:
- `memory_record`: id, type, title, body, tags, source, confidence, created_at
- `decision_record`: id, adr_id, context, decision, consequences, status
- `task_record`: id, epic_id, title, status, inputs, outputs, acceptance_criteria
- `code_map`: id, module, path, responsibility, dependencies, risk_level
- `execution_event`: id, agent, task_id, action, result, artifact_ref, timestamp

Implementação recomendada para produção:
- PostgreSQL para entidades relacionais.
- Serviço de embeddings + índice vetorial (ex.: Milvus, Pinecone, Weaviate ou PG + pgvector) para busca semântica.

Para início rápido no desenvolvimento local, há um módulo file-based em `src/lib/agent-memory.js` que armazena registros JSON em `data/agent-memory/`.

Exemplo de uso (salvando um registro):

```js
const mem = require('../../src/lib/agent-memory');
(async () => {
	const rec = await mem.saveRecord({ type: 'task_record', title: 'mapear repairs', body: 'evidências...' });
	console.log(rec.id);
})();
```

Modelo de tabela recomendado (Postgres) — esboço SQL:

```sql
CREATE TABLE memory_record (
	id uuid PRIMARY KEY,
	type text,
	title text,
	body jsonb,
	tags text[],
	source text,
	confidence numeric,
	created_at timestamptz DEFAULT now()
);
```

Observação: cada mudança importante de política ou arquitetura deve gerar um `decision_record` referenciando o ADR correspondente.
