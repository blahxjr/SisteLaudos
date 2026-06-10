# Documento Operacional para Evolução do SisteLaudos com Agentes Autônomos e Memória Persistente

## Visão do documento

Este documento define o escopo operacional para transformar o SisteLaudos em uma plataforma evolutiva de assistência técnica com geração de laudos, CRM e ERP, desenvolvida com apoio de agentes autônomos e memória persistente. Como não houve acesso verificável ao conteúdo interno do repositório durante a fase de pesquisa, este plano foi estruturado como um framework operacional orientado a governança, descoberta técnica e execução incremental, evitando premissas não confirmadas sobre a base atual.[cite:16][cite:30]

O objetivo principal é permitir que a IA atue com autonomia progressiva, sob regras claras, contexto persistente e mecanismos de auditoria. A autonomia proposta não substitui arquitetura e gestão; ela operacionaliza essas funções em ciclos curtos, verificáveis e seguros.[cite:30]

## Objetivo do programa

O programa tem como meta evoluir o sistema atual para um produto composto por módulos de assistência técnica, emissão de laudos técnicos, cadastro e histórico de clientes, ordens de serviço, orçamento, materiais, peças, estoque, financeiro e relacionamento comercial. Esse avanço deve ocorrer por fases priorizadas por valor de negócio, dependências técnicas e risco operacional.[cite:30]

O sucesso do programa depende de três fundamentos: descoberta verificável da base existente, formalização de conhecimento em memória persistente e execução por agentes especializados com autonomia limitada por políticas. Sem esses três pilares, a IA tende a produzir mudanças incoerentes, regressões e perda de contexto entre ciclos.[cite:30]

## Princípios operacionais

- Toda autonomia deve ser progressiva, começando por leitura, análise e documentação antes de alterar código.[cite:30]
- Toda decisão relevante deve gerar um registro persistente, preferencialmente em formato de ADR, especificação ou memória operacional.[cite:30]
- Toda tarefa deve ter objetivo, escopo, entradas, saídas, critérios de aceite e restrições antes de ser executada por um agente.[cite:30]
- Nenhum agente deve editar partes críticas do sistema sem política explícita de autorização, testes e rollback definidos.[cite:30]
- A memória persistente deve armazenar fatos duradouros, decisões e padrões, e não apenas histórico bruto de conversas.[cite:30]

## Resultado esperado do produto

Ao final das fases principais, o sistema deverá suportar o ciclo completo de uma assistência técnica moderna:

- Cadastro de clientes e equipamentos.
- Entrada e triagem do equipamento.
- Ordem de serviço com status e responsáveis.
- Diagnóstico técnico estruturado.
- Geração de laudo técnico padronizado.
- Orçamento e aprovação.
- Consumo de peças e materiais.
- Execução de serviço e histórico técnico.
- Garantia e pós-atendimento.
- CRM com relacionamento e recorrência.
- ERP operacional com estoque, financeiro e indicadores.

A IA não deve tentar construir esse conjunto em um único ciclo. O produto precisa ser decomposto em capacidades de negócio pequenas, independentes e rastreáveis, permitindo avanço contínuo sem perda de controle.[cite:30]

## Fase 0: descoberta obrigatória do repositório

Antes de liberar agentes implementadores, deve existir uma fase obrigatória de descoberta do repositório. Como o conteúdo do `blahxjr/SisteLaudos` não foi recuperado de forma confiável pelas fontes acessíveis, a primeira entrega operacional deve ser um diagnóstico técnico verificável da base real, feito por leitura local do código ou acesso direto ao repositório autorizado.[cite:16]

### Entregáveis da Fase 0

- Inventário da árvore do projeto.
- Identificação de stack, framework, linguagem, runtime e dependências.
- Mapeamento de rotas, módulos, serviços, models e camadas.
- Levantamento de banco de dados, migrations e entidades existentes.
- Fluxos já implementados relacionados a laudos, clientes e serviços.
- Débito técnico, gargalos arquiteturais e riscos de evolução.
- Grau de prontidão para agentes autônomos.
- Plano de refatoração mínima para habilitar desenvolvimento orientado por IA.

### Checklist de prontidão

| Item | Critério de validação |
|---|---|
| Estrutura do projeto | Diretórios, arquivos críticos e dependências mapeados |
| Execução local | Projeto sobe localmente com instruções reproduzíveis |
| Banco de dados | Entidades e migrations identificadas |
| Fluxos atuais | Casos de uso existentes documentados |
| Qualidade | Testes, lint, build e padrões identificados |
| Segurança | Segredos, auth, permissões e superfícies críticas avaliadas |
| Observabilidade | Logs, erros e auditoria avaliados |
| Autonomia | Limites seguros para ação de agentes definidos |

Sem a Fase 0 concluída, os agentes devem operar apenas em modo analítico e documental.[cite:30]

## Modelo de autonomia dos agentes

A abordagem recomendada é multiagente, com papéis especializados e comunicação por artefatos persistidos. Um único agente generalista tende a misturar descoberta, implementação e validação, o que reduz auditabilidade e dificulta correções.[cite:30]

### Papéis dos agentes

| Agente | Responsabilidade principal | Pode escrever código? | Atualiza memória? |
|---|---|---:|---:|
| Orquestrador | Seleciona tarefas, define sequência e aprova handoffs | Não | Sim |
| Descoberta de Código | Lê repositório, mapeia arquitetura e riscos | Não | Sim |
| Produto | Converte objetivo em roadmap, épicos e critérios de aceite | Não | Sim |
| Arquitetura | Define padrões técnicos, módulos e decisões estruturais | Não | Sim |
| Implementador | Executa tarefas pequenas e delimitadas | Sim | Sim |
| Revisor | Valida qualidade técnica, segurança e aderência ao escopo | Não | Sim |
| QA | Executa validações funcionais e regressão | Não | Sim |
| Memória | Consolida fatos permanentes e decisões canônicas | Não | Sim |

### Níveis de autonomia

| Nível | Descrição | Limite operacional |
|---|---|---|
| 0 | Somente leitura e análise | Sem alteração de arquivos |
| 1 | Produção de documentação e backlog | Sem alteração de código de produção |
| 2 | Alterações pequenas e localizadas | Apenas módulos liberados e tarefas atômicas |
| 3 | Entregas com testes e migrations | Requer revisão automatizada e checkpoints |
| 4 | Execução parcial de sprint | Requer orçamento de risco e aprovação humana |

A recomendação inicial para o SisteLaudos é operar em Nível 0 e Nível 1 até que a Fase 0 seja concluída. Depois disso, o projeto pode migrar para Nível 2 em módulos bem delimitados.[cite:30]

## Arquitetura de memória persistente

A memória persistente deve ser tratada como infraestrutura de produto, não como recurso secundário. Ela precisa combinar armazenamento estruturado, busca semântica e versionamento documental para sustentar continuidade entre agentes, sprints e decisões.[cite:30]

### Tipos de memória

| Tipo | Conteúdo | Uso principal |
|---|---|---|
| Memória de produto | visão, metas, roadmap, prioridades | orientar backlog e decisões |
| Memória de domínio | entidades, regras de negócio, glossário | manter consistência funcional |
| Memória técnica | stack, padrões, restrições, integrações | reduzir decisões incoerentes |
| Memória de execução | tarefas, falhas, bloqueios, learnings | melhorar planejamento futuro |
| Memória decisória | ADRs, trade-offs, justificativas | preservar racional arquitetural |

### Estratégia recomendada

- **Fonte canônica versionada:** arquivos no repositório em `docs/`, `adr/`, `specs/` e `playbooks/`.
- **Base relacional:** PostgreSQL para entidades de memória, tarefas, eventos, auditoria e estados de execução.
- **Busca semântica:** índice vetorial para recuperar contexto de documentação, código, tickets e decisões.
- **Snapshots de contexto:** estado resumido da sprint, branch, módulo e objetivo atual.

### Esquema conceitual mínimo da memória

| Entidade | Campos principais |
|---|---|
| memory_record | id, type, title, body, tags, source, confidence, created_at |
| decision_record | id, adr_id, context, decision, consequences, status |
| task_record | id, epic_id, title, status, inputs, outputs, acceptance_criteria |
| code_map | id, module, path, responsibility, dependencies, risk_level |
| execution_event | id, agent, task_id, action, result, artifact_ref, timestamp |
| context_snapshot | id, branch, module_scope, sprint_goal, active_constraints |

## Estrutura documental obrigatória

Para dar autonomia à IA, o projeto deve oferecer artefatos padronizados e legíveis por agentes. A ausência desses documentos geralmente causa retrabalho, ambiguidades e implementações desalinhadas.[cite:30]

### Estrutura sugerida no repositório

```text
/docs
  /product
    vision.md
    goals.md
    domain-model.md
    roadmap.md
  /agents
    agent-charter.md
    autonomy-policy.md
    handoff-protocol.md
    safety-rules.md
  /memory
    memory-schema.md
    retrieval-policy.md
  /architecture
    system-overview.md
    module-map.md
    integration-map.md
  /qa
    definition-of-done.md
    acceptance-rules.md
/adr
/specs
/tasks
/playbooks
```

### Artefatos mínimos

- **Vision document:** visão do produto, público, valor e escopo.
- **Domain model:** entidades, regras, estados e relacionamentos.
- **Roadmap por fases:** prioridades, dependências e metas.
- **ADR:** registro formal de decisões técnicas e trade-offs.
- **Task spec:** entrada padrão para agentes implementadores.
- **Definition of Done:** critério mínimo de conclusão por tipo de entrega.
- **Autonomy policy:** o que cada agente pode e não pode fazer.
- **Handoff protocol:** como um agente entrega contexto ao próximo.

## Backlog mestre por fases

A evolução deve ocorrer por capacidades de negócio e não por telas isoladas. Isso permite que a IA trabalhe com objetivo funcional claro, dependências explícitas e critérios de aceite mensuráveis.[cite:30]

### Fase 1 — Fundação operacional

- Concluir descoberta do repositório.
- Mapear domínio atual e lacunas.
- Definir arquitetura-alvo e política de agentes.
- Implantar estrutura documental e memória persistente.
- Padronizar convenções de código, lint, testes e revisão.

### Fase 2 — Núcleo de assistência técnica

- Cadastro de clientes.
- Cadastro de equipamentos.
- Entrada e triagem.
- Ordem de serviço.
- Status operacional e histórico.
- Diagnóstico técnico estruturado.
- Geração inicial de laudos.

### Fase 3 — Operação financeira e materiais

- Orçamento técnico.
- Aprovação de serviço.
- Peças e materiais.
- Mão de obra.
- Custos e margem.
- Controle de estoque vinculado ao serviço.

### Fase 4 — CRM e relacionamento

- Histórico completo de atendimento por cliente.
- Garantia e recorrência.
- Lembretes e follow-up.
- Segmentação de clientes.
- Agenda de contatos e oportunidades.

### Fase 5 — ERP ampliado

- Compras.
- Financeiro operacional.
- Contas a pagar e receber.
- Indicadores gerenciais.
- Produtividade por técnico, tipo de serviço e período.

## Módulos de negócio-alvo

A seguir está o mapa funcional que deve orientar o trabalho dos agentes. Cada módulo deve virar um épico separado, com capacidades menores e dependências explícitas.

| Módulo | Objetivo |
|---|---|
| Clientes | cadastro, contatos, histórico, segmentação |
| Equipamentos | identificação, número de série, categoria, acessórios |
| Triagem | registro inicial, defeito relatado, evidências e checklist |
| Ordem de Serviço | abertura, status, responsáveis, SLA |
| Diagnóstico | testes, achados, hipótese, causa, parecer técnico |
| Laudos | emissão, versão, PDF, assinatura, anexos |
| Orçamentos | composição de serviço, peças, materiais e aprovação |
| Execução | andamento, apontamentos, conclusão e garantia |
| Estoque | peças, materiais, baixa e reserva |
| Financeiro | custos, cobrança, pagamentos e relatórios |
| CRM | relacionamento, follow-up e recorrência |
| Administração | usuários, papéis, permissões e auditoria |

## Regras para geração de tarefas por agentes

Toda tarefa entregue a um agente implementador deve ter contrato explícito. Esse contrato reduz ambiguidade e melhora a qualidade da execução automática.[cite:30]

### Template operacional de task spec

```md
# Task Spec

## Identificação
- ID:
- Epic:
- Módulo:
- Prioridade:

## Objetivo
- Resultado funcional esperado:

## Contexto recuperado
- Documentos relevantes:
- ADRs relacionadas:
- Entidades impactadas:
- Restrições:

## Escopo
- Inclui:
- Não inclui:

## Entradas
- Arquivos/módulos-alvo:
- Dependências:
- Dados necessários:

## Saídas esperadas
- Código:
- Testes:
- Documentação:
- Atualizações de memória:

## Critérios de aceite
- [ ]
- [ ]
- [ ]

## Validação
- Comandos de teste:
- Cenários manuais:
- Riscos conhecidos:

## Rollback
- Estratégia de reversão:
```

## Padrão de handoff entre agentes

O handoff deve sempre produzir contexto mínimo suficiente para evitar que o agente seguinte repita análise já concluída ou tome decisões incompatíveis. A transferência de contexto precisa ser curta, objetiva e persistida.[cite:30]

### Conteúdo mínimo do handoff

- Objetivo da tarefa.
- Estado atual.
- Artefatos consultados.
- Decisões tomadas.
- Arquivos impactados.
- Riscos e pendências.
- Próxima ação recomendada.
- Referências para memória persistente.

### Template resumido

```md
# Handoff
- Task ID:
- Agente origem:
- Agente destino:
- Objetivo:
- Estado atual:
- Evidências:
- Decisões:
- Artefatos alterados:
- Pendências:
- Próximo passo:
```

## Guardrails de segurança e qualidade

A autonomia só é sustentável quando existe governança técnica. Sem isso, agentes podem amplificar débito técnico, produzir regressões ou comprometer dados sensíveis.[cite:30]

### Regras obrigatórias

- Nenhum agente altera banco sem migration versionada.
- Nenhum agente fecha tarefa sem atualizar memória e documentação pertinente.
- Nenhum agente executa refatoração ampla junto com nova feature na mesma tarefa.
- Nenhum agente cria endpoint, tela ou entidade sem critério de aceite associado.
- Nenhum agente altera autenticação, autorização ou auditoria sem revisão dedicada.
- Nenhum agente opera fora do escopo de módulo definido no task spec.
- Toda mudança relevante de arquitetura vira ADR.
- Toda entrega relevante deve conter evidência de validação automática e manual.

### Gates mínimos por entrega

| Gate | Critério |
|---|---|
| Build | Projeto compila ou sobe com sucesso |
| Lint | Sem violações críticas |
| Testes | Testes do módulo passam |
| Contrato | Critérios de aceite atendidos |
| Docs | Spec e memória atualizadas |
| Revisão | Revisor aprova aderência técnica |

## Métricas de maturidade do programa

A operação com agentes precisa ser acompanhada por métricas de processo e qualidade. O objetivo não é medir atividade, mas confiabilidade da autonomia e geração real de valor.[cite:30]

### Indicadores recomendados

- Taxa de tarefas concluídas sem retrabalho.
- Percentual de entregas com rollback.
- Cobertura de documentação por módulo.
- Cobertura de memória por decisão crítica.
- Tempo médio entre task spec e merge.
- Taxa de falhas por agente e por tipo de tarefa.
- Percentual de mudanças aceitas sem intervenção humana estrutural.
- Percentual de critérios de aceite validados automaticamente.

## Plano de implantação em 30 dias

### Semana 1

- Concluir Fase 0 de descoberta do repositório.
- Criar estrutura documental base.
- Definir agentes, charter e política de autonomia.
- Definir esquema inicial da memória persistente.

### Semana 2

- Formalizar domínio principal.
- Criar roadmap por módulos.
- Criar templates de ADR, task spec e handoff.
- Implantar fluxo operacional de backlog para agentes.

### Semana 3

- Liberar autonomia Nível 1.
- Criar primeiras tarefas de documentação executável.
- Mapear entidades centrais do núcleo de assistência técnica.
- Definir primeiro épico implementável.

### Semana 4

- Liberar autonomia Nível 2 em escopo restrito.
- Implementar primeira capability pequena do núcleo.
- Validar ciclo completo: spec → implementação → revisão → memória.
- Ajustar guardrails com base em falhas observadas.

## Ordem inicial de prioridade recomendada

A sequência abaixo é a mais adequada para maximizar valor e reduzir risco na evolução do SisteLaudos:

1. Descoberta técnica do sistema atual.
2. Estrutura documental e memória persistente.
3. Modelo de domínio da assistência técnica.
4. Política de agentes e handoff.
5. Cadastro de clientes e equipamentos.
6. Ordem de serviço e triagem.
7. Diagnóstico técnico estruturado.
8. Geração de laudos versionados.
9. Orçamento, peças e materiais.
10. CRM e ERP ampliado.

## Critério de pronto para a primeira sprint implementadora

A primeira sprint com agentes implementadores só deve começar quando os itens abaixo estiverem concluídos:

- Repositório mapeado e executável localmente.
- Padrões de arquitetura definidos.
- Domínio principal documentado.
- Memória persistente configurada.
- Templates operacionais publicados.
- Política de autonomia aprovada.
- Primeiro épico de escopo pequeno definido com critérios de aceite.

## Encaminhamento final

Este documento prepara a base operacional para que a IA desenvolva o sistema por agentes autônomos com memória persistente, sem cair no erro comum de começar pela implementação antes de consolidar contexto, governança e prioridade. A recomendação prática imediata é executar a Fase 0 sobre o repositório real do SisteLaudos e, em seguida, materializar este plano em arquivos dentro do próprio projeto para que os agentes passem a operar sobre uma base canônica e auditável.[cite:16][cite:30]
