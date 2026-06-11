# Inventário Inicial do Repositório — Gerado automaticamente

Este inventário foi gerado automaticamente para apoiar a Fase 0 (descoberta) e orientar agentes na análise do código.

Resumo rápido
- Stack: Next.js 16 (App Router), React 19, Prisma, MySQL/MariaDB
- Node: >= 24
- Idioma principal configurado: Português do Brasil (`pt-BR`)
- Memória de agentes (dev): `src/lib/agent-memory.js` (file-based, `data/agent-memory/`)

Dependências principais (de `package.json`)
- `next` ^16.2.6
- `react` ^19.2.1
- `@prisma/client` ^6.19.3
- Ferramentas de UI: `lucide-react`, `@radix-ui/react-dialog`

Scripts úteis
- `npm run dev` — inicia Next.js em `0.0.0.0`
- `npm run db:migrate` / `npm run db:seed` — Prisma
- `npm run agents:bootstrap` — script de bootstrap de agentes (adicionado)

Arquivos e diretórios relevantes
- Configuração Next: `next.config.mjs` (i18n configurado para `pt-BR`)
- Prisma schema: `prisma/schema.prisma` (provider: mysql)
- Migrations: `prisma/migrations/` (contém `migration_lock.toml`)
- Código da aplicação: `src/app/` (App Router)
- APIs (rotas): vários arquivos `route.js` sob `src/app/api/` (lista abaixo)
- Componentes UI: `src/components/` e `src/lib/` (helpers)
- Documentação e ADRs: `docs/`, `adr/` (novos artefatos para agentes e memória)
- Agentes e scaffolding: `agents/` e `src/lib/agent-memory.js`

Rotas de API encontradas (pontos de entrada `route.js`)
- `/api/bootstrap` -> `src/app/api/bootstrap/route.js`
- `/api/catalog` -> `src/app/api/catalog/route.js`
- `/api/import/external-history` -> `src/app/api/import/external-history/route.js`
- `/api/import/local-storage` -> `src/app/api/import/local-storage/route.js`
- `/api/clients` -> `src/app/api/clients/route.js`
- `/api/staff` -> `src/app/api/staff/route.js`
- `/api/settings` -> `src/app/api/settings/route.js`
- `/api/repairs` -> `src/app/api/repairs/route.js`
- `/api/repairs/[id]` -> `src/app/api/repairs/[id]/route.js`
- `/api/repairs/aggregates` -> `src/app/api/repairs/aggregates/route.js`
- `/api/repairs/search` -> `src/app/api/repairs/search/route.js`
- `/api/reports/overview` -> `src/app/api/reports/overview/route.js`
- `/api/attributes` -> `src/app/api/attributes/route.js`
- `/api/technicians` -> `src/app/api/technicians/route.js`
- `/api/auth/login` -> `src/app/api/auth/login/route.js`
- `/api/auth/logout` -> `src/app/api/auth/logout/route.js`
- `/api/auth/me` -> `src/app/api/auth/me/route.js`
- `/api/backup/create` -> `src/app/api/backup/create/route.js`
- `/api/backup/list` -> `src/app/api/backup/list/route.js`
- `/api/backup/export` -> `src/app/api/backup/export/route.js`
- `/api/backup/import` -> `src/app/api/backup/import/route.js`
- `/api/backup/import-file` -> `src/app/api/backup/import-file/route.js`
- `/api/backup/download/[id]` -> `src/app/api/backup/download/[id]/route.js`
- `/api/backup/download/current` -> `src/app/api/backup/download/current/route.js`

Principais modelos do banco (resumo de `prisma/schema.prisma`)
- `Staff`, `StaffSession`
- `Client`
- `Brand`, `Model`
- `Service`, `Part`
- `Technician`
- `AttributeGroup`, `Attribute`
- `Repair`, `RepairItem`, `Payment`
- `Setting`, `BackupSnapshot`

Observações técnicas e riscos iniciais
- Banco: configurado para MySQL (ver `prisma/schema.prisma`). Migrations parecem presentes mas é necessário validar histórico completo de migrations antes de executar `prisma migrate` em produção.
- Internacionalização: UI contém strings em chinês/espanhol; `next.config.mjs` agora define `pt-BR` como idioma padrão — é necessário revisar textos da UI e arquivos em `locales/` para consistência.
- Memória de agentes: implementado adaptador file-based em `src/lib/agent-memory.js`. Em produção, migrar para Postgres + pgvector ou outro vetor DB para busca semântica.
- Segurança: revisar `docs/agents/autonomy-policy.md` e `adr/0001-agents-and-memory.md` antes de permitir agentes com permissão de escrita em código.

Recomendações imediatas (ação sugerida)
1. Executar inventário detalhado de arquivos estáticos, rotas de servidor e páginas públicas (`src/app/**/*`).
2. Validar `prisma/migrations` e criar plano de migração/backup antes de rodar migrations em ambientes reais.
3. Padronizar idioma: atualizar `locales/pt.json` com traduções e configurar pipeline de i18n.
4. Substituir `src/lib/agent-memory.js` por adaptador para Postgres/pgvector quando houver infra disponível.

Arquivo gerado automaticamente por agente em: `docs/inventory.md`.
