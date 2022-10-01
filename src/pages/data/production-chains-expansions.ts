import endent from 'endent';
import { TieredProductionChain } from './models';
import * as icons from './icons';

export const productionChainsExpansions: TieredProductionChain[] = [
  {
    colBreak: false,
    tierName: 'Region Ratios',
    productionChains: [
      {
        productionChain: 'tractorGrain',
        mermaidDefinition: endent`
        flowchart LR
        TractorGrain(<span class='icon-flex-row'><img src='${icons.grainIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${icons.tractorIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>)
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        TractorGrain --> Grain
        `
      },
      {
        productionChain: 'siloPig',
        mermaidDefinition: endent`
        flowchart LR
        SiloPig(<span class='icon-flex-row'><img src='${icons.pigsIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${icons.siloIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>)
        Pig(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>2.66</span>)
        SiloPig --> Pig
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Fuel | Silo',
    productionChains: [
      {
        productionChain: 'tractor',
        mermaidDefinition: endent`
        flowchart LR
        OilWell(<img src='${icons.oilWellIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Fuel(<img src='${icons.fuelIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tractor(<img src='${icons.tractorIcon}' class='icon-size' /><span class='ratio-count'>20</span>)
        OilWell --> Fuel --> Tractor
        `
      },
      {
        productionChain: 'silos',
        mermaidDefinition: endent`
        flowchart TB
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Corn(<img src='${icons.cornIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Teff(<img src='${icons.teffIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Silo(<img src='${icons.siloIcon}' class='icon-size' /><span class='ratio-count'>5</span>)
        Grain --> Silo
        Corn --> Silo
        Teff --> Silo
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Tourists',
    productionChains: [
      {
        productionChain: 'shampoo',
        mermaidDefinition: endent`
        flowchart LR
        CoconutOil(<img src='${icons.coconutOilIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cinnamon(<img src='${icons.cinnamonIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Shampoo(<img src='${icons.shampooIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pigs(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Tallow(<img src='${icons.tallowIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Soap(<img src='${icons.soapIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        CoconutOil & Cinnamon --> Shampoo
        Pigs --> Tallow --> Soap --> Shampoo
        `
      },
      {
        productionChain: 'lemonade',
        mermaidDefinition: endent`
        flowchart LR
        SugarCane(<img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sugar(<img src='${icons.sugarIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Lemonade(<img src='${icons.lemonadeIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Citrus(<img src='${icons.citrusIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Saltpeter(<img src='${icons.saltpeterIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        SugarCane --> Sugar --> Lemonade
        Citrus --> Lemonade
        Saltpeter --> Lemonade
        `
      },
      {
        productionChain: 'souvenirs',
        mermaidDefinition: endent`
        flowchart LR
        CamphorWax(<img src='${icons.camphorWaxIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Souvenirs(<img src='${icons.souvenirsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand(<img src='${icons.sandIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Glass(<img src='${icons.glassIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Souvenirs
        Cotton(<img src='${icons.cottonIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        CamphorWax --> Souvenirs
        Sand --> Glass --> Souvenirs
        Cotton --> Souvenirs
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Restaurants',
    productionChains: [
      {
        productionChain: 'archdukeSchnitzel',
        mermaidDefinition: endent`
        flowchart LR
        Pigs0(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Schnitzel(<img src='${icons.archdukeSchnitzel}' class='icon-size' /><span class='ratio-count'>1</span>)
        Potato(<span class='icon-flex-row'><img src='${icons.potatoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Schnitzel
        Pigs1(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${icons.tallowIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pigs0 --> Schnitzel
        Potato --> Schnitzel
        Pigs1 --> Tallow --> Schnitzel
        `
      },
      {
        productionChain: 'stroggofGoulash',
        mermaidDefinition: endent`
        flowchart LR
        Beef(<img src='${icons.beefIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        RedPeppers(<img src='${icons.redPeppersIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Corn(<img src='${icons.cornIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        StroggofGoulash(<img src='${icons.stroggofGoulashIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Beef & RedPeppers & Corn --> StroggofGoulash
        `
      },
      {
        productionChain: 'fishFrites',
        mermaidDefinition: endent`
        flowchart LR
        Fish(<span class='icon-flex-row'><img src='${icons.fishIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Potato(<span class='icon-flex-row'><img src='${icons.potatoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Citrus(<span class='icon-flex-row'><img src='${icons.citrusIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        FishFrites(<img src='${icons.fishFritesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Fish & Potato & Citrus --> FishFrites
        `
      },
      {
        productionChain: 'venisonEnCroute',
        mermaidDefinition: endent`
        flowchart LR
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${icons.flourIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        VenisonEnCroute(<img src='${icons.venisonEnCrouteIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Potato(<span class='icon-flex-row'><img src='${icons.potatoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Caribou(<img src='${icons.caribouIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Grain --> Flour --> VenisonEnCroute
        Potato --> VenisonEnCroute
        Caribou --> VenisonEnCroute
        `
      },
      {
        productionChain: 'lobsterCheminee',
        mermaidDefinition: endent`
        flowchart LR
        Lobster(<img src='${icons.lobstersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Citrus(<span class='icon-flex-row'><img src='${icons.citrusIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Tobacco(<img src='${icons.tobaccoIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        LobsterCheminee(<img src='${icons.lobsterChemineeIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Lobster & Citrus & Tobacco --> LobsterCheminee
        `
      }
    ]
  }
];
