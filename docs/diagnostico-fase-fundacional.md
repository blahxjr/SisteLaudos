# Diagnóstico Consolidado — Fase Fundacional

Data: 2026-06-10

Resumo executivo
- Objetivo: consolidar a fundação documental e arquitetural para permitir desenvolvimento assistido por IA com memória persistente, sem implementar funcionalidades de negócio.
- Status atual: grande parte da fundação documental criada (templates, ADR, memória dev, handoff, DoD). Ainda faltam consolidações importantes para avançar em segurança e infra de memória.

O que foi verificado nesta auditoria
- Inventário do repositório (`docs/inventory.md`) e `prisma/schema.prisma`.
- Estruturas de agentes em `docs/agents/*` e scaffolding em `agents/`.
- Memória dev: `src/lib/agent-memory.js` funcionando (bootstrap testado).
- Templates e políticas: `docs/templates`, `docs/qa`, `adr/` existentes.

Lacunas críticas identificadas
1. Memória de produção ausente — falta Postgres/pgvector ou alternativa vetorial.
2. Migrations Prisma: história de migrations incompleta ou não verificada; risco ao rodar `prisma migrate` em produção.
3. i18n: `next.config.mjs` define `pt-BR`, porém UI contém strings em múltiplos idiomas e `locales/pt.json` precisa ser consolidado.
4. CI/CD: ausência de pipeline que imponha gates para alterações automatizadas por agentes.
5. Observabilidade e logs de auditoria não formalizados (necessário endpoint/arquivo de auditoria antes de escrita não supervisionada).

Riscos
- Permitir agentes com permissão de escrita sem infra de rollback e sem logs pode levar a regressões e perda de dados.
- Executar migrations sem histórico pode corromper banco de dados existente.

Recomendações (prioridade)
Alta
- Provisionar ambiente Postgres de desenvolvimento com pgvector e criar adaptador `agent-memory-pg.js`.
- Validar e versionar migrations do Prisma; criar plano de backup/restore.
- Consolidar `locales/pt.json` e revisar UI strings.

Média
- Implementar pipeline CI com gates: lint, build, testes e validações de templates/ADRs antes de merges automatizados.
- Definir política de logging/auditoria para ações de agentes.

Baixa
- Planejar integração com S3/MinIO para armazenamento de arquivos.

Conclusão sobre avanço de Nível
- O projeto está pronto para operar agentes em Nível 0/1 (leitura, documentação e geração de task specs). NÃO está pronto para avançar ao Nível 2 até que as recomendações de alta prioridade sejam atendidas (memória de produção, validação de migrations, CI com gates e observabilidade/auditoria).

Próximo passo recomendado imediato
1. Criar adaptador `src/lib/agent-memory-pg.js` de modo experimental e `docker-compose.dev.yml` com Postgres + pgvector.
2. Gerar plano de validação do histórico de migrations e testar em ambiente isolado.
3. Iniciar consolidação do `locales/pt.json` (pode ser feito por agente de documentação com revisão humana).

Registro de decisões
- Todas as recomendações e decisões propostas aqui devem ser formalizadas por ADRs antes de implementação.
