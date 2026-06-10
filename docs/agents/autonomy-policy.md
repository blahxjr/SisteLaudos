# Política de Autonomia para Agentes

Este documento descreve as regras e guardrails que controlam a autonomia dos agentes no repositório.

Regras essenciais:
- Nível 0: leitura e inventário do repositório.
- Nível 1: geração de documentação, task specs e updates em `docs/` e `adr/`.
- Nível 2: alterações pequenas e localizadas mediante task spec e teste automatizado.
- Proibir alterações em autenticação, autorização ou auditoria sem revisão humana dedicada.
- Todas as decisões arquiteturais relevantes devem gerar ADR em `/adr`.
- Toda alteração que muda estado do banco exige migration versionada revisada.

Processo de autorização:
- Agentes submetem propostas (task specs) à memória decisória.
- Um revisor humano aprova handoff para Implementador quando critérios atendidos.
