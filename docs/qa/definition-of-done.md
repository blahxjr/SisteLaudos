# Definition of Done (Definição de Pronto) — QA

Objetivo: estabelecer critérios mínimos que uma entrega (documento, task ou mudança) deve cumprir antes de ser considerada pronta.

Critérios mínimos
- Documentação: Task Spec preenchido e persistido em `docs/tasks/` ou `docs/` relevante.
- Testes: para mudanças de código, testes unitários/integrados que cubram as alterações e passem localmente.
- Build: projeto compila e `npm run build` não falha para o escopo afetado.
- ADR: quando a mudança envolver decisão arquitetural, ADR criado ou atualizado em `/adr`.
- Memória: `task_record` e `execution_event` gravados na memória (dev ou prod) com referências.
- Handoff: quando aplicável, handoff gerado e persistido usando o template.
- Revisão: revisão humana aprovada (pull request com aprovação) ou revisão automatizada com critérios explicítos.

Checks automáticos recomendados no CI
- `npm run lint` (ou equivalente)
- `npm run build`
- Execução de testes relevantes
- Validação de templates preenchidos (`docs/templates`)
