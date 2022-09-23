import { TieredProductionChain } from './models';

// Icons
import lightningIcon from '../assets/annoIcons/Lightning.png';

// Building Materials
import woodIcon from '../assets/annoIcons/Wood.webp';
import timberIcon from '../assets/annoIcons/Timber.webp';
import clayIcon from '../assets/annoIcons/Clay.webp';
import bricksIcon from '../assets/annoIcons/Bricks.webp';
import charcoalKilnIcon from '../assets/annoIcons/Charcoal_kiln.webp';
import coalIcon from '../assets/annoIcons/Coal.webp';
import ironIcon from '../assets/annoIcons/Iron.webp';
import steelIcon from '../assets/annoIcons/Steel.webp';
import steelBeamsIcon from '../assets/annoIcons/Steel_beams.webp';
import sandIcon from '../assets/annoIcons/Quartz_sand.webp';
import glassMakersIcon from '../assets/annoIcons/Glass.webp';
import windowMakersIcon from '../assets/annoIcons/Windows.webp';
import cementIcon from '../assets/annoIcons/Cement.webp';
import concreteFactory from '../assets/annoIcons/Reinforced_concrete.webp';

// Farmers & Workers
import potatoIcon from '../assets/annoIcons/Potato.webp';
import schnappsIcon from '../assets/annoIcons/Schnapps.webp';
import woolIcon from '../assets/annoIcons/Wool.webp';
import workClothesIcon from '../assets/annoIcons/Work_clothes.webp';
import pigIcon from '../assets/annoIcons/Pigs.webp';
import sausageIcon from '../assets/annoIcons/Sausages.webp';
import grainIcon from '../assets/annoIcons/Grain.webp';
import flourIcon from '../assets/annoIcons/Flour.webp';
import breadIcon from '../assets/annoIcons/Bread.webp';
import pigsIcon from '../assets/annoIcons/Pigs.webp';
import tallowIcon from '../assets/annoIcons/Tallow.webp';
import soapIcon from '../assets/annoIcons/Soap.webp';
import breweryIcon from '../assets/annoIcons/Beer.webp';
import malthouseIcon from '../assets/annoIcons/Malt.webp';
import hopFarmIcon from '../assets/annoIcons/Hops.webp';
import sailmakersIcon from '../assets/annoIcons/Sails.webp';

// Artisans
import beefIcon from '../assets/annoIcons/Beef.webp';
import redPeppersIcon from '../assets/annoIcons/Red_peppers.webp';
import artisnalKitchenIcon from '../assets/annoIcons/Goulash.webp';
import cannedFoodIcon from '../assets/annoIcons/Canned_food.webp';
import sewingMachinesIcon from '../assets/annoIcons/Sewing_machines.webp';
import fursIcon from '../assets/annoIcons/Furs.webp';
import furCoatsIcon from '../assets/annoIcons/Fur_Coats.webp';
import sugarCaneIcon from '../assets/annoIcons/Sugar_cane.webp';
import rumIcon from '../assets/annoIcons/Rum.webp';

// Engineers
import copperIcon from '../assets/annoIcons/Copper.webp';
import zincIcon from '../assets/annoIcons/Zinc.webp';
import brassIcon from '../assets/annoIcons/Brass.webp';
import glassesIcon from '../assets/annoIcons/Glasses.webp';
import caoutchoucIcon from '../assets/annoIcons/Caoutchouc.webp';
import highWheelerIcon from '../assets/annoIcons/High_wheeler.webp';

// Jornaleros
import cottonIcon from '../assets/annoIcons/Cotton.webp';
import cottonMillIcon from '../assets/annoIcons/Cotton_fabric.webp';
import plantainPlantationIcon from '../assets/annoIcons/Plantains.webp';
import fishOilIcon from '../assets/annoIcons/Fish_Oil.webp';
import friedPlantainsIcon from '../assets/annoIcons/Fried_plantains.webp';
import alpacaWoolIcon from '../assets/annoIcons/Alpaca_wool.webp';
import ponchosIcon from '../assets/annoIcons/Poncho.webp';
import cornIcon from '../assets/annoIcons/Corn.webp';
import tortillasIcon from '../assets/annoIcons/Tortilla.webp';
import coffeeBeansIcon from '../assets/annoIcons/Coffee_beans.webp';
import coffeeIcon from '../assets/annoIcons/Coffee.webp';
import feltIcon from '../assets/annoIcons/Felt.webp';
import bowlerHatsIcon from '../assets/annoIcons/Bowler_hats.webp';
import woodVeneersIcon from '../assets/annoIcons/Wood_veneers.webp';
import tobaccoIcon from '../assets/annoIcons/Tobacco.webp';
import cigarIcon from '../assets/annoIcons/Cigars.webp';
import sugarIcon from '../assets/annoIcons/Sugar.webp';
import cocoaIcon from '../assets/annoIcons/Cocoa.webp';
import chocolateIcon from '../assets/annoIcons/Chocolate.webp';

// Weapons
import weaponsIcon from '../assets/annoIcons/Weapons.webp';
import saltpeterIcon from '../assets/annoIcons/Saltpeter.webp';
import dynamiteIcon from '../assets/annoIcons/Dynamite.webp';
import heavyWeaponsIcon from '../assets/annoIcons/Advanced_weapons.webp';

// Production Chains
export const productionChains: TieredProductionChain[] = [
  {
    tierName: 'Building Materials',
    width: 2,
    productionChains: [
      {
        productionChain: 'timber',
        mermaidDefinition: `flowchart LR; Wood(<img src='${woodIcon}' class='icon-size' /><span class='ratio-count'>1</span>)-->Timber(<img src='${timberIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'bricks',
        mermaidDefinition: `flowchart LR; Clay(<img src='${clayIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Bricks(<img src='${bricksIcon}' class='icon-size' /><span class='ratio-count'>2</span>)`
      },
      {
        productionChain: 'steelBeams',
        mermaidDefinition: `flowchart LR; CharcoalKiln(<img src='${charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Iron(<span class='icon-flex-row'><img src='${ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> Steel(<span class='icon-flex-row'><img src='${steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66%</span><span class='ratio-count'>1</span></span></span>) --> SteelBeams(<img src='${steelBeamsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'windows',
        mermaidDefinition: `flowchart LR; Sand(<img src='${sandIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> GlassMakers(<img src='${glassMakersIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> WindowMakers(<img src='${windowMakersIcon}' class='icon-size' /><span class='ratio-count'>4</span>); Wood(<span class='icon-flex-row'><img src='${woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> WindowMakers`
      },
      {
        productionChain: 'concrete',
        mermaidDefinition: `flowchart LR; Charcoal(<img src='${charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Iron(<span class='icon-flex-row'><img src='${ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> Steel(<img src='${steelIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Concrete(<img src='${concreteFactory}' class='icon-size' /><span class='ratio-count'>2</span>); Cement(<img src='${cementIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Concrete`
      }
    ]
  },
  {
    tierName: 'Farmers | Workers',
    width: 2,
    productionChains: [
      {
        productionChain: 'workClothes',
        mermaidDefinition: `flowchart LR; Wool(<img src='${woolIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> WorkClothes(<img src='${workClothesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'schnapps',
        mermaidDefinition: `flowchart LR; Potato(<img src='${potatoIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Schnapps(<img src='${schnappsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'sausages',
        mermaidDefinition: `flowchart LR; Pig(<img src='${pigIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Sausages(<img src='${sausageIcon}' class='icon-size' /><span class='ratio-count'>2</span>)`
      },
      {
        productionChain: 'bread',
        mermaidDefinition: `flowchart LR; Grain(<img src='${grainIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Flour(<img src='${flourIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Bread(<img src='${breadIcon}' class='icon-size' /><span class='ratio-count'>2</span>)`
      },
      {
        productionChain: 'soap',
        mermaidDefinition: `flowchart LR; Pigs(<img src='${pigsIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Tallow(<img src='${tallowIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Soap(<img src='${soapIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'beer',
        mermaidDefinition: `flowchart LR; Grain(<img src='${grainIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Malthouse(<img src='${malthouseIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Brewery(<img src='${breweryIcon}' class='icon-size' /><span class='ratio-count'>2</span>); HopFarm(<img src='${hopFarmIcon}' class='icon-size' /><span class='ratio-count'>3</span>) --> Brewery`
      }
    ]
  },
  {
    tierName: 'Artisans',
    width: 3,
    productionChains: [
      {
        productionChain: 'cannedFood',
        mermaidDefinition: `flowchart LR; Beef(<img src='${beefIcon}' class='icon-size' /><span class='ratio-count'>4</span>) --> ArtisnalKitchen(<img src='${artisnalKitchenIcon}' class='icon-size' /><span class='ratio-count'>4</span>) --> Cannery(<img src='${cannedFoodIcon}' class='icon-size' /><span class='ratio-count'>3</span>); NAME(<img src='${redPeppersIcon}' class='icon-size' /><span class='ratio-count'>4</span>) --> ArtisnalKitchen; Iron(<span class='icon-flex-row'><img src='${ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> Cannery`
      },
      {
        productionChain: 'sewingMachines',
        mermaidDefinition: `flowchart LR; Charcoal(<img src='${charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Steel(<img src='${steelIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> SewingMachines(<img src='${sewingMachinesIcon}' class='icon-size' /><span class='ratio-count'>1</span>); Iron(<span class='icon-flex-row'><img src='${ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> Steel; Wood(<span class='icon-flex-row'><img src='${woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> SewingMachines`
      },
      {
        productionChain: 'rum',
        mermaidDefinition: `flowchart LR; SugarCane(<img src='${sugarCaneIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Wood(<span class='icon-flex-row'><img src='${woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> Rum(<img src='${rumIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'furs',
        mermaidDefinition: `flowchart LR; Cotton(<img src='${cottonIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> CottonMill(<img src='${cottonMillIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> FurCoats(<img src='${furCoatsIcon}' class='icon-size' /><span class='ratio-count'>1</span>); Furs(<img src='${fursIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> FurCoats`
      }
    ]
  },
  {
    tierName: 'Jornaleros | Obreros',
    width: 2,
    productionChains: [
      {
        productionChain: 'plantains',
        mermaidDefinition: `flowchart LR; PlantainPlantation(<img src='${plantainPlantationIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & FishOil(<img src='${fishOilIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> FriedPlantains(<img src='${friedPlantainsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'ponchos',
        mermaidDefinition: `flowchart LR; AlpacaWool(<img src='${alpacaWoolIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Ponchos(<img src='${ponchosIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'tortillas',
        mermaidDefinition: `flowchart LR; Beef(<img src='${beefIcon}' class='icon-size' /><span class='ratio-count'>2</span>) & Corn(<img src='${cornIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Tortillas(<img src='${tortillasIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'coffee',
        mermaidDefinition: `flowchart LR; CoffeeBeans(<img src='${coffeeBeansIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Coffee(<img src='${coffeeIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'bowlerHats',
        mermaidDefinition: `flowchart LR; Cotton(<img src='${cottonIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> CottonMill(<img src='${cottonMillIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> BowlerHats(<img src='${bowlerHatsIcon}' class='icon-size' /><span class='ratio-count'>1</span>); AlpacaWool(<img src='${alpacaWoolIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Felt(<img src='${feltIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> BowlerHats`
      },
      {
        productionChain: 'cigars',
        mermaidDefinition: `flowchart LR; Wood(<span class='icon-flex-row'><img src='${woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> WoodVeneers(<img src='${woodVeneersIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Cigars(<img src='${cigarIcon}' class='icon-size' /><span class='ratio-count'>1</span>); Tobacco(<img src='${tobaccoIcon}' class='icon-size' /><span class='ratio-count'>4</span>) --> Cigars`
      },
      {
        productionChain: 'chocolate',
        mermaidDefinition: `flowchart LR; SugarCane(<img src='${sugarCaneIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Sugar(<img src='${sugarIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Chocolate(<img src='${chocolateIcon}' class='icon-size' /><span class='ratio-count'>1</span>); Cocoa(<img src='${cocoaIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Chocolate`
      }
    ]
  },
  {
    tierName: 'Engineers',
    width: 2,
    productionChains: [
      {
        productionChain: 'highWheeler',
        mermaidDefinition: `flowchart LR; Coal(<img src='${coalIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Iron(<img src='${ironIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Steel(<img src='${steelIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> HighWheeler(<span class='icon-flex-row'><img src='${highWheelerIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${lightningIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>); Caoutchouc(<img src='${caoutchoucIcon}' class='icon-size' /><span class='ratio-count'>4</span>) --> HighWheeler`
      },
      {
        productionChain: 'glasses',
        mermaidDefinition: `flowchart LR; Copper(<img src='${copperIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Zinc(<img src='${zincIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Brass(<img src='${brassIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Glasses(<img src='${glassesIcon}' class='icon-size' /><span class='ratio-count'>3</span>); Sand(<img src='${sandIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Glass(<img src='${glassMakersIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Glasses`
      }
    ]
  },
  {
    tierName: 'Weapons',
    width: 3,
    productionChains: [
      {
        productionChain: 'weapons',
        mermaidDefinition: `flowchart LR; charcoalKiln(<img src='${charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Iron(<span class='icon-flex-row'><img src='${ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> Steel(<span class='icon-flex-row'><img src='${steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33%</span><span class='ratio-count'>1</span></span></span>) --> Weapons(<img src='${weaponsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'heavyWeapons',
        mermaidDefinition: `flowchart LR; Saltpeter(<img src='${saltpeterIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Dynamite(<img src='${dynamiteIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> HeavyWeapons(<span class='icon-flex-row'><img src='${heavyWeaponsIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${lightningIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>); Pig(<img src='${pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Tallow(<img src='${tallowIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Dynamite; Charcoal(<img src='${charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Iron(<span class='icon-flex-row'><img src='${ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> Steel(<span class='icon-flex-row'><img src='${steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> HeavyWeapons`
      }
    ]
  },
  {
    tierName: 'Sails',
    width: 2,
    productionChains: [
      {
        productionChain: 'oldWorldSails',
        mermaidDefinition: `flowchart LR; Wool(<img src='${woolIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Sailmakers(<img src='${sailmakersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      },
      {
        productionChain: 'newWorldSails',
        mermaidDefinition: `flowchart LR; Cotton(<img src='${cottonIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> CottonMill(<img src='${cottonMillIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Sailmakers(<img src='${sailmakersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
      }
    ]
  }
];