import { TieredProductionChain } from './models';

// Farmers & Workers
import grainIcon from 'assets/annoIcons/Grain.webp';
import teffIcon from 'assets/annoIcons/Icon_teff_grass_0.webp';
import pigsIcon from 'assets/annoIcons/Pigs.webp';

// Jornaleros & Obreros
import cornIcon from 'assets/annoIcons/Corn.webp';

// Electricity/Fuel/Silo
import oilWellIcon from 'assets/annoIcons/OilWell.webp';
import fuelIcon from 'assets/annoIcons/Fuel.webp';
import tractorIcon from 'assets/annoIcons/TractorBarn.webp';
import siloIcon from 'assets/annoIcons/Silo.webp';

// Tourists
import tallowIcon from 'assets/annoIcons/Tallow.webp';
import soapIcon from 'assets/annoIcons/Soap.webp';
import coconutOilIcon from 'assets/annoIcons/Coconut_Oil.webp';
import cinnamonIcon from 'assets/annoIcons/Cinnamon.webp';
import shampooIcon from 'assets/annoIcons/Shampoo.webp';
import citrusIcon from 'assets/annoIcons/Citrus.webp';
import lemonadeIcon from 'assets/annoIcons/Lemonade.webp';
import sugarCaneIcon from 'assets/annoIcons/Sugar_cane.webp';
import sugarIcon from 'assets/annoIcons/Sugar.webp';
import saltpeterIcon from 'assets/annoIcons/Saltpeter.webp';
import camphorWaxIcon from 'assets/annoIcons/Camphor_Wax.webp';
import souvenirsIcon from 'assets/annoIcons/Souvenirs.webp';
import sandIcon from 'assets/annoIcons/Quartz_sand.webp';
import glassIcon from 'assets/annoIcons/Glass.webp';
import cottonIcon from 'assets/annoIcons/Cotton.webp';

// Restaurant
import potatoIcon from 'assets/annoIcons/Potato.webp';
import archdukeSchnitzel from 'assets/annoIcons/Archdukes_Schnitzel.webp';
import beefIcon from 'assets/annoIcons/Beef.webp';
import redPeppersIcon from 'assets/annoIcons/Red_peppers.webp';
import stroggofGoulashIcon from 'assets/annoIcons/Stroggof_Goulash.webp';
import fishIcon from 'assets/annoIcons/Fish.webp';
import fishFritesIcon from 'assets/annoIcons/Fish_and_Frites.webp';
import caribouIcon from 'assets/annoIcons/Caribou_Hunting_Cabin.webp';
import flourIcon from 'assets/annoIcons/Flour.webp';
import venisonEnCrouteIcon from 'assets/annoIcons/Venison_en_Croute.webp';
import lobstersIcon from 'assets/annoIcons/Icon_seafood_0.webp';
import tobaccoIcon from 'assets/annoIcons/Tobacco.webp';
import lobsterChemineeIcon from 'assets/annoIcons/Lobster_Cheminee.webp';

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
        mermaidDefinition: `flowchart LR; SiloPig(<span class='icon-flex-row'><img src='${pigsIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${siloIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>) --> Pig(<img src='${pigsIcon}' class='icon-size' /><span class='ratio-count'>2.66</span>)`
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
  },
  {
    colBreak: false,
    tierName: 'Tourists',
    productionChains: [
      {
        productionChain: 'shampoo',
        mermaidDefinition: `flowchart LR; CoconutOil(<img src='${coconutOilIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Cinnamon(<img src='${cinnamonIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Shampoo(<img src='${shampooIcon}' class='icon-size' /><span class='ratio-count'>1</span>); Pigs(<img src='${pigsIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Tallow(<img src='${tallowIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Soap(<img src='${soapIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Shampoo`
      },
      {
        productionChain: 'lemonade',
        mermaidDefinition: `flowchart LR; SugarCane(<img src='${sugarCaneIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Sugar(<img src='${sugarIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Lemonade(<img src='${lemonadeIcon}' class='icon-size' /><span class='ratio-count'>1</span>); Citrus(<img src='${citrusIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Saltpeter(<img src='${saltpeterIcon}' class='icon-size' /><span class='ratio-count'>4</span>) --> Lemonade`
      },
      {
        productionChain: 'souvenirs',
        mermaidDefinition: `flowchart LR; CamphorWax(<img src='${camphorWaxIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Souvenirs(<img src='${souvenirsIcon}' class='icon-size' /><span class='ratio-count'>1</span>); Sand(<img src='${sandIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Glass(<img src='${glassIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Souvenirs; Cotton(<img src='${cottonIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Souvenirs`
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Restaurants',
    productionChains: [
      {
        productionChain: 'archdukeSchnitzel',
        mermaidDefinition: `flowchart LR; Pigs0(<img src='${pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Schnitzel(<img src='${archdukeSchnitzel}' class='icon-size' /><span class='ratio-count'>1</span>); Potato(<span class='icon-flex-row'><img src='${potatoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> Schnitzel; Pigs1(<img src='${pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Tallow(<img src='${tallowIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Schnitzel`
      },
      {
        productionChain: 'stroggofGoulash',
        mermaidDefinition: `flowchart LR; Beef(<img src='${beefIcon}' class='icon-size' /><span class='ratio-count'>2</span>) & RedPeppers(<img src='${redPeppersIcon}' class='icon-size' /><span class='ratio-count'>2</span>) & Corn(<img src='${cornIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> StroggofGoulash(<img src='${stroggofGoulashIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'fishFrites',
        mermaidDefinition: `flowchart LR; Fish(<span class='icon-flex-row'><img src='${fishIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) & Potato(<span class='icon-flex-row'><img src='${potatoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) & Citrus(<span class='icon-flex-row'><img src='${citrusIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> FishFrites(<img src='${fishFritesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'venisonEnCroute',
        mermaidDefinition: `flowchart LR; Grain(<img src='${grainIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Flour(<span class='icon-flex-row'><img src='${flourIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> VenisonEnCroute(<img src='${venisonEnCrouteIcon}' class='icon-size' /><span class='ratio-count'>1</span>); Potato(<span class='icon-flex-row'><img src='${potatoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) & Caribou(<img src='${caribouIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> VenisonEnCroute`
      },
      {
        productionChain: 'lobsterCheminee',
        mermaidDefinition: `flowchart LR; Lobster(<img src='${lobstersIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Ctirus(<span class='icon-flex-row'><img src='${citrusIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) & Tobacco(<img src='${tobaccoIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> LobsterCheminee(<img src='${lobsterChemineeIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      }
    ]
  }
];
