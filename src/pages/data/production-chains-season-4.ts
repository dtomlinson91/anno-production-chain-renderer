import endent from 'endent';
import { TieredProductionChain } from './models';
import * as icons from './icons';

export const productionChainsSeason4: TieredProductionChain[] = [
  {
    colBreak: false,
    tierName: 'Artistas',
    productionChains: [
      {
        productionChain: 'sewingmachinesnw',
        chainMultiplier: '6',
        mermaidDefinition: endent`
        flowchart LR;
        Bauxite(<span class='icon-flex-row'><img src='${icons.bauxiteIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Charcoal(<img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Aluminium(<img src='${icons.aluminiumIcon}' class='icon-size' /><span class='ratio-count'>3</span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        SewingMachines(<img src='${icons.sewingMachinesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Bauxite & Charcoal --> Aluminium
        Wood & Aluminium --> SewingMachines
        `
      },
      {
        productionChain: 'soccerballs',
        mermaidDefinition: endent`
        flowchart LR;
        Nandu(<img src='${icons.nanduIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Caoutchouc(<img src='${icons.caoutchoucIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        SoccerBalls(<img src='${icons.soccerBallsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Nandu & Caoutchouc --> SoccerBalls
        `
      },
      {
        productionChain: 'mezcal',
        mermaidDefinition: endent`
        flowchart LR;
        SugarCane(<img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Citrus(<img src='${icons.citrusIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Sugar(<img src='${icons.sugarIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Herb(<img src='${icons.herbIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Mezcal(<img src='${icons.mezcalIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        SugarCane --> Sugar
        Citrus & Sugar & Herb --> Mezcal
        `
      },
      {
        productionChain: 'jalea',
        mermaidDefinition: endent`
        flowchart TB;
        Calamari(<img src='${icons.calamariIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Herb(<img src='${icons.herbIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Corn(<img src='${icons.cornIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Jalea(<img src='${icons.jaleaIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Calamari & Herb & Corn --> Jalea
        `
      },
      {
        productionChain: 'icecream',
        chainMultiplier: '6',
        mermaidDefinition: endent`
        flowchart LR;
        SugarCane(<span class='icon-flex-row'><img src='${icons.sugarCaneIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Sugar(<span class='icon-flex-row'><img src='${icons.sugarIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Chocolate(<span class='icon-flex-row'><img src='${icons.chocolateIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Citrus(<span class='icon-flex-row'><img src='${icons.citrusIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Cocoa(<img src='${icons.cocoaIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        IceCream(<img src='${icons.iceCreamIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Milk(<span class='icon-flex-row'><img src='${icons.milkIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.67%</span><span class='ratio-count'>1</span></span></span>); style Milk stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        SugarCane --> Sugar --> Chocolate
        Cocoa --> Chocolate
        Milk & Chocolate & Citrus --> IceCream
        `
      },
      {
        productionChain: 'firestation',
        chainMultiplier: '24',
        mermaidDefinition: endent`
        flowchart TB;
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>4.17%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>8.33%</span><span class='ratio-count'>1</span></span></span>)
        Charcoal(<span class='icon-flex-row'><img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>8.33%</span><span class='ratio-count'>1</span></span></span>)
        Caoutchouc(<span class='icon-flex-row'><img src='${icons.caoutchoucIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.67%</span><span class='ratio-count'>1</span></span></span>)
        FireExtinguisher(<span class='icon-flex-row'><img src='${icons.fireExtinguisher}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>12.5%</span><span class='ratio-count'>1</span></span></span>)
        FireDepartment(<img src='${icons.fireDepartment}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron & Charcoal --> Steel
        Steel & Caoutchouc --> FireExtinguisher --> FireDepartment
        `
      },
      {
        productionChain: 'perfume',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR;
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Orchid(<span class='icon-flex-row'><img src='${icons.orchidIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Ethanol(<span class='icon-flex-row'><img src='${icons.ethanolIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CoconutOil(<span class='icon-flex-row'><img src='${icons.coconutOilIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Corn(<img src='${icons.cornIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Perfume(<img src='${icons.perfumeIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Ethanol & Orchid & CoconutOil --> Perfume
        Wood & Corn --> Ethanol
        `
      },
      {
        productionChain: 'samba',
        chainMultiplier: '8',
        mermaidDefinition: endent`
        flowchart LR;
        Cotton(<span class='icon-flex-row'><img src='${icons.cottonIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CottonMill(<span class='icon-flex-row'><img src='${icons.cottonMillIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Minerals(<span class='icon-flex-row'><img src='${icons.mineralIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>12.5%</span><span class='ratio-count'>1</span></span></span>)
        Pigments(<span class='icon-flex-row'><img src='${icons.pigmentIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>37.5%</span><span class='ratio-count'>1</span></span></span>)
        Costumes(<span class='icon-flex-row'><img src='${icons.costumeIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Saltpeter(<span class='icon-flex-row'><img src='${icons.saltpeterIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>); style Saltpeter stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        NanduFeathers(<span class='icon-flex-row'><img src='${icons.nanduFeathersIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>); style NanduFeathers stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        Samba(<img src='${icons.sambaIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cotton --> CottonMill
        Saltpeter & Minerals --> Pigments
        CottonMill & Pigments & NanduFeathers --> Costumes
        Costumes --> Samba
        `
      },
      {
        productionChain: 'police',
        chainMultiplier: '24',
        mermaidDefinition: endent`
        flowchart LR;
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>4.17%</span><span class='ratio-count'>1</span></span></span>)
        Charcoal(<span class='icon-flex-row'><img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>8.33%</span><span class='ratio-count'>1</span></span></span>)
        Cotton(<span class='icon-flex-row'><img src='${icons.cottonIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.67%</span><span class='ratio-count'>1</span></span></span>)
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>4.17%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>8.33%</span><span class='ratio-count'>1</span></span></span>)
        CottonMill(<span class='icon-flex-row'><img src='${icons.cottonMillIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>8.33%</span><span class='ratio-count'>1</span></span></span>)
        PoliceEquipment(<span class='icon-flex-row'><img src='${icons.policeEquipementIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.67%</span><span class='ratio-count'>1</span></span></span>)
        PoliceHeadquarters(<img src='${icons.policeHeadquartersIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Iron & Charcoal --> Steel
        Cotton --> CottonMill
        Wood & Steel & CottonMill --> PoliceEquipment
        PoliceEquipment --> PoliceHeadquarters
        `
      }
    ]
  },
  {
    colBreak: false,
    tierName: 'Artistas',
    productionChains: [
      {
        productionChain: 'fan',
        chainMultiplier: '6',
        mermaidDefinition: endent`
        flowchart LR;
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Bauxite(<span class='icon-flex-row'><img src='${icons.bauxiteIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Corn(<img src='${icons.cornIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Copper(<img src='${icons.copperIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Caoutchouc(<img src='${icons.caoutchoucIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Cotton(<img src='${icons.cottonIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        CamphorWax(<img src='${icons.camphorWaxIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Ethanol(<img src='${icons.ethanolIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Charcoal0(<img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Charcoal1(<img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cables(<img src='${icons.electricCablesIcon}' class='icon-size' /><span class='ratio-count'>2</span>)
        Celluloid(<img src='${icons.celluloidIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Steel(<img src='${icons.steelIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Aluminium(<img src='${icons.aluminiumIcon}' class='icon-size' /><span class='ratio-count'>3</span>)
        Motors(<img src='${icons.motorIcon}' class='icon-size' /><span class='ratio-count'>1</span>); style Motors stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        Fans(<img src='${icons.fansIcon}' class='icon-size' /><span class='ratio-count'>1</span>); style Fans stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        Wood & Corn --> Ethanol
        Copper & Caoutchouc --> Cables
        Cotton & CamphorWax & Ethanol --> Celluloid
        Iron & Charcoal0 --> Steel
        Cables & Celluloid & Steel --> Motors
        Bauxite & Charcoal1 --> Aluminium
        Motors & Aluminium --> Fans
        `
      },
      {
        productionChain: 'cinema',
        chainMultiplier: '12',
        mermaidDefinition: endent`
        flowchart BT;
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>8.33%</span><span class='ratio-count'>1</span></span></span>)
        Corn(<span class='icon-flex-row'><img src='${icons.cornIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        Cotton(<span class='icon-flex-row'><img src='${icons.cottonIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>)
        CamphorWax(<span class='icon-flex-row'><img src='${icons.camphorWaxIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.67%</span><span class='ratio-count'>1</span></span></span>)
        Ethanol(<span class='icon-flex-row'><img src='${icons.ethanolIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.67%</span><span class='ratio-count'>1</span></span></span>)
        Celluloid(<span class='icon-flex-row'><img src='${icons.celluloidIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.67%</span><span class='ratio-count'>1</span></span></span>)
        Film(<span class='icon-flex-row'><img src='${icons.filmReelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.67%</span><span class='ratio-count'>1</span></span></span>)
        Saltpeter(<span class='icon-flex-row'><img src='${icons.saltpeterIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33.33%</span><span class='ratio-count'>1</span></span></span>); style Saltpeter stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        Cinema(<img src='${icons.cinemaIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood & Corn --> Ethanol
        Cotton & CamphorWax & Ethanol --> Celluloid
        Saltpeter & Celluloid --> Film
        Film --> Cinema
        `
      },
      {
        productionChain: 'hospital',
        chainMultiplier: '24',
        mermaidDefinition: endent`
        flowchart LR;
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>4.17%</span><span class='ratio-count'>1</span></span></span>)
        Corn(<span class='icon-flex-row'><img src='${icons.cornIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>16.67%</span><span class='ratio-count'>1</span></span></span>)
        Orchid(<span class='icon-flex-row'><img src='${icons.orchidIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>8.33%</span><span class='ratio-count'>1</span></span></span>)
        Ethanol(<span class='icon-flex-row'><img src='${icons.ethanolIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>8.33%</span><span class='ratio-count'>1</span></span></span>)
        Herb(<span class='icon-flex-row'><img src='${icons.herbIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>8.33%</span><span class='ratio-count'>1</span></span></span>)
        Medicine(<span class='icon-flex-row'><img src='${icons.medicineIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>12.5%</span><span class='ratio-count'>1</span></span></span>)
        Hospital(<img src='${icons.hospitalIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Wood & Corn --> Ethanol
        Orchid & Ethanol & Herb --> Medicine
        Medicine --> Hospital
        `
      },
      {
        productionChain: 'scooter',
        chainMultiplier: '4',
        mermaidDefinition: endent`
        flowchart LR;
        Wood(<span class='icon-flex-row'><img src='${icons.woodIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Copper(<span class='icon-flex-row'><img src='${icons.copperIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        CamphorWax(<span class='icon-flex-row'><img src='${icons.camphorWaxIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Ethanol(<span class='icon-flex-row'><img src='${icons.ethanolIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Charcoal(<span class='icon-flex-row'><img src='${icons.charcoalKilnIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Mineral(<span class='icon-flex-row'><img src='${icons.mineralIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
        Celluloid(<span class='icon-flex-row'><img src='${icons.celluloidIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Steel(<span class='icon-flex-row'><img src='${icons.steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>)
        Pigments(<span class='icon-flex-row'><img src='${icons.pigmentIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>75%</span><span class='ratio-count'>1</span></span></span>)
        Corn(<img src='${icons.cornIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Caoutchouc0(<img src='${icons.caoutchoucIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cotton(<img src='${icons.cottonIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Cables(<img src='${icons.electricCablesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Caoutchouc1(<img src='${icons.caoutchoucIcon}' class='icon-size' /><span class='ratio-count'>1</span>)
        Saltpeter(<img src='${icons.saltpeterIcon}' class='icon-size' /><span class='ratio-count'>1</span>); style Saltpeter stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        Scooter(<img src='${icons.scooterIcon}' class='icon-size' /><span class='ratio-count'>1</span>); style Scooter stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        Motors(<span class='icon-flex-row'><img src='${icons.motorIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>100%</span><span class='ratio-count'>1</span></span></span>); style Motors stroke:#0675BD,stroke-width:5px,stroke-dasharray: 7 7;
        Wood & Corn --> Ethanol
        Copper & Caoutchouc0 --> Cables
        Cotton & CamphorWax & Ethanol --> Celluloid
        Iron & Charcoal --> Steel
        Saltpeter & Mineral --> Pigments
        Cables & Celluloid & Steel --> Motors
        Pigments & Motors & Caoutchouc1 --> Scooter
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
  { colBreak: true, tierName: 'skip' },
  { colBreak: true, tierName: 'skip' },
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
        Iron & Coal --> Steel --> Bomb
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
        Iron(<span class='icon-flex-row'><img src='${icons.ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>25%</span><span class='ratio-count'>1</span></span></span>)
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
