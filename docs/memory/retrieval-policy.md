# Política de Recuperação (Retrieval) de Memória

Objetivo
- Definir como os agentes recuperam contexto da memória persistente para compor prompts e tomar decisões coerentes.

Princípios
- Relevância primeiro: priorizar registros por `type`, `tags`, `created_at` e `confidence`.
- Limite de contexto: recuperar somente o escopo necessário (módulo/épico) para evitar vazamento de contexto irrelevante.
- Fonte canônica: documentos versionados (`docs/`, `/adr`) têm precedência sobre registros temporários.

Fluxo de recuperação (dev)
1. Agente identifica `module_scope` e busca `code_map` e `decision_record` associados.
2. Recupera até N registros mais relevantes (configurável), sumariza localmente e inclui no prompt.
3. Qualquer decisão tomada deve gerar `decision_record` e ser vinculada a ADR quando aplicável.

Configurações recomendadas
- `max_records`: 10 (por consulta inicial)
- `min_confidence`: 0.3 (usar campo `confidence` para filtrar)

Observação
- Em produção, usar índice vetorial com embeddings e similaridade por vetor; o resultado passa por validação humana para decisões de alto impacto.
