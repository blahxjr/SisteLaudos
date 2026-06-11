# Domain Model — Visão Conceitual (Fase Fundacional)

Objetivo: descrever o domínio em alto nível para orientar descoberta e modelagem posterior, sem implementar alterações de negócio nesta fase.

Entidades centrais identificadas (resumo do `prisma/schema.prisma`):
- `Staff` / `StaffSession` — usuários administrativos e sessões.
- `Client` — clientes e contatos.
- `Repair` / `RepairItem` / `Payment` — unidade de trabalho de assistência técnica e itens financeiros.
- `Brand` / `Model` — catálogo de marcas e modelos.
- `Service` / `Part` — serviços oferecidos e peças.
- `Technician` — técnicos responsáveis.
- `AttributeGroup` / `Attribute` — metadados e atributos vinculáveis.
- `Setting`, `BackupSnapshot` — configuração e snapshots de backup.

Observação importante
- Este documento é um mapa de descoberta; qualquer alteração no schema deve seguir um Task Spec, incluir migration versionada e ADR.

Uso esperado
- Agentes de descoberta devem preencher `code_map` e `memory_record` com referências a arquivos, rotas e responsabilidades por entidade.
