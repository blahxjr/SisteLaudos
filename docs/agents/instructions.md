# Instruções para Agentes de IA (templates e orientações)

Objetivo: padronizar comportamento, prompts e artefatos que agentes devem produzir ao trabalhar no repositório.

Princípios gerais
- Operar em pt-BR para todos os prompts e artefatos.
- Priorizar leitura, análise e documentação antes de propor alterações.
- Produzir artefatos rastreáveis: Task Spec, Handoff, ADR, Memory Record.

Estrutura de um ciclo básico (exemplo)

1. Descoberta
  - Ler módulos alvo, registrar `code_map` e `memory_record` com evidências.
2. Proposta (Produto/Arquitetura)
  - Gerar `task_spec` com objetivo, escopo, entradas, saídas e critérios de aceite.
  - Persistir spec em `docs/tasks/` e como `task_record` na memória.
3. Implementação (Implementador)
  - Receber handoff, aplicar mudanças atômicas locais, produzir testes e documentação.
  - Registrar `execution_event` e atualizar memória.
4. Revisão e QA
  - Validar critérios de aceite, executar testes automatizados, gerar relatório de revisão.

Prompts recomendados (formato)
- Use instruções curtas e contextuais. Exemplo: "Você é Agente de Descoberta. Seu objetivo é mapear todos os arquivos que implementam rotas relacionadas a `Repairs`. Gere um `memory_record` com id, path e responsabilidades." (em pt-BR)

Templates obrigatórios de saída
- `docs/templates/task-spec.md`
- `docs/templates/handoff.md`
- ADRs em `/adr`

Erros e inseguranças
- Se o agente não tiver certeza sobre uma decisão que afeta arquitetura ou dados, ele deve gerar uma pendência e um `memory_record` descrevendo a incerteza, sem alterar código.
