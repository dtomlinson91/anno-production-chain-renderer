import { TieredProductionChain } from './models';
import endent from 'endent';
import * as icons from './icons';

// Production Chains
export const productionChainsSeason2: TieredProductionChain[] = [
  {
    colBreak: false,
    tierName: 'Shepherds',
    productionChains: [
      {
        productionChain: 'finery',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Linseed(<img src='${icons.linseedIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Linen(<span class='icon-flex-row'><img src='${icons.linenIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Embroidery(<img src='${icons.embroidererIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Linseed --> Linen --> Embroidery
        `
      },
      {
        productionChain: 'driedMeat',
        mermaidDefinition: endent`
        flowchart LR
        Salt(<img src='${icons.saltIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sanga(<img src='${icons.sangaIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        DryHouse(<img src='${icons.dryHouseIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Salt & Sanga --> DryHouse
        `
      },
      {
        productionChain: 'hibiscusTea',
        chainMultiplier: '3',
        mermaidDefinition: endent`
        flowchart LR
        HibiscusFarm(<span class='icon-flex-row'><img src='${icons.hibiscusFarmIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.66%</span><span class='ratio-count'>1</span></span></span>)
        HibiscusTea(<img src='${icons.hibiscusTeaIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        HibiscusFarm --> HibiscusTea
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Elders',
    productionChains: [
      {
        productionChain: 'ceramics',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Clay(<span class='icon-flex-row icon-regional-container'><img src='${icons.enbesaIcon}' class='icon-regional' /><img src='${icons.clayIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Indigo(<img src='${icons.indigoIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Ceramics(<img src='${icons.ceramicsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Clay & Indigo --> Ceramics
        `
      },
      {
        productionChain: 'tapestries',
        mermaidDefinition: endent`
        flowchart LR
        Linseed(<img src='${icons.linseedIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Linen(<img src='${icons.linenIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tapestry(<img src='${icons.tapestriesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Indigo(<img src='${icons.indigoIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Linseed --> Linen --> Tapestry
        Indigo --> Tapestry
        `
      },
      {
        productionChain: 'wat',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Teff(<img src='${icons.teffIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Spices(<img src='${icons.spicesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        TeffMill(<span class='icon-flex-row'><img src='${icons.teffMillIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wat(<img src='${icons.watIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Lobster(<img src='${icons.lobstersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Teff & Spices --> TeffMill --> Wat
        Lobster --> Wat
        `
      },
      {
        productionChain: 'pipes',
        chainMultiplier: '6',
        mermaidDefinition: endent`
        flowchart LR
        Clay(<span class='icon-flex-row icon-regional-container'><img src='${icons.enbesaIcon}' class='icon-regional' /><img src='${icons.clayIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.66%</span><span class='ratio-count'>1</span></span></span>)
        Tobacco(<span class='icon-flex-row'><img src='${icons.tobaccoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.66%</span><span class='ratio-count'>2</span></span></span>)
        Pipes(<img src='${icons.pipesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Clay & Tobacco --> Pipes
        `
      },
      {
        productionChain: 'luminer',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Paper(<span class='icon-flex-row'><img src='${icons.paperIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Luminer(<img src='${icons.luminerIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Indigo(<img src='${icons.indigoIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood --> Paper --> Luminer
        Indigo --> Luminer
        `
      },
      {
        productionChain: 'lanterns',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Sand(<span class='icon-flex-row'><img src='${icons.sandIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glass(<span class='icon-flex-row'><img src='${icons.glassIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lanterns(<img src='${icons.lanternsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cotton(<img src='${icons.cottonIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Apiary(<span class='icon-flex-row'><img src='${icons.apiaryIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Candles(<span class='icon-flex-row'><img src='${icons.candlesIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sand --> Glass --> Lanterns
        Cotton & Apiary --> Candles --> Lanterns
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Scholars',
    productionChains: [
      {
        productionChain: 'boots',
        mermaidDefinition: endent`
        flowchart LR
        Sanga(<img src='${icons.sangaIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Boots(<img src='${icons.bootsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sanga --> Boots
        `
      },
      {
        productionChain: 'tailors',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Cotton(<img src='${icons.cottonIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        CottonMill(<span class='icon-flex-row'><img src='${icons.cottonMillIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Tailors(<img src='${icons.tailorsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Linseed(<img src='${icons.linseedIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Linen(<span class='icon-flex-row'><img src='${icons.linenIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cotton --> CottonMill --> Tailors
        Linseed --> Linen --> Tailors
        `
      },
      {
        productionChain: 'telephones',
        chainMultiplier: '3',
        mermaidDefinition: endent`
        flowchart LR
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Filament(<span class='icon-flex-row'><img src='${icons.filamentIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.66%</span><span class='ratio-count'>2</span></span></span>)
        Telephones(<img src='${icons.telephonesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Marquetry(<span class='icon-flex-row'><img src='${icons.marquetryIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.66%</span><span class='ratio-count'>2</span></span></span>)
        style Telephones stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        Coal --> Filament --> Telephones
        Wood --> Marquetry --> Telephones
        `
      }
    ]
  },
  { colBreak: true, tierName: 'skip' },
  { colBreak: true, tierName: 'skip' },
  {
    colBreak: false,
    tierName: 'Advanced Chains (Scholars)',
    productionChains: [
      {
        productionChain: 'advancedCoffee',
        mermaidDefinition: endent`
        flowchart LR
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        MaltHouse(<img src='${icons.malthouseIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Coffee(<img src='${icons.coffeeIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Coffee stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Grain --> MaltHouse --> Coffee
        `
      },
      {
        productionChain: 'advancedRum',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Potato(<img src='${icons.potatoIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Rum(<img src='${icons.rumIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Rum stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Coal & Potato --> Rum
        `
      },
      {
        productionChain: 'advancedCotton',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Sheep(<img src='${icons.woolIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cotton(<img src='${icons.cottonMillIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Cotton stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Sheep & Wood --> Cotton
        `
      }
    ]
  }
];
