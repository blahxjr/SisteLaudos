# 0002 - Memória Persistente: Postgres + pgvector (dev)

Status: proposta

Contexto
-------

Para elevar a prontidão do projeto e permitir recuperação semântica futura, propõe-se adotar Postgres como armazenamento relacional de memória e preparar o uso de vetores via `pgvector`.

Decisão
-------

1. Implementar adaptador dev `src/lib/agent-memory-pg.js` usando `pg`.
2. Fornecer um `docker-compose.dev.yml` com imagem `ankane/pgvector` para desenvolvimento local.
3. Manter o adaptador file-based como fallback; migrar dados para Postgres mediante procedimento definido.

Consequências
------------

- Permite testes locais com banco relacional e coluna de embedding para futura indexação vetorial.
- Requer validação de migrations e plano de migração de dados antes de ser usado em produção.
