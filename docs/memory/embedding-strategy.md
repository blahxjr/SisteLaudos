# Estratégia de Embeddings (visão inicial)

Objetivo
- Definir como serão gerados e armazenados embeddings para permitir busca semântica sobre memória e documentos.

Visão inicial
- Gerar embeddings a partir de trechos relevantes (ADRs, task specs, code maps, documentação) usando um provedor de embeddings (ex.: OpenAI, Cohere) ou modelo local.
- Armazenar vetores na coluna `embedding` (tipo `double precision[]`) e indexá-los com `pgvector` ou DB especializado.

Fluxo recomendado
1. Extrair texto relevante e normalizar (truncar, limpar HTML, manter contexto mínimo).
2. Chamar serviço de embeddings para obter vetor fixo (ex.: 1536 dimensões).
3. Salvar vetor em `memory_record.embedding` e atualizar `confidence` conforme heurística.
4. Durante recuperação, usar busca por similaridade (cosine ou dot) e aplicar `min_confidence` e `max_records`.

Privacidade e segurança
- Não gerar embeddings de dados sensíveis (credenciais, PII) sem anonimização.

Nota técnica
- Implementação inicial usa `double precision[]`; quando `pgvector` estiver disponível, migrar para coluna `vector` e criar índice vetorial.
