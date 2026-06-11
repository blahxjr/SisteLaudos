# Protocolo de Handoff entre Agentes

Objetivo: garantir transferência de contexto mínima, objetiva e persistente entre agentes, evitando retrabalho e perda de decisões.

Quando usar
- Sempre que um agente finalizar uma etapa e outra parte assumir execução (ex.: Descoberta -> Produto; Produto -> Implementador; Implementador -> Revisor).

Campos obrigatórios do handoff
- `task_id`: identificador da tarefa (usar UUID ou slug consistente).
- `agente_origem`: nome do agente que produziu o handoff.
- `agente_destino`: nome do agente destino (pode ser um papel genérico, ex.: `Implementador`).
- `objetivo`: frase curta com o resultado esperado.
- `estado_atual`: resumo do que foi feito (incluindo arquivos lidos e decisões já tomadas).
- `artefatos`: lista de arquivos, ADRs, memoria_ids e links relevantes.
- `decisoes`: decisões tomadas e link para ADR quando aplicável.
- `riscos_e_pendencias`: itens que precisam de atenção antes de execução.
- `proximo_passo_recomendado`: ação imediata esperada do agente destino.
- `timestamp` e `assinatura`: registro de quando e por quem (agente) foi gerado.

Formato (exemplo YAML)

```yaml
task_id: "task-1234"
agente_origem: "descoberta-codigo"
agente_destino: "produto"
objetivo: "Mapear entidades centrais do módulo Repairs"
estado_atual: "Lista inicial de arquivos, identificadas 3 entidades principais"
artefatos:
  - docs/inventory.md
  - prisma/schema.prisma
  - memory: 7cfd7bf7-3f78-4809-8224-7ea53f628800
decisoes:
  - "Decisão: manter nomes atuais de campo ticket (ver ADR/0001)"
riscos_e_pendencias:
  - "Migrations incompletas: revisar histórico"
proximo_passo_recomendado: "Gerar task spec para modelagem do domínio Repairs"
timestamp: "2026-06-10T12:00:00Z"
assinatura: "agente-descoberta-v1"
```

Armazenamento e rastreabilidade
- Hand-offs devem ser persistidos em memória decisória (`decision_record`) e referenciados por `memory_record`.
- Cada handoff gera um `execution_event` com `agent`, `task_id`, `action: handoff`, `artifact_ref` apontando para o `memory_record`.

Regras operacionais
- Handoffs incompletos não avançam o fluxo; o agente destino deve pedir clarificação ou abrir pendência.
- Sempre vincular ADRs quando a decisão envolver arquitetura ou schema.
