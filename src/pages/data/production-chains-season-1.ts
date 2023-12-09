import { TieredProductionChain } from './models';
import endent from 'endent';
import * as icons from './icons';

// Production Chains
export const productionChainsSeason1: TieredProductionChain[] = [
  {
    colBreak: false,
    tierName: 'Explorers',
    productionChains: [
      {
        productionChain: 'pemmican',
        mermaidDefinition: endent`
        flowchart LR
        Whaling(<img src='${icons.whalingIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Caribou(<img src='${icons.caribouIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pemmican(<img src='${icons.pemmicanIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Whaling & Caribou --> Pemmican
        `
      },
      {
        productionChain: 'sleepingBag',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Seal(<span class='icon-flex-row'><img src='${icons.sealIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Goose(<img src='${icons.gooseIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        SleepingBag(<img src='${icons.sleepingBagIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Seal & Goose --> SleepingBag
        `
      },
      {
        productionChain: 'oilLamp',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Copper(<span class='icon-flex-row'><img src='${icons.copperIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Zinc(<span class='icon-flex-row'><img src='${icons.zincIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Brass(<img src='${icons.brassIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        OilLamp(<img src='${icons.oilLampIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Whaling(<img src='${icons.whalingIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Copper & Zinc --> Brass --> OilLamp
        Whaling --> OilLamp
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Technicians',
    productionChains: [
      {
        productionChain: 'parkas',
        chainMultiplier: '3',
        mermaidDefinition: endent`
        flowchart LR
        Bears(<img src='${icons.bearIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Seal(<span class='icon-flex-row'><img src='${icons.sealIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Parkas(<img src='${icons.parkasIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Bears & Seal --> Parkas
        `
      },
      {
        productionChain: 'huskySled',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Seal(<span class='icon-flex-row'><img src='${icons.sealIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        SledFrame(<img src='${icons.sledFrameIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        HuskySled(<img src='${icons.huskySledIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Husky(<img src='${icons.huskyIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Wood & Seal --> SledFrame --> HuskySled
        Husky --> HuskySled
        `
      }
    ]
  }
];
