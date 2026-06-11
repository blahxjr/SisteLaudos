# Regras de Aceitação por Tipo de Entrega

Objetivo
- Definir critérios objetivos e verificáveis para aceitar entregas produzidas por agentes ou por humanos.

Tipos de entrega e critérios mínimos

1) Documentação (Task Spec, Handoff, ADR)
- Preenchimento: todos os campos obrigatórios do template devem estar preenchidos.
- Referências: incluir `memory_record` e links para artefatos citados.
- Revisão: aprovação de pelo menos um revisor humano.

2) Mudança de Código Pequena (fix puntual, refactor limitado)
- Testes: testes unitários relevantes adicionados/atualizados.
- Build: `npm run build` e lint sem erros críticos.
- Rollback: estratégia de rollback documentada na task spec.
- Revisão: PR com aprovação humana.

3) Mudança de Arquitetura (ADR necessária)
- ADR: documento criado/atualizado em `/adr` descrevendo trade-offs.
- Impacto: lista de arquivos/entidades afetadas e migrações (se houver).
- Revisão técnica: revisão por arquiteto humano.

4) Tarefas de Dados (migrations, imports)
- Backups: plano/backup completo disponível.
- Migrations: versão controlada e testada em ambiente de staging.
- Revisão: aprovação explícita de responsável DB.

Checks automáticos recomendados no CI
- Validação de templates preenchidos.
- Execução de testes unitários/integrados.
- Validação de ADRs (ver presença quando a mudança é arquitetural).
