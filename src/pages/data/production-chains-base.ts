import { TieredProductionChain } from './models';
import endent from 'endent';
import * as icons from './icons';

// Production Chains
export const productionChainsBase: TieredProductionChain[] = [
  {
    colBreak: false,
    tierName: 'Farmers | Workers',
    productionChains: [
      {
        productionChain: 'workClothes',
        mermaidDefinition: endent`
        flowchart LR
        Wool(<img src='${icons.woolIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        WorkClothes(<img src='${icons.workClothesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wool --> WorkClothes
        `
      },
      {
        productionChain: 'schnapps',
        mermaidDefinition: endent`
        flowchart LR
        Potato(<img src='${icons.potatoIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Schnapps(<img src='${icons.schnappsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Potato --> Schnapps
        `
      },
      {
        productionChain: 'sausages',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Pig(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sausages(<img src='${icons.sausageIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pig --> Sausages
        `
      },
      {
        productionChain: 'bread',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${icons.flourIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Bread(<img src='${icons.breadIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Grain --> Flour --> Bread
        `
      },
      {
        productionChain: 'soap',
        mermaidDefinition: endent`
        flowchart LR
        Pigs(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Tallow(<img src='${icons.tallowIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Soap(<img src='${icons.soapIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pigs --> Tallow --> Soap
        `
      },
      {
        productionChain: 'beer',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Malthouse(<span class='icon-flex-row'><img src='${icons.malthouseIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Brewery(<img src='${icons.breweryIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        HopFarm(<span class='icon-flex-row'><img src='${icons.hopFarmIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>75%</span><span class='ratio-count'>2</span></span></span>)
        Grain --> Malthouse --> Brewery
        HopFarm --> Brewery
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Artisans',
    productionChains: [
      {
        productionChain: 'cannedFood',
        chainMultiplier: '6',
        mermaidDefinition: endent`
        flowchart LR
        Beef(<span class='icon-flex-row'><img src='${icons.beefIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.66%</span><span class='ratio-count'>2</span></span></span>)
        RedPepper(<span class='icon-flex-row'><img src='${icons.redPeppersIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.66%</span><span class='ratio-count'>2</span></span></span>)
        ArtisnalKitchen(<span class='icon-flex-row'><img src='${icons.artisnalKitchenIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.66%</span><span class='ratio-count'>2</span></span></span>)
        Cannery(<img src='${icons.cannedFoodIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.66%</span><span class='ratio-count'>1</span></span></span>)
        Beef & RedPepper --> ArtisnalKitchen --> Cannery
        Iron --> Cannery
        `
      },
      {
        productionChain: 'sewingMachines',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Charcoal(<img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Steel(<img src='${icons.steelIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SewingMachines(<img src='${icons.sewingMachinesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Charcoal & Iron --> Steel --> SewingMachines
        Wood --> SewingMachines
        `
      },
      {
        productionChain: 'rum',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        SugarCane(<img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<img src='${icons.rumIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane & Wood --> Rum
        `
      },
      {
        productionChain: 'furs',
        mermaidDefinition: endent`
        flowchart LR
        Cotton(<img src='${icons.cottonIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        CottonMill(<img src='${icons.cottonMillIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        FurCoats(<img src='${icons.furCoatsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Furs(<img src='${icons.fursIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Cotton --> CottonMill --> FurCoats
        Furs --> FurCoats
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Engineers',
    productionChains: [
      {
        productionChain: 'highWheeler',
        mermaidDefinition: endent`
        flowchart LR
        Coal(<img src='${icons.coalIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron(<img src='${icons.ironIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Steel(<img src='${icons.steelIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        HighWheeler(<img src='${icons.highWheelerIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Caoutchouc(<img src='${icons.caoutchoucIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        style HighWheeler stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        Coal & Iron --> Steel --> HighWheeler
        Caoutchouc --> HighWheeler
        `
      },
      {
        productionChain: 'glasses',
        chainMultiplier: '3',
        mermaidDefinition: endent`
        flowchart LR
        Sand(<span class='icon-flex-row'><img src='${icons.sandIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Glass(<span class='icon-flex-row'><img src='${icons.glassIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Glasses(<img src='${icons.glassesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Copper(<span class='icon-flex-row'><img src='${icons.copperIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Zinc(<span class='icon-flex-row'><img src='${icons.zincIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Brass(<span class='icon-flex-row'><img src='${icons.brassIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.66%</span><span class='ratio-count'>1</span></span></span>)
        Sand --> Glass --> Glasses
        Copper & Zinc --> Brass --> Glasses
        `
      },
      {
        productionChain: 'pocketWatches',
        chainMultiplier: '3',
        mermaidDefinition: endent`
        flowchart LR
        GoldOre(<span class='icon-flex-row'><img src='${icons.goldOreIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>83.33%</span><span class='ratio-count'>4</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Gold(<span class='icon-flex-row'><img src='${icons.goldIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.66%</span><span class='ratio-count'>2</span></span></span>)
        PocketWatches(<img src='${icons.pocketWatchesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand(<span class='icon-flex-row'><img src='${icons.sandIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.66%</span><span class='ratio-count'>1</span></span></span>)
        Glass(<span class='icon-flex-row'><img src='${icons.glassIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.66%</span><span class='ratio-count'>1</span></span></span>)
        style PocketWatches stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        GoldOre & Coal --> Gold --> PocketWatches
        Sand --> Glass --> PocketWatches
        `
      },
      {
        productionChain: 'lightBulb',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Charcoal(<span class='icon-flex-row'><img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Filament(<img src='${icons.filamentIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        LightBulb(<img src='${icons.lightBulbIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand(<span class='icon-flex-row'><img src='${icons.sandIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glass(<span class='icon-flex-row'><img src='${icons.glassIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Charcoal --> Filament --> LightBulb
        Sand --> Glass --> LightBulb
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Investors',
    productionChains: [
      {
        productionChain: 'champagne',
        mermaidDefinition: endent`
        flowchart LR
        Sand(<img src='${icons.sandIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Glass(<img src='${icons.glassIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Champagne(<img src='${icons.champagneIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Grapes(<img src='${icons.grapesIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        Sand --> Glass --> Champagne
        Grapes --> Champagne
        `
      },
      {
        productionChain: 'jewelry',
        mermaidDefinition: endent`
        flowchart LR
        Charcoal(<img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        GoldOre(<img src='${icons.goldOreIcon}' class='icon-size' /><span class='ratio-count'>5</span>)
        Gold(<img src='${icons.goldIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Jewelry(<img src='${icons.jewelryIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pearls(<img src='${icons.pearlsIcon}' class='icon-size' /><span class='ratio-count'>3</span>)
        Charcoal & GoldOre --> Gold --> Jewelry
        Pearls --> Jewelry
        `
      },
      {
        productionChain: 'gramophone',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Marquetry(<img src='${icons.marquetryIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Gramophone(<img src='${icons.gramophoneIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Copper(<span class='icon-flex-row'><img src='${icons.copperIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Zinc(<span class='icon-flex-row'><img src='${icons.zincIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Brass(<img src='${icons.brassIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Gramophone stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Wood --> Marquetry --> Gramophone
        Copper & Zinc --> Brass --> Gramophone
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Jornaleros | Obreros',
    productionChains: [
      {
        productionChain: 'plantains',
        mermaidDefinition: endent`
        flowchart LR
        PlantainPlantation(<img src='${icons.plantainPlantationIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        FishOil(<img src='${icons.fishOilIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        FriedPlantains(<img src='${icons.friedPlantainsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        PlantainPlantation & FishOil --> FriedPlantains
        `
      },
      {
        productionChain: 'ponchos',
        mermaidDefinition: endent`
        flowchart LR
        AlpacaWool(<img src='${icons.alpacaWoolIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Ponchos(<img src='${icons.ponchosIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        AlpacaWool --> Ponchos
        `
      },
      {
        productionChain: 'tortillas',
        mermaidDefinition: endent`
        flowchart LR
        Beef(<img src='${icons.beefIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Corn(<img src='${icons.cornIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Tortillas(<img src='${icons.tortillasIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Beef & Corn --> Tortillas
        `
      },
      {
        productionChain: 'coffee',
        mermaidDefinition: endent`
        flowchart LR
        CoffeeBeans(<img src='${icons.coffeeBeansIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Coffee(<img src='${icons.coffeeIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        CoffeeBeans --> Coffee
        `
      },
      {
        productionChain: 'bowlerHats',
        mermaidDefinition: endent`
        flowchart LR
        Cotton(<img src='${icons.cottonIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        CottonMill(<img src='${icons.cottonMillIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        BowlerHats(<img src='${icons.bowlerHatsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        AlpacaWool(<img src='${icons.alpacaWoolIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Felt(<img src='${icons.feltIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cotton --> CottonMill --> BowlerHats
        AlpacaWool --> Felt --> BowlerHats
        `
      },
      {
        productionChain: 'cigars',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Marquetry(<img src='${icons.marquetryIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Cigars(<img src='${icons.cigarIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tobacco(<img src='${icons.tobaccoIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        Wood --> Marquetry --> Cigars
        Tobacco --> Cigars
        `
      },
      {
        productionChain: 'chocolate',
        mermaidDefinition: endent`
        flowchart LR
        SugarCane(<img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sugar(<img src='${icons.sugarIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Chocolate(<img src='${icons.chocolateIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cocoa(<img src='${icons.cocoaIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        SugarCane --> Sugar --> Chocolate
        Cocoa --> Chocolate
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Machinery',
    productionChains: [
      {
        productionChain: 'steamMotors',
        mermaidDefinition: endent`
        flowchart LR
        Coal(<img src='${icons.coalIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron(<img src='${icons.ironIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Steel(<img src='${icons.steelIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        SteamMotors(<img src='${icons.steamMotorsIcon}' class='icon-size' /><span class='ratio-count'>3</span>)
        Copper(<img src='${icons.copperIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Zinc(<img src='${icons.zincIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Brass(<img src='${icons.brassIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        style SteamMotors stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Coal & Iron --> Steel --> SteamMotors
        Copper & Zinc --> Brass --> SteamMotors
        `
      },
      {
        productionChain: 'steamCarriages',
        mermaidDefinition: endent`
        flowchart LR
        SteamMotors(<img src='${icons.steamMotorsIcon}' class='icon-size' /><span class='ratio-count'>3</span>)
        SteamCarriages(<img src='${icons.steamCarriagesIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Wood(<img src='${icons.woodIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Caoutchouc(<img src='${icons.caoutchoucIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        Coaches(<img src='${icons.coachMakersIcon}' class='icon-size' /><span class='ratio-count'>8</span>)
        SteamCarriages
        style SteamMotors stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        style SteamCarriages stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        SteamMotors --> SteamCarriages
        Wood & Caoutchouc --> Coaches --> SteamCarriages
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Weapons',
    productionChains: [
      {
        productionChain: 'weapons',
        chainMultiplier: '6',
        mermaidDefinition: endent`
        flowchart LR
        CharcoalKiln(<span class='icon-flex-row'><img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.66%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Weapons(<img src='${icons.weaponsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        CharcoalKiln & Iron --> Steel --> Weapons
        `
      },
      {
        productionChain: 'heavyWeapons',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Saltpeter(<img src='${icons.saltpeterIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Dynamite(<img src='${icons.dynamiteIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        HeavyWeapons(<img src='${icons.heavyWeaponsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pig(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${icons.tallowIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Dynamite
        Charcoal(<span class='icon-flex-row'><img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        style HeavyWeapons stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Saltpeter --> Dynamite --> HeavyWeapons
        Pig --> Tallow --> Dynamite
        Charcoal & Iron --> Steel --> HeavyWeapons
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Sails',
    productionChains: [
      {
        productionChain: 'oldWorldSails',
        mermaidDefinition: endent`
        flowchart LR
        Wool(<img src='${icons.woolIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sailmakers(<img src='${icons.sailmakersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wool --> Sailmakers
        `
      },
      {
        productionChain: 'newWorldSails',
        mermaidDefinition: endent`
        flowchart LR
        Cotton(<img src='${icons.cottonIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        CottonMill(<img src='${icons.cottonMillIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sailmakers(<img src='${icons.sailmakersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cotton --> CottonMill --> Sailmakers
        `
      }
    ]
  }
];
