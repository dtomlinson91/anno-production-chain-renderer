import { onMounted } from 'vue';
import mermaid from 'mermaid';

export function initialiseMermaid() {
  onMounted(() => {
    mermaid.initialize({
      startOnLoad: false,
      logLevel: 'fatal',
      securityLevel: 'loose',
      theme: 'neutral',
      flowchart: { htmlLabels: true }
    });
  });
}
