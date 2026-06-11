# Regras de Segurança Operacional para Agentes

Objetivo
- Definir guardrails mínimo para operações de agentes, protegendo dados sensíveis e integridade do sistema.

Regras obrigatórias
- Nunca executar migrações de banco sem migration versionada revisada por humano.
- Nunca expor ou commitar segredos; variáveis de ambiente e credenciais devem permanecer fora do repositório (`.env` no `.gitignore`).
- Agentes só podem escrever código após task spec aprovado e handoff com critérios de aceite claros.
- Mudanças em autenticação, autorização e auditoria exigem revisão dedicada e aprovação humana.
- Todas as ações que alteram dados em produção devem ter rollback automatizado ou plano de reversão documentado.

Respostas a incidentes
- Toda ação que cause falha grave deve gerar `execution_event` com `action: incident` e notificação aos responsáveis humanos.

Auditoria
- Todos os comandos/ações executados por agentes devem ser logados com `agent`, `task_id`, `timestamp` e `hash` do artefato modificado.
