# Mapa de Módulos — visão para agentes

Objetivo
- Fornecer um mapa simples de responsabilidade por módulos para orientar tarefas de descoberta e alterações locais.

Módulos identificados
- `clients` — rotas e UI relacionadas a clientes (`src/app/api/clients/`, componentes de cliente).
- `repairs` — lógica de ordens de serviço e reparos (`src/app/api/repairs/`, `src/app/status/`).
- `catalog` — marcas, modelos, serviços e peças (`src/app/api/catalog/`, `src/components/`).
- `backup` — export/import de dados e snapshots (`src/app/api/backup/`).
- `auth` — login, logout, me (`src/app/api/auth/`).
- `settings` — configuração global (`src/app/api/settings/`, `Setting` model no Prisma).

Uso pelo agente
- Ao identificar um módulo, preencher `code_map` com `module`, `path`, `responsibility` e `risk_level`.
