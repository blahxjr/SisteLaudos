# Mapa de Integrações

Objetivo
- Listar integrações internas e externas potenciais para orientar considerações arquiteturais futuras.

Integrações identificadas / potenciais
- Banco de dados: MySQL/MariaDB (Prisma). Em memória: Postgres + pgvector proposto para memória persistente.
- Armazenamento de arquivos: uso interno de caminhos longText para fotos/assinaturas; considerar S3/MinIO para produção.
- Serviços de busca semântica: pgvector (Postgres), Weaviate, Milvus, Pinecone como opções.
- External APIs: possíveis integrações com serviços de SMS/WhatsApp para notificações (identificadas em templates de mensagens).

Observação
- Todas integrações externas devem ser documentadas em `docs/architecture/integration-map.md` e ter políticas de segurança e credenciais fora do repositório.
