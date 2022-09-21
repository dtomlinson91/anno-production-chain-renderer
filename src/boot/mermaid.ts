import { boot } from 'quasar/wrappers';
import mermaid from 'mermaid';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  mermaid.initialize({ startOnLoad: true });
});
