import endent from 'endent';
import { TieredProductionChain } from './models';
import * as icons from './icons';

export const productionChainsExpansions: TieredProductionChain[] = [
  {
    colBreak: false,
    tierName: 'Building Materials',
    productionChains: [
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
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Silo',
    productionChains: [
      {
        productionChain: 'siloAlpaca',
        mermaidDefinition: endent`
        flowchart LR
        SiloPig(<span class='icon-flex-row'><img src='${icons.alpacaWoolIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${icons.siloIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>)
        Pig(<img src='${icons.alpacaWoolIcon}' class='icon-size' /><span class='ratio-count'>2.66</span>)
        SiloPig --> Pig
        `
      },
      {
        productionChain: 'silos',
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
  },
  {
    colBreak: false,
    tierName: 'Skyscrapers',
    productionChains: [
      {
        productionChain: 'chewingGum',
        mermaidDefinition: endent`
        flowchart LR
        Caoutchouc(<img src='${icons.caoutchoucIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        SugarCane(<img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sugar(<img src='${icons.sugarIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cinnamon(<img src='${icons.cinnamonIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        ChewingGum(<img src='${icons.chewingGumIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane --> Sugar
        Caoutchouc & Sugar & Cinnamon --> ChewingGum
        `
      },
      {
        productionChain: 'typewriters',
        mermaidDefinition: endent`
        flowchart LR
        Iron(<img src='${icons.ironIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Coal(<img src='${icons.coalIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Steel(<img src='${icons.steelIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Copper(<img src='${icons.copperIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Zinc(<img src='${icons.zincIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Brass(<img src='${icons.brassIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        Lacquer(<img src='${icons.lacquerIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Typewriters(<img src='${icons.typewritersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Typewriters stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Iron & Coal --> Steel --> Typewriters
        Copper & Zinc --> Brass --> Typewriters
        Lacquer --> Typewriters
        `
      },
      {
        productionChain: 'violins',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CherryWood(<span class='icon-flex-row'><img src='${icons.cherryWoodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lacquer(<span class='icon-flex-row'><img src='${icons.lacquerIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Violins(<img src='${icons.violinsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron & Coal --> Steel --> Violins
        CherryWood --> Violins
        Lacquer --> Violins
        `
      },
      {
        productionChain: 'biscuits',
        mermaidDefinition: endent`
        flowchart LR
        Pigs(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        Tallow(<img src='${icons.tallowIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>4</span>)
        Flour(<img src='${icons.flourIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Citrus(<img src='${icons.citrusIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Biscuits(<img src='${icons.biscuitsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Biscuits stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Pigs --> Tallow --> Biscuits
        Grain --> Flour --> Biscuits
        Citrus --> Biscuits
        `
      },
      {
        productionChain: 'cognac',
        mermaidDefinition: endent`
        flowchart LR
        Vineyard(<img src='${icons.grapesIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        CherryWood(<span class='icon-flex-row'><img src='${icons.cherryWoodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        SugarCane(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar(<span class='icon-flex-row'><img src='${icons.sugarIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cognac(<img src='${icons.cognacIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane --> Sugar
        Vineyard & CherryWood & Sugar --> Cognac
        `
      },
      {
        productionChain: 'billiardsTable',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Alpaca(<span class='icon-flex-row'><img src='${icons.alpacaWoolIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Felt(<span class='icon-flex-row'><img src='${icons.feltIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CherryWood(<span class='icon-flex-row'><img src='${icons.cherryWoodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Celluloid(<span class='icon-flex-row'><img src='${icons.celluloidIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Billiards(<img src='${icons.billiardsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        CherryWood --> Billiards
        Alpaca --> Felt --> Billiards
        Celluloid --> Billiards
        `
      },
      {
        productionChain: 'toys',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Alpaca(<span class='icon-flex-row'><img src='${icons.alpacaWoolIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Felt(<span class='icon-flex-row'><img src='${icons.feltIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Celluloid(<span class='icon-flex-row'><img src='${icons.celluloidIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lacquer(<span class='icon-flex-row'><img src='${icons.lacquerIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Toys(<img src='${icons.toysIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Alpaca --> Felt --> Toys
        Celluloid & Lacquer --> Toys
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
        chainMultiplier: '2',
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
        chainMultiplier: '2',
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
        chainMultiplier: '2',
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
        chainMultiplier: '2',
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
  },
  {
    colBreak: false,
    tierName: 'Café',
    productionChains: [
      {
        productionChain: 'donut',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${icons.flourIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Donut(<img src='${icons.donutFourrerIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pig(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${icons.tallowIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Jam(<span class='icon-flex-row'><img src='${icons.jamIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Grain --> Flour --> Donut
        Pig --> Tallow --> Donut
        Jam --> Donut
        `
      },
      {
        productionChain: 'eclair',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${icons.flourIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Eclair(<img src='${icons.eclairIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane0(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar0(<span class='icon-flex-row'><img src='${icons.sugarIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        SugarCane1(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar1(<span class='icon-flex-row'><img src='${icons.sugarIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cocoa(<img src='${icons.cocoaIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Chocolate(<span class='icon-flex-row'><img src='${icons.chocolateIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Grain --> Flour --> Eclair
        SugarCane0 --> Sugar0 --> Eclair
        SugarCane1 --> Sugar1 --> Chocolate
        Cocoa --> Chocolate
        Chocolate --> Eclair
        `
      },
      {
        productionChain: 'palmierBiscuit',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${icons.flourIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        PalmierBiscuit(<img src='${icons.palmierBiscuitIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pig(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${icons.tallowIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cinnamon(<span class='icon-flex-row'><img src='${icons.cinnamonIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Grain --> Flour --> PalmierBiscuit
        Pig --> Tallow --> PalmierBiscuit
        Cinnamon --> PalmierBiscuit
        `
      },
      {
        productionChain: 'venisonTartare',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Grapes(<img src='${icons.grapesIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        VenisonTartare(<img src='${icons.venisonTartareIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Caribou(<img src='${icons.caribouIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Citrus(<span class='icon-flex-row'><img src='${icons.citrusIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Grapes & Caribou & Citrus --> VenisonTartare
        `
      },
      {
        productionChain: 'bananaSurprise',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Goat(<img src='${icons.goatMilkIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Plantains(<span class='icon-flex-row'><img src='${icons.plantainPlantationIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cinnamon(<span class='icon-flex-row'><img src='${icons.cinnamonIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        BananaSurprise(<img src='${icons.bananaSurpriseIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Goat & Plantains & Cinnamon --> BananaSurprise
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Bar',
    productionChains: [
      {
        productionChain: 'daiquiriTropic',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        SugarCane0(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        SugarCane1(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<span class='icon-flex-row'><img src='${icons.rumIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Plantain(<span class='icon-flex-row'><img src='${icons.plantainPlantationIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        DaiquiriTropic(<img src='${icons.daiquiriIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane0 --> DaiquiriTropic
        SugarCane1 & Wood --> Rum --> DaiquiriTropic
        Plantain --> DaiquiriTropic
        `
      },
      {
        productionChain: 'blackMuscovy',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        CoffeeBeans(<img src='${icons.coffeeBeansIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Coffee(<span class='icon-flex-row'><img src='${icons.coffeeIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        BlackMuscovy(<img src='${icons.blackMuscovyIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<span class='icon-flex-row'><img src='${icons.rumIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Potato(<span class='icon-flex-row'><img src='${icons.potatoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Schnapps(<span class='icon-flex-row'><img src='${icons.schnappsIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CoffeeBeans --> Coffee --> BlackMuscovy
        SugarCane & Wood --> Rum --> BlackMuscovy
        Potato --> Schnapps --> BlackMuscovy
        `
      },
      {
        productionChain: 'montmatre',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        SugarCane(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar(<span class='icon-flex-row'><img src='${icons.sugarIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sand(<span class='icon-flex-row'><img src='${icons.sandIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glass(<span class='icon-flex-row'><img src='${icons.glassIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Vineyard(<img src='${icons.grapesIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Champagne(<span class='icon-flex-row'><img src='${icons.champagneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Citrus(<span class='icon-flex-row'><img src='${icons.citrusIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Montmatre(<img src='${icons.montmatreIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane --> Sugar --> Montmatre
        Sand --> Glass --> Champagne --> Montmatre
        Vineyard --> Champagne
        Citrus --> Montmatre
        `
      },
      {
        productionChain: 'glegg',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Whales(<img src='${icons.whalingIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Vineyard(<img src='${icons.grapesIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Cinnamon(<span class='icon-flex-row'><img src='${icons.cinnamonIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glogg(<img src='${icons.gloggIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Whales & Vineyard & Cinnamon --> Glogg
        `
      },
      {
        productionChain: 'enbesaSunrise',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Hibiscus(<img src='${icons.hibiscusFarmIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<span class='icon-flex-row'><img src='${icons.rumIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Spices(<img src='${icons.spicesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        EnbesaSunrise(<img src='${icons.enbesaSunriseIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Hibiscus --> EnbesaSunrise
        SugarCane & Wood --> Rum --> EnbesaSunrise
        Spices --> EnbesaSunrise
        `
      }
    ]
  },
  { colBreak: true, tierName: 'skip' },
  {
    colBreak: false,
    tierName: 'Iron Tower',
    productionChains: [
      {
        productionChain: 'briocheRoyale',
        mermaidDefinition: endent`
        flowchart LR
        Pig(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sausages(<img src='${icons.sausageIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${icons.flourIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Bakery(<img src='${icons.breadIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Beef(<img src='${icons.beefIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        GoldOre(<span class='icon-flex-row'><img src='${icons.goldOreIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>125%</span><span class='ratio-count'>2</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Gold(<img src='${icons.goldIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        BriocheRoyale(<img src='${icons.briocheRoyaleIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pig --> Sausages --> BriocheRoyale
        Grain --> Flour --> Bakery --> BriocheRoyale
        Beef --> BriocheRoyale
        GoldOre & Coal --> Gold --> BriocheRoyale
        `
      },
      {
        productionChain: 'trifleTower',
        mermaidDefinition: endent`
        flowchart LR
        SugarCane(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<span class='icon-flex-row'><img src='${icons.rumIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Grain(<img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Flour(<span class='icon-flex-row'><img src='${icons.flourIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Bread(<img src='${icons.breadIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Vineyard(<img src='${icons.grapesIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        SugarCane1(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar(<span class='icon-flex-row'><img src='${icons.sugarIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Trifle(<img src='${icons.trifleTowerIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane & Wood --> Rum --> Trifle
        Grain --> Flour --> Bread --> Trifle
        Vineyard --> Trifle
        SugarCane1 --> Sugar --> Trifle
        `
      },
      {
        productionChain: 'ladyMarmelade',
        mermaidDefinition: endent`
        flowchart LR
        SugarCane(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Rum(<span class='icon-flex-row'><img src='${icons.rumIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sand(<span class='icon-flex-row'><img src='${icons.sandIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glass(<span class='icon-flex-row'><img src='${icons.glassIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Vineyard(<img src='${icons.grapesIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Champagne(<span class='icon-flex-row'><img src='${icons.champagneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Citrus(<span class='icon-flex-row'><img src='${icons.citrusIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Jam(<span class='icon-flex-row'><img src='${icons.jamIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        LadyMarmelade(<img src='${icons.ladyMarmeladeIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane & Wood --> Rum --> LadyMarmelade
        Sand --> Glass --> Champagne --> LadyMarmelade
        Vineyard --> Champagne
        Citrus & Jam --> LadyMarmelade
        `
      },
      {
        productionChain: 'ageOfExploration',
        mermaidDefinition: endent`
        flowchart TB
        Gas(<span class='icon-flex-row'><img src='${icons.gasIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>450%</span><span class='ratio-count'>1</span></span></span>)
        Potato(<span class='icon-flex-row'><img src='${icons.potatoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        RedPepper(<img src='${icons.redPeppersIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Beef(<img src='${icons.beefIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        AgeOfExploration(<img src='${icons.ageOfExplorationIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Gas & Potato & RedPepper & Beef --> AgeOfExploration
        `
      },
      {
        productionChain: 'homardLitTerroir',
        mermaidDefinition: endent`
        flowchart TB
        Lobster(<img src='${icons.lobstersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sanga(<img src='${icons.sangaIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Potato(<span class='icon-flex-row'><img src='${icons.potatoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Spices(<img src='${icons.spicesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        HomardLitTerroir(<img src='${icons.homardLitTerroirIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Lobster & Sanga & Potato & Spices --> HomardLitTerroir
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Department Store',
    productionChains: [
      {
        productionChain: 'toasters',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Zinc(<span class='icon-flex-row'><img src='${icons.zincIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Coal0(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Filament(<img src='${icons.filamentIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Toasters(<img src='${icons.toastersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Toasters stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Iron & Coal --> Steel --> Toasters
        Zinc --> Toasters
        Coal0 --> Filament --> Toasters
        `
      },
      {
        productionChain: 'vaccumCleaners',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Sheep(<span class='icon-flex-row'><img src='${icons.woolIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Celluloid(<span class='icon-flex-row'><img src='${icons.celluloidIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        VaccumCleaners(<img src='${icons.vaccumCleanersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style VaccumCleaners stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Celluloid --> VaccumCleaners
        Iron & Coal --> Steel --> VaccumCleaners
        Sheep --> VaccumCleaners
        `
      },
      {
        productionChain: 'crockery',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Clay(<span class='icon-flex-row'><img src='${icons.clayIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sand0(<span class='icon-flex-row'><img src='${icons.sandIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lacquer(<span class='icon-flex-row'><img src='${icons.lacquerIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Crockery(<img src='${icons.crockeryIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Crockery stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Clay --> Crockery
        Lacquer --> Crockery
        Sand0 --> Crockery
        `
      },
      {
        productionChain: 'refrigerators',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Caoutchouc(<img src='${icons.caoutchoucIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Gas(<span class='icon-flex-row'><img src='${icons.gasIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>450%</span><span class='ratio-count'>1</span></span></span>)
        Refrigerators(<img src='${icons.refrigeratorsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Refrigerators stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Iron & Coal --> Steel --> Refrigerators
        Gas & Caoutchouc --> Refrigerators
        `
      },
      {
        productionChain: 'briefcases',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Copper(<span class='icon-flex-row'><img src='${icons.copperIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Zinc(<span class='icon-flex-row'><img src='${icons.zincIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Brass(<img src='${icons.brassIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Briefcases(<img src='${icons.briefcasesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sanga(<img src='${icons.sangaIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Celluloid(<span class='icon-flex-row'><img src='${icons.celluloidIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        style Briefcases stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Copper & Zinc --> Brass --> Briefcases
        Celluloid --> Briefcases
        Sanga --> Briefcases
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Furniture Store',
    productionChains: [
      {
        productionChain: 'bankersLamps',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Copper(<span class='icon-flex-row'><img src='${icons.copperIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Zinc(<span class='icon-flex-row'><img src='${icons.zincIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Brass(<img src='${icons.brassIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand(<span class='icon-flex-row'><img src='${icons.sandIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glass(<span class='icon-flex-row'><img src='${icons.glassIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Filament(<img src='${icons.filamentIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sand0(<span class='icon-flex-row'><img src='${icons.sandIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Glass0(<span class='icon-flex-row'><img src='${icons.glassIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        LightBulb(<img src='${icons.lightBulbIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        BankerLamp(<img src='${icons.bankersLampsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style BankerLamp stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Copper & Zinc --> Brass --> BankerLamp
        Sand --> Glass --> BankerLamp
        Coal --> Filament --> LightBulb
        Sand0 --> Glass0 --> LightBulb
        LightBulb --> BankerLamp
      `
      },
      {
        productionChain: 'vanityScreens',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Cotton(<img src='${icons.cottonIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        CottonMill(<span class='icon-flex-row'><img src='${icons.cottonMillIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CherryWood(<span class='icon-flex-row'><img src='${icons.cherryWoodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lacquer(<span class='icon-flex-row'><img src='${icons.lacquerIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CottonMill(<span class='icon-flex-row'><img src='${icons.cottonMillIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        VanityScreens(<img src='${icons.vanityScreensIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style VanityScreens stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Cotton --> CottonMill
        CottonMill & CherryWood & Lacquer --> VanityScreens
      `
      },
      {
        productionChain: 'writingDesks',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Copper(<span class='icon-flex-row'><img src='${icons.copperIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Zinc(<span class='icon-flex-row'><img src='${icons.zincIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Brass(<img src='${icons.brassIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Marquetry(<img src='${icons.marquetryIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Lacquer(<span class='icon-flex-row'><img src='${icons.lacquerIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        WritingDesks(<img src='${icons.writingDesksIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style WritingDesks stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Copper & Zinc --> Brass
        Wood --> Marquetry
        Brass & Marquetry & Lacquer --> WritingDesks
      `
      },
      {
        productionChain: 'fourPosterBeds',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart TB
        BearHunting(<span class='icon-flex-row'><img src='${icons.bearIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>75%</span><span class='ratio-count'>2</span></span></span>)
        Goose(<img src='${icons.gooseIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        CherryWood(<span class='icon-flex-row'><img src='${icons.cherryWoodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        FourPosterBeds(<img src='${icons.fourPosterBedsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style FourPosterBeds stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        BearHunting & Goose & CherryWood --> FourPosterBeds
        `
      },
      {
        productionChain: 'loungeSeating',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart TB
        Sheep(<span class='icon-flex-row'><img src='${icons.woolIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sanga(<img src='${icons.sangaIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        WansaWood(<span class='icon-flex-row'><img src='${icons.wansaWood}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        LoungeSeating(<img src='${icons.loungeSeatingIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style LoungeSeating stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Sheep & Sanga & WansaWood --> LoungeSeating
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Drug Store',
    productionChains: [
      {
        productionChain: 'toothpaste',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        SugarCane(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar(<span class='icon-flex-row'><img src='${icons.sugarIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Pig(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${icons.tallowIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Soap(<span class='icon-flex-row'><img src='${icons.soapIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Toothpaste(<img src='${icons.toothpasteIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Toothpaste stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        SugarCane --> Sugar --> Toothpaste
        Coal --> Toothpaste
        Pig --> Tallow --> Soap --> Toothpaste
        `
      },
      {
        productionChain: 'detergent',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart TB
        Ethanol(<span class='icon-flex-row'><img src='${icons.ethanolIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Citrus(<span class='icon-flex-row'><img src='${icons.citrusIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Saltpeter(<img src='${icons.saltpeterIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Detergent(<img src='${icons.detergentIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Detergent stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        Ethanol & Citrus & Saltpeter --> Detergent
        `
      },
      {
        productionChain: 'lipstick',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart TB
        FishOil(<span class='icon-flex-row'><img src='${icons.fishOilIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CoconutOil(<span class='icon-flex-row'><img src='${icons.coconutOilIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lacquer(<span class='icon-flex-row'><img src='${icons.lacquerIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Lipstick(<img src='${icons.lipstickIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style Lipstick stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        FishOil & CoconutOil & Lacquer --> Lipstick
        `
      },
      {
        productionChain: 'faceCream',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart TB
        CoconutOil(<span class='icon-flex-row'><img src='${icons.coconutOilIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Citrus(<span class='icon-flex-row'><img src='${icons.citrusIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Whaling(<img src='${icons.whalingIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        FaceCream(<img src='${icons.faceCreamIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        style FaceCream stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7
        CoconutOil & Citrus & Whaling --> FaceCream
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Hacienda',
    productionChains: [
      {
        productionChain: 'hotSauce',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Spices(<span class='icon-flex-row icon-regional-container'><img src='${icons.newWorldIcon}' class='icon-regional' /><img src='${icons.spicesIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        HotSauce(<img src='${icons.hotSauceIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Spices --> HotSauce
        `
      },
      {
        productionChain: 'atole',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Corn(<img src='${icons.cornIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Atole(<img src='${icons.atoleIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Corn & SugarCane --> Atole
        `
      },
      {
        productionChain: 'haciendaRum',
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
        productionChain: 'haciendaSchnapps',
        chainMultiplier: '2',
        mermaidDefinition: endent`
        flowchart LR
        Potato(<span class='icon-flex-row icon-regional-container'><img src='${icons.newWorldIcon}' class='icon-regional' /><img src='${icons.potatoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Schnapps(<span class='icon-regional-container'><img src='${icons.newWorldIcon}' class='icon-regional' /><img src='${icons.schnappsIcon}' class='icon-size' /><span class='ratio-count'>1</span></span>)
        Potato --> Schnapps
        `
      },
      {
        productionChain: 'haciendaBeer',
        mermaidDefinition: endent`
        flowchart LR
        Grain(<span class='icon-regional-container'><img src='${icons.newWorldIcon}' class='icon-regional' /><img src='${icons.grainIcon}' class='icon-size' /><span class='ratio-count'>1</span></span>)
        Corn(<img src='${icons.cornIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Beer(<span class='icon-regional-container'><img src='${icons.newWorldIcon}' class='icon-regional' /><img src='${icons.breweryIcon}' class='icon-size' /><span class='ratio-count'>1</span></span>)
        Grain & Corn --> Beer
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Supply Factories | Airships',
    productionChains: [
      {
        productionChain: 'bombs',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Saltpeter(<img src='${icons.saltpeterIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Pig(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Saltpeter0(<img src='${icons.saltpeterIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Dynamite(<img src='${icons.dynamiteIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${icons.tallowIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Bomb(<img src='${icons.bombsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Saltpeter --> Bomb
        Pig --> Tallow --> Dynamite --> Bomb
        Saltpeter0 --> Dynamite
        Iron & Coal --> Steel --> Dynamite
        `
      },
      {
        productionChain: 'seaMines',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Copper(<span class='icon-flex-row'><img src='${icons.copperIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Pig(<img src='${icons.pigsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Tallow(<img src='${icons.tallowIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Saltpeter(<img src='${icons.saltpeterIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Dynamite(<img src='${icons.dynamiteIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SeaMine(<img src='${icons.seaMinesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Coal(<span class='icon-flex-row'><img src='${icons.coalIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Copper --> SeaMine
        Pig --> Tallow --> Dynamite --> SeaMine
        Saltpeter --> Dynamite
        Iron & Coal --> Steel --> SeaMine
        `
      },
      {
        productionChain: 'pamphlets',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Cotton(<img src='${icons.cottonIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Pamphlets(<img src='${icons.pamphletsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood & Cotton --> Pamphlets
        `
      },
      {
        productionChain: 'carePackage',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR
        Cattle(<img src='${icons.beefIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        RedPeppers(<img src='${icons.redPeppersIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        ArtisnalKitchen(<img src='${icons.artisnalKitchenIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Cannery(<span class='icon-flex-row'><img src='${icons.cannedFoodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>75%</span><span class='ratio-count'>2</span></span></span>)
        Iron(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        CarePackage(<img src='${icons.carePackagesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar(<span class='icon-flex-row'><img src='${icons.sugarIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Chocolate(<span class='icon-flex-row'><img src='${icons.chocolateIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cocoa(<img src='${icons.cocoaIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cattle(<img src='${icons.beefIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Potato(<span class='icon-flex-row'><img src='${icons.potatoIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Schnapps(<span class='icon-flex-row'><img src='${icons.schnappsIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cattle & RedPeppers --> ArtisnalKitchen --> Cannery --> CarePackage
        Iron --> Cannery
        SugarCane --> Sugar --> Chocolate --> CarePackage
        Cocoa --> Chocolate
        Potato --> Schnapps --> CarePackage
        `
      }
    ]
  }
];
