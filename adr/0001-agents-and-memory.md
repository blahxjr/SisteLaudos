# 0001 - Agentes e Memória Persistente

Status: proposta

Contexto
-------

Este ADR formaliza a decisão de introduzir um modelo de agentes com memória persistente no fluxo de desenvolvimento do RepairNOTE. O objetivo é permitir que agentes especializados realizem descoberta, documentação e implementações pequenas com segurança e rastreabilidade.

Decisão
-------

1. Adotar um repositório de artefatos (`/docs`, `/adr`, `/tasks`) como fonte canônica de decisões e especificações.
2. Implementar memória persistente para fatos, decisões e tasks; em produção usar PostgreSQL + índice vetorial; em desenvolvimento usar armazenamento local enquanto o ambiente não estiver pronto.
3. Inicialmente operar com agentes em Nível 0/1, evoluindo para Nível 2 sob aprovação humana.

Consequências
------------

- Maior disciplina documental, exigindo templates e handoffs.
- Necessidade de infra para banco e (opcional) indexador vetorial quando o projeto evoluir.
