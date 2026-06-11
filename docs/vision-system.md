# Visão do Sistema — SisteLaudos (Fase: Estruturação para IA)

Este documento formaliza a visão, os objetivos, os limites e o plano de fases para a etapa inicial de preparação do SisteLaudos para desenvolvimento assistido por agentes de IA com memória persistente.

Idioma principal
- Português do Brasil (pt-BR). Todos os artefatos, templates e prompts iniciais devem ser redigidos em pt-BR.

Visão resumida
- Transformar o repositório em uma base disciplinada para evolução incremental: governança documental, memória persistente, papéis de agentes e templates de trabalho. Não serão implementadas funcionalidades de negócio nesta fase — apenas infraestrutura de processo e documentação.

Stack identificado
- Frontend/Framework: Next.js 16 (App Router), React 19
- Backend: Next.js API routes (serverless / edge-friendly)
- ORM: Prisma (provider: MySQL/MariaDB)
- Banco (dev/prod): MySQL/MariaDB (Prisma schema aponta para mysql)
- Linguagem: JavaScript/Node.js (Node >= 24)
- Testes/Dev tooling: Playwright, TypeScript (devDependency)

Estrutura do repositório (pontos principais)
- `src/app/` — aplicação Next.js (páginas, rotas e components)
- `src/app/api/` — rotas de API (várias `route.js` já existentes)
- `src/components/` — componentes UI
- `src/lib/` — utilitários e adaptadores (adicionado `agent-memory.js`)
- `prisma/schema.prisma` — modelo de dados
- `prisma/migrations/` — lock presente; revisar histórico
- `docs/`, `adr/`, `agents/` — documentação e scaffolding (adicionados nesta fase)

O que já existe (implementado/descoberto)
- Aplicação Next.js funcional (estrutura App Router).
- Múltiplas rotas de API (`src/app/api/*`) cobrindo clientes, reparos, backup, auth, etc.
- `prisma/schema.prisma` com modelos centrais (Staff, Client, Repair, etc.).
- Scaffolding para agentes e memória persistente em desenvolvimento:
  - `src/lib/agent-memory.js` (file-based)
  - `agents/bootstrap.js` e `agents/README.md`
  - Templates e política: `docs/agents/*`, `docs/templates/*`
  - ADR inicial: `adr/0001-agents-and-memory.md`
  - Inventário gerado: `docs/inventory.md`

Lacunas e riscos identificados
- Internacionalização: UI ainda contém textos em chinês/esp/inglês; é necessário consolidar traduções em `locales/pt.json`.
- Memória de produção ausente: adaptador file-based serve apenas para desenvolvimento; falta infra (Postgres + vetor DB) para produção e busca semântica.
- Migrations: pasta de migrations não contém histórico completo (apenas `migration_lock.toml`); validar histórico antes de migrar em produção.
- Testes automatizados e pipeline CI/CD: não há configuração explícita de CI para gates de agentes; recomendamos pipeline com checks (lint, build, tests) antes de permitir escritas automáticas por agentes.
- Governança de segurança: política definida, mas integrar autorização humana em processos automatizados é necessário.

Esqueleto base criado para IA e memória (entregáveis)
- Documentos e templates: `docs/agents/agent-charter.md`, `docs/agents/autonomy-policy.md`, `docs/templates/task-spec.md`, `docs/templates/handoff.md`.
- Memória dev: `src/lib/agent-memory.js` + `.gitignore` atualizado para `data/agent-memory/`.
- ADR: `adr/0001-agents-and-memory.md`.
- Script de bootstrap: `agents/bootstrap.js` e npm script `agents:bootstrap`.
- Visão & inventário: `docs/overview-ai.md`, `docs/inventory.md`, `docs/vision-system.md` (este arquivo).

Decisões e rastreabilidade
- Toda decisão importante já foi registrada via ADR (`adr/0001-agents-and-memory.md`).
- Templates para Task Spec e Handoff obrigam agentes a produzir artefatos rastreáveis antes de implementar.

Plano de fases proposto (alto nível)

Fase 0 — Descoberta e Preparação (completa nesta etapa)
- Inventário completo do repositório.
- Validação do `prisma/migrations` e plano de backup/restore.
- Padronização de idioma (pt-BR) nos recursos de UI/strings.
- Scaffolding de memória (dev) e templates de governança.

Fase 1 — Infra de Memória e CI (próxima após aprovação)
- Provisionar Postgres (ou usar infra existente) para memória relacional.
- Escolher e integrar vetor DB (pgvector em Postgres, Weaviate, Milvus ou Pinecone) para busca semântica.
- Criar adaptador `src/lib/agent-memory-pg.js` e testes de integração.
- Configurar pipeline CI com gates: lint, build, teste unitário e de integração, e checklist de ADRs.

Fase 2 — Autonomia Controlada Nível 1
- Agentes operam para gerar documentação, mapear módulos, e criar task specs automaticamente.
- Todas as entregas são validadas por revisor humano antes de merge.

Fase 3 — Autonomia Limitada Nível 2 (após sucesso em Fase 2)
- Implementador agente pode aplicar mudanças pequenas e localizadas com testes automatizados e rollback automático.

Fase 4 — Escala e Busca Semântica Avançada
- Busca semântica ampla sobre código, docs e decisões.
- Métricas de maturidade e automação contínua.

Próximos passos recomendados (curto prazo, ação imediata)
1. Consolidar traduções pt-BR: revisar `locales/pt.json`, atualizar strings na UI para pt-BR. (usa `docs/templates` para registrar as decisões)
2. Validar e documentar o histórico de migrations do Prisma antes de qualquer execução em ambiente real.
3. Provisionar ambiente Postgres de dev (pode ser local via Docker) e criar adaptador de memória inicial (somente adaptador, sem switch automático para produção).
4. Criar pipeline CI básico com `lint`, `build` e uma task que valida templates/ADRs antes do merge.

Limitações e compromisso
- Não será implementada qualquer funcionalidade de negócio nesta fase. Todas as mudanças futuras seguirão a política de decisões (ADRs) e templates de task/handoff.

Resumo do que foi feito (entregáveis imediatos)
- Scaffolding para agentes e memória (dev) criado.
- i18n default configurado para `pt-BR` em `next.config.mjs`.
- Templates, ADR e inventário gerados e comitados.
- Script de bootstrap e mecanismo local de memória verificados.

O que falta (entregáveis restantes desta fase)
- Consolidação das traduções pt-BR nas telas e arquivos de idioma.
- Ambiente de memória escalável (Postgres + vetor DB) e adaptador correspondente.
- Pipeline CI para gates de qualidade e autorização humana.
- Inventário por arquivo com links (opcional, posso gerar).

Próximo passo recomendado imediato
- Confirmar se devo gerar o inventário detalhado por arquivo (relatório com links), e começar a implementar o adaptador `agent-memory-pg.js` para ambiente de desenvolvimento (Docker). Essas duas tarefas não implementam funcionalidades de negócio.

Decisão final
- Avançar apenas com atividades de preparação/infra/documentação até aprovações humanas para Fase 1.

Documento criado por: equipe de arquitetura automatizada (agente assistente) e comitado no repositório.
