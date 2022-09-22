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

// Engineers
import caoutchoucIcon from '../assets/annoIcons/Caoutchouc.webp';
import highWheelerIcon from '../assets/annoIcons/High_wheeler.webp';

// Weapons
import weaponsIcon from '../assets/annoIcons/Weapons.webp';

// Production Chains
export const productionChains = {
  buildingMaterials: [
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
      mermaidDefinition: `flowchart LR; CharcoalKiln(<img src='${charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Iron(<img src='${ironIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Steel(<span class='icon-flex-row'><img src='${steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66%</span><span class='ratio-count'>1</span></span></span>) --> SteelBeams(<img src='${steelBeamsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
    }
  ],
  farmersWorkers: [
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
  ],
  engineers: [
    {
      productionChain: 'highWheeler',
      mermaidDefinition: `flowchart LR; Coal(<img src='${coalIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Iron(<img src='${ironIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Steel(<img src='${steelIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> HighWheeler(<span class='icon-flex-row'><img src='${highWheelerIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${lightningIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>); Caoutchouc(<img src='${caoutchoucIcon}' class='icon-size' /><span class='ratio-count'>4</span>) --> HighWheeler`
    }
  ],
  weapons: [
    {
      productionChain: 'weapons',
      mermaidDefinition: `flowchart LR; charcoalKiln(<img src='${charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Iron(<span class='icon-flex-row'><img src='${ironIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>50%</span><span class='ratio-count'>1</span></span></span>) --> Steel(<span class='icon-flex-row'><img src='${steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>33%</span><span class='ratio-count'>1</span></span></span>) --> Weapons(<img src='${weaponsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`
    }
  ]
};
