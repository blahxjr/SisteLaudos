# Setup local da Memória Persistente (Postgres) — Desenvolvimento

Pré-requisitos
- Docker e Docker Compose.
- `DATABASE_URL` de desenvolvimento: `postgres://repairnote:repairnote@localhost:5432/repairnote`.

Passos rápidos
1. Iniciar Postgres com vetor (pgvector) em modo dev:

```bash
docker compose -f docker-compose.dev.yml up -d
```

2. Verificar conexão (exemplo com psql):

```bash
psql postgresql://repairnote:repairnote@localhost:5432/repairnote -c "SELECT 1"
```

3. Configurar `DATABASE_URL` no ambiente local (por exemplo em `.env.local`):

```
DATABASE_URL=postgres://repairnote:repairnote@localhost:5432/repairnote
```

4. Usar o adaptador dev em `src/lib/agent-memory-pg.js`. Ele cria tabela e extensão automaticamente (quando disponível).

Observações
- O adaptador atual usa coluna `embedding DOUBLE PRECISION[]` para permitir futura indexação vetorial.
- Esta configuração é para desenvolvimento; em produção avalie provisionamento gerenciado e backups.
