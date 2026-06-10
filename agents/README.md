# Agentes de IA — Scaffolding para desenvolvimento

Este diretório contém arquivos e exemplos para iniciar agentes de IA em modo de desenvolvimento local. Os agentes devem operar com memória persistente em `data/agent-memory/` usando `src/lib/agent-memory.js` até que uma infra mais robusta (Postgres + vetor DB) esteja disponível.

Como usar (modo rápido/local):

1. Instalar dependências do projeto (`npm install`).
2. Executar scripts de bootstrap/manual para simular agentes (ex.: `node agents/bootstrap.js`).

Notas:
- Em produção, substituir `src/lib/agent-memory.js` por um adaptador que usa Postgres e pgvector ou outro indexador vetorial.
- Manter idioma principal em `pt-BR` para templates e documentação de agentes.
