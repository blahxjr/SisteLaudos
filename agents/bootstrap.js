const memory = require('../src/lib/agent-memory');

async function main() {
  console.log('Bootstrap agente — salvando registro de teste na memória local');
  const rec = await memory.saveRecord({ type: 'execution_event', agent: 'bootstrap', action: 'start', result: 'ok' });
  console.log('Registro salvo:', rec.id);
  const all = await memory.listRecords();
  console.log('Total de registros na memória:', all.length);
}

main().catch(err => { console.error(err); process.exit(1); });
