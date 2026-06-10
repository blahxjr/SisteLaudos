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
