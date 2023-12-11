import { TieredProductionChain } from './models';
import endent from 'endent';
import * as icons from './icons';

// Production Chains
export const productionChainsMisc: TieredProductionChain[] = [
  {
    colBreak: false,
    tierName: 'Region Ratios',
    productionChains: [
      {
        productionChain: 'coalRatio',
        mermaidDefinition: endent`
        flowchart LR
        Coal(<img src='${icons.coalIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Charcoal(<img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Coal --> Charcoal
        `
      },
      {
        productionChain: 'goldRatio',
        mermaidDefinition: endent`
        flowchart LR
        ArcticGold(<span class='icon-flex-row'><img src='${icons.goldOreIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${icons.arcticIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>)
        NewWorldGold(<span class='icon-flex-row'><img src='${icons.goldOreIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${icons.newWorldIcon}' class='electricity-icon' /></span><span class='ratio-count'>2.5</span></span></span>)
        ArcticGold --> NewWorldGold
        `
      },
      {
        productionChain: 'furRatio',
        mermaidDefinition: endent`
        flowchart LR
        ArcticFur(<span class='icon-flex-row'><img src='${icons.fursIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${icons.arcticIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>)
        OldWorldFur(<span class='icon-flex-row'><img src='${icons.fursIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${icons.oldWorldIcon}' class='electricity-icon' /></span><span class='ratio-count'>4</span></span></span>)
        ArcticFur --> OldWorldFur
        `
      },
      {
        productionChain: 'clayRatio',
        mermaidDefinition: endent`
        flowchart LR
        EnbesaClay(<span class='icon-flex-row'><img src='${icons.clayIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${icons.enbesaIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>)
        OldWorldClay(<span class='icon-flex-row'><img src='${icons.clayIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${icons.oldWorldIcon}' class='electricity-icon' /></span><span class='ratio-count'>2</span></span></span>)
        EnbesaClay --> OldWorldClay
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Electricity',
    productionChains: [
      {
        productionChain: 'oilPowerPlant',
        mermaidDefinition: endent`
        flowchart LR
        OilWell(<img src='${icons.oilWellIcon}' class='icon-size' /><span class='ratio-count'>3</span>)
        OilPowerPlant(<img src='${icons.oilPowerPlantIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        OilWell --> OilPowerPlant
        `
      },
      {
        productionChain: 'oilTanker',
        mermaidDefinition: endent`
        flowchart LR
        OilTanker(<img src='${icons.oilTankerIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        OilPowerPlant(<img src='${icons.oilPowerPlantIcon}' class='icon-size' /><span class='ratio-count'>2-3</span>)
        OilTanker --> OilPowerPlant
        `
      },
      {
        productionChain: 'gasPowerPlant',
        mermaidDefinition: endent`
        flowchart LR
        Gas(<img src='${icons.gasIcon}' class='icon-size' /><span class='ratio-count'>6</span>)
        GasPlant(<img src='${icons.gasPowerPlantIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Gas --> GasPlant
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Building Materials | Construction',
    productionChains: [
      {
        productionChain: 'timber',
        mermaidDefinition: endent`
        flowchart LR
        Wood(<img src='${icons.woodIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Timber(<img src='${icons.timberIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood --> Timber
        `
      },
      {
        productionChain: 'bricks',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Clay(<span class='icon-flex-row'><img src='${icons.clayIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Bricks(<img src='${icons.bricksIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Clay --> Bricks
        `
      },
      {
        productionChain: 'steelBeams',
        chainMultiplier: '3',
        mermaidDefinition: endent`
        flowchart LR
        CharcoalKiln(<span class='icon-flex-row'><img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.67%</span><span class='ratio-count'>1</span></span></span>)
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66.67%</span><span class='ratio-count'>1</span></span></span>)
        SteelBeams(<img src='${icons.steelBeamsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        CharcoalKiln & Iron --> Steel --> SteelBeams
        `
      },
      {
        productionChain: 'windows',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Sand(<span class='icon-flex-row'><img src='${icons.sandIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        GlassMakers(<span class='icon-flex-row'><img src='${icons.glassIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        WindowMakers(<img src='${icons.windowMakersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Sand --> GlassMakers --> WindowMakers
        Wood --> WindowMakers
        `
      },
      {
        productionChain: 'concrete',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Concrete(<img src='${icons.concreteFactory}' class='icon-size' /><span class='ratio-count'>1</span>)
        Limestone(<span class='icon-flex-row'><img src='${icons.limestoneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Iron & Coal --> Steel  --> Concrete
        Limestone --> Concrete
        `
      },
      {
        productionChain: 'mudBricks',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR; Clay(<span class='icon-flex-row icon-regional-container'><img src='${icons.enbesaIcon}' class='icon-regional' /><img src='${icons.clayIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Teff(<img src='${icons.teffIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        MudBricks(<img src='${icons.mudBricksIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Clay & Teff --> MudBricks
        `
      },
      {
        productionChain: 'elevators',
        mermaidDefinition: endent`
        flowchart LR
        Iron(<img src='${icons.ironIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Coal(<img src='${icons.coalIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Steel(<img src='${icons.steelIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Wood(<img src='${icons.woodIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Marquetry(<img src='${icons.marquetryIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        SteamMotor(<img src='${icons.steamMotorsIcon}' class='icon-size' /><span class='ratio-count'>3</span>)
        Elevator(<img src='${icons.elevatorIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style SteamMotor stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        style Elevator stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Iron & Coal --> Steel --> Elevator
        Wood --> Marquetry --> Elevator
        SteamMotor --> Elevator
        `
      },
      {
        productionChain: 'aluminium',
        chainMultiplier: '9',
        mermaidDefinition: endent`
        flowchart LR
        Bauxite(<span class='icon-flex-row'><img src='${icons.bauxiteIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>11.11%</span><span class='ratio-count'>1</span></span></span>)
        Charcoal(<span class='icon-flex-row'><img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Aluminium(<img src='${icons.aluminiumIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Bauxite & Charcoal --> Aluminium
      `
      },
      {
        productionChain: 'helium',
        mermaidDefinition: endent`
        flowchart LR
        Clay(<img src='${icons.clayIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        FishOil(<img src='${icons.fishOilIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        IndustrialLubricant(<img src='${icons.industrialLubricant}' class='icon-size' /><span class='ratio-count'>2</span>)
        Saltpeter(<img src='${icons.saltpeterIcon}' class='icon-size' /><span class='ratio-count'>8</span>)
        Helium(<img src='${icons.heliumIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Clay --> Helium
        FishOil & Saltpeter --> IndustrialLubricant --> Helium
      `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Fuel | Silo',
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
      },
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
      },
      {
        productionChain: 'siloAlpaca',
        mermaidDefinition: endent`
        flowchart LR
        SiloPig(<span class='icon-flex-row'><img src='${icons.grainIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${icons.siloIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>)
        Pig(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>2.66</span>)
        SiloPig --> Pig
        `
      },
      {
        productionChain: 'siloss3',
        mermaidDefinition: endent`
        flowchart LR
        Dung(<img src='${icons.dungIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Fertiliser(<img src='${icons.fertiliserIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Silo(<img src='${icons.siloIcon}' class='icon-size' /><span class='ratio-count'>5</span>)
        Dung --> Fertiliser --> Silo
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
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.67%</span><span class='ratio-count'>1</span></span></span>)
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
  { colBreak: true, tierName: 'skip' },
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
  },
  { colBreak: true, tierName: 'skip' },
  { colBreak: true, tierName: 'skip' },
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
      }
    ]
  },
  { colBreak: true, tierName: 'skip' },
  { colBreak: true, tierName: 'skip' },
  { colBreak: true, tierName: 'skip' },
  {
    colBreak: false,
    tierName: 'Chemical Plant',
    productionChains: [
      {
        productionChain: 'ethanol',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart TB
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Corn(<img src='${icons.cornIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Ethanol(<img src='${icons.ethanolIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood & Corn --> Ethanol
        `
      },
      {
        productionChain: 'lacquer',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart TB
        Ethanol(<img src='${icons.ethanolIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand(<img src='${icons.sandIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Resin(<img src='${icons.resinIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Lacquer(<img src='${icons.lacquerIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand & Resin & Ethanol --> Lacquer
        `
      },
      {
        productionChain: 'celluloid',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart TB
        Cotton(<img src='${icons.cottonIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        CamphorWax(<img src='${icons.camphorWaxIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Ethanol(<img src='${icons.ethanolIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Celluloid(<img src='${icons.celluloidIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cotton & CamphorWax & Ethanol --> Celluloid
        `
      }
    ]
  }
];
