import { onMounted } from 'vue';
import mermaid from 'mermaid';

function initialiseMermaid() {
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

export { mermaid, initialiseMermaid };
