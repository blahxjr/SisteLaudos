# Política de Retenção e Atualização de Memória

Objetivo
- Definir diretrizes de quanto tempo e quando registros de memória devem ser mantidos, atualizados ou removidos.

Princípios
- Fatos duradouros (decisões, ADRs, specs aprovadas): conservar indefinidamente (versionar).
- Execução e eventos transitórios (logs operacionais, execuções temporárias): manter por período configurável (ex.: 90 dias) e depois arquivar ou excluir.
- Embeddings derivados de documentos: re-gerar quando o documento canônico mudar; manter histórico de versões curto.

Regras sugeridas
- `decision_record`: conservar indefinidamente.
- `task_record`: conservar enquanto houver estado ativo + 1 ano após conclusão.
- `execution_event`: manter 90 dias, a menos que marcado para auditoria permanente.

Operação
- Implementar processos de limpeza agendada (cron job) para remover/arquivar registros antigos.
- Sempre versionar e referenciar ADRs quando decisões mudarem.
