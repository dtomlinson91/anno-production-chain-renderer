import { TieredProductionChain } from './models';

// Farmers & Workers
import grainIcon from 'assets/annoIcons/Grain.webp';
import teffIcon from 'assets/annoIcons/Icon_teff_grass_0.webp';
import pigIcon from 'assets/annoIcons/Pigs.webp';

// Jornaleros & Obreros
import cornIcon from 'assets/annoIcons/Corn.webp';

// Electricity/Fuel/Silo
import oilWellIcon from 'assets/annoIcons/OilWell.webp';
import fuelIcon from 'assets/annoIcons/Fuel.webp';
import tractorIcon from 'assets/annoIcons/TractorBarn.webp';
import siloIcon from 'assets/annoIcons/Silo.webp';

export const productionChainsExpansions: TieredProductionChain[] = [
  {
    colBreak: false,
    tierName: 'Region Ratios',
    productionChains: [
      {
        productionChain: 'tractorGrain',
        mermaidDefinition: `flowchart LR; TractorGrain(<span class='icon-flex-row'><img src='${grainIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${tractorIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>) --> Grain(<img src='${grainIcon}' class='icon-size' /><span class='ratio-count'>4</span>)`
      },
      {
        productionChain: 'siloPig',
        mermaidDefinition: `flowchart LR; SiloPig(<span class='icon-flex-row'><img src='${pigIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${siloIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>) --> Pig(<img src='${pigIcon}' class='icon-size' /><span class='ratio-count'>2.66</span>)`
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Fuel | Silo',
    productionChains: [
      {
        productionChain: 'tractor',
        mermaidDefinition: `flowchart LR; OilWell(<img src='${oilWellIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Fuel(<img src='${fuelIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Tractor(<img src='${tractorIcon}' class='icon-size' /><span class='ratio-count'>20</span>)`
      },
      {
        productionChain: 'silos',
        mermaidDefinition: `flowchart TB; Grain(<img src='${grainIcon}' class='icon-size' /><span class='ratio-count'>1</span>); Corn(<img src='${cornIcon}' class='icon-size' /><span class='ratio-count'>1</span>); Teff(<img src='${teffIcon}' class='icon-size' /><span class='ratio-count'>1</span>); Silo(<img src='${siloIcon}' class='icon-size' /><span class='ratio-count'>5</span>); Grain --> Silo; Corn --> Silo; Teff --> Silo`
      }
    ]
  }
];
