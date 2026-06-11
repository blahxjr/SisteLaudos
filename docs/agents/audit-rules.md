# Regras de Auditoria para Ações de Agentes

Objetivo
- Especificar eventos que agentes devem registrar para garantir rastreabilidade, responsabilização e possibilidade de rollback.

Eventos mínimos a registrar
- `task_spec_created` — quando um agent cria um `task_record`.
- `handoff` — sempre que um handoff é emitido entre agentes.
- `execution_start` / `execution_end` — quando um agente aplica mudanças; registrar diffs/artefatos.
- `decision_record` — quando uma decisão é tomada e/ou ADR é gerado.
- `incident` — qualquer falha que provoque erro de integridade ou dados sensíveis expostos.

Campos obrigatórios por evento
- `event_id`, `agent`, `task_id`, `timestamp`, `action`, `artifact_ref` (arquivo ou memory_record id), `summary`, `details` (opcional, pode ser link para armazenamento seguro).

Como relacionar artefatos
- `task_id` conecta `task_record`, handoff e `execution_event`.
- `decision_record` deve referenciar `adr_id` quando aplicável.

Acesso aos logs
- Logs de auditoria devem ser imutáveis (append-only) e armazenados em local com retenção e controles de acesso (ex.: tabela dedicada no Postgres com roles restritas).

Revisão humana obrigatória
- Qualquer `execution_event` que modifica autenticação, autorização, dados financeiros ou que envolve migrações, exige aprovação humana antes de aplicar em ambientes não-dev.
