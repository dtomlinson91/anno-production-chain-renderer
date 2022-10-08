Vetur docs on component data: https://vuejs.github.io/vetur/guide/component-data.html#workspace-component-data

Requires the following dev dependency for Volar:
https://github.com/johnsoncodehk/volar-plugins/tree/master/packages/vetur

yarn add --dev @volar-plugins/vetur

Create volar.config.js

```js
const vetur = require('@volar-plugins/vetur');

module.exports = {
  plugins: [vetur()],
};
```

Generate required data:

https://itnext.io/vue-intellisense-in-vscode-33cf8860e092
https://github.com/cycraft/vue-intellisense

yarn add --dev vue-intellisense
yarn run vue-int --input src/components --output .vetur --recursive

Add to package.json

```json
  "vetur": {
    "tags": ".vetur/tags.json",
    "attributes": ".vetur/attributes.json"
  }

```

https://vue-styleguidist.github.io
