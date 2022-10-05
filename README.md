# Anno 1800 Production Chain Renderer

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/dtomlinson91/anno-production-chain-renderer/quasar)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dtomlinson91/anno-production-chain-renderer/Deploy%20%7C%20GH%20Pages)
![GitHub](https://img.shields.io/github/license/dtomlinson91/anno-production-chain-renderer)

A production chain diagram for Anno 1800. Based on the original diagram by `/u/toby_p` from Reddit.

This uses Vue3 (Quasar) and [MermaidJS](https://mermaid-js.github.io/mermaid/#/) to render the diagrams.

## 🌎 Live view

<https://anno-production-chain-renderer.vercel.app>

Browser extensions like [GoFullPage](https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl) can be used to take a full-screen screenshot.

## Contributions

To make changes to the diagram follow the instructions below. You will need [yarn](https://yarnpkg.com) installed locally.

### Install dependencies

Clone the repository and install dependencies.

```bash
git clone https://github.com/dtomlinson91/anno-production-chain-renderer.git
yarn
```

Install Quasar CLI

```bash
yarn global add @quasar/cli
```

Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

Open <http://localhost:9000/anno-production-chain-renderer/#/> in your browser.

## Edit existing chain

To make changes to an existing chain edit the ratio/efficiency in either:

- `src/pages/data/production-chains-base.ts` for chains up to S4.
- `src/pages/data/production-chains-expansions.ts` for chains after S4.

Examples below use Bricks:

```typescript
{
    productionChain: 'bricks',
    chainMultiplier: '2',
    mermaidDefinition: endent`
    flowchart LR
    Clay(<span class='icon-flex-row'><img src='${icons.clayIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
    Bricks(<img src='${icons.bricksIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
    Clay --> Bricks
    `
}
```

### Edit number of buildings

For example to change the number of brick factories from 1 to 2:

Change

```
Bricks(<img src='${icons.bricksIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
```

to

```
Bricks(<img src='${icons.bricksIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
```

### Edit efficiency

For example to change the efficiency of the clay mines from 50% to 75%:

Change

```
Clay(<span class='icon-flex-row'><img src='${icons.clayIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
```

to

```
Clay(<span class='icon-flex-row'><img src='${icons.clayIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>75%</span><span class='ratio-count'>1</span></span></span>)
```

### Add/Remove electricity

For example to add electricity to brick factory:

Add:

```
style Bricks stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
```

before the Mermaid graph definition:

```
Bricks(<img src='${icons.bricksIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
style Bricks stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
Clay --> Bricks
```

## Add new chain

### Icons

Download the icon files and add them to `src/assets/annoIcons`

In `src/pages/data/icons.ts` for each icon:

Import the icon:

```typescript
import newIcon from 'assets/annoIcons/NewIcon.webp';
```

Add the icon variable to the export:

```typescript
export {
  ...
  mudBricksIcon,
  newIcon,
  newWorldIcon,
  ...
}
```

### Tier

To add a new tier open `src/pages/data/production-chains-base.ts` and add a new object to `productionChainsBase`:

```typescript
{
    colBreak: false,
    tierName: 'New Chain',
    productionChains: []
}
```

### Production Chain

To add a new production chain edit `productionChains` for the tier and add a new object for each chain.

`chainMultiplier` is optional and can be left out. Include it if the chain has been scaled down.

For example to add Sewing Machines to Artisans:

```typescript
{
  colBreak: false,
  tierName: 'Artisans',
  productionChains: [
    {
        productionChain: 'sewingMachines',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Charcoal(<img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Steel(<img src='${icons.steelIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SewingMachines(<img src='${icons.sewingMachinesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Steel
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Charcoal & Iron --> Steel --> SewingMachines
        Wood --> SewingMachines
        `
    }
  ]
}
```

for details on the `mermaidDefinition` see the section below.

## Mermaid definitions

See the documentation for mermaid flowcharts [here](https://mermaid-js.github.io/mermaid/#/flowchart).

A mermaid definition starts with

```
flowchart LR
```

You can use `TB` instead of `LB` if the diagram should be rendered top to bottom.

### Standard building

To define a standard building (no efficiency modifier):

```
Name(<img src='${icons.nameIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
```

Change:

- `Name` - Give the building a name in the chain.
- `{icons.nameIcon}` - Change the icon to match the icon in `src/pages/data/icons.ts`.
- Change the ratio count in `<span class='ratio-count'>1</span>`.

### Reduced efficiency building

To define a building with reduced efficiency:

```
Name(<span class='icon-flex-row'><img src='${icons.nameIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
```

In addition to the changes above:

- Change the efficiency percentage in `<span class='efficiency-perc'>50%</span>`.

### Electricity building

To make a building electrified follow the instructions above under the header "Add/Remove electricity".

### Define graph

To define the graph use the `Name` which you defined for each building:

```
Charcoal & Iron --> Steel --> SewingMachines
Wood --> SewingMachines
```

### Final Mermaid graph definition

The final mermaid definition should look something like:

```
flowchart LR
Charcoal(<img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
Steel(<img src='${icons.steelIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
SewingMachines(<img src='${icons.sewingMachinesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
Charcoal & Iron --> Steel --> SewingMachines
Wood --> SewingMachines
```
