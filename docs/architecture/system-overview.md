# Visão Geral da Arquitetura

Resumo de alto nível
- Aplicação: Next.js 16 (App Router) executando frontend e rotas de API.
- Persistência primária: MySQL/MariaDB via Prisma (schema em `prisma/schema.prisma`).
- Memória de agentes (dev): adaptador file-based em `src/lib/agent-memory.js`.

Camadas principais
- Apresentação: `src/app/*` (páginas e componentes).
- API / Backend: `src/app/api/*` (endpoints `route.js`).
- Domínio e Persistência: `prisma/schema.prisma` e `src/lib/prisma.js`.
- Infra de Agentes: `agents/`, `docs/agents/`, `src/lib/agent-memory.js`.

Pontos de observabilidade
- Logs do servidor (Next.js) e possíveis endpoints de auditoria devem ser definidos antes de autorizar agentes com permissão de escrita.
