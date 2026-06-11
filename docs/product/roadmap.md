# Roadmap por Fases (Visão de Alto Nível)

Fase 0 — Descoberta e Preparação (concluída parcialmente)
- Inventário do repositório.
- Templates, ADRs e memória dev implementados.
- i18n padrão configurado para pt-BR.

Fase 1 — Fundação Operacional (esta fase)
- Consolidar governança de agentes, políticas de segurança, handoff e DoD.
- Criar documentação técnica: visão, goals, domain model, arquitetura e integração.

Fase 2 — Infra de Memória e CI
- Provisionar Postgres + pgvector (ou alternativa) para memória e busca semântica.
- Implementar adaptador e testes de integração.
- Configurar pipeline CI com gates e validações de templates/ADRs.

Fase 3 — Autonomia Controlada Nível 1
- Agentes produzem documentação, task specs e geram PRs com implementações pequenas; revisão humana obrigatória.

Fase 4 — Autonomia Limitada Nível 2
- Agentes aplicam pequenas mudanças automatizadas com testes e rollback automático; métricas de maturidade.

Fase 5 — Escala e Operação
- Busca semântica ampla, métricas operacionais e integração com sistemas externos.

Observações
- Cada fase só inicia após critérios de aceite do DoD e ADRs pertinentes.
