import * as icons from './icons';
import fullChainMultiplierIcon from 'assets/productionChainMultiplier.svg';
import { InfoCardItem, InfoCardWorldItem } from './models';

// Common items
export const commonItemData: InfoCardItem[] = [
  {
    id: 'charcoal',
    icon: icons.charcoalKilnIcon,
    text: '2 Charcoal Kilns can be replaced with 1 Coal Mine.'
  },
  {
    id: 'airship',
    icon: icons.airshipIcon,
    text: 'Airship drop chain ratios are the same for Old World & New World.'
  },
  {
    id: 'electricity',
    icon: icons.electricityIcon,
    text: 'Building requires electricity.'
  },
  {
    id: 'fullChain',
    icon: fullChainMultiplierIcon,
    text: 'The multiplier for a full chain. To scale chain to 100% multiply together (for every item in the chain): ',
    additionalText: ' number of buildings × efficiency % × multiplier'
  }
];

const commonWorldItemData: InfoCardWorldItem[] = [
  {
    id: 'gold',
    icon: icons.goldOreIcon,
    textPre: 'Gold mines use New World',
    textPost: 'production rates.',
    worldIcon: icons.newWorldIcon
  },
  {
    id: 'hacienda',
    icon: icons.haciendaIcon,
    textPre: 'Hacienda chains use New World',
    textPost: 'buildings.',
    worldIcon: icons.newWorldIcon
  }
];

export const itemDataBase: InfoCardItem[] = [...commonItemData];

export const worldItemDataBase: InfoCardWorldItem[] = [
  ...commonWorldItemData,
  {
    id: 'furs',
    icon: icons.fursIcon,
    textPre: 'Furs use Old World',
    textPost: 'production rates.',
    worldIcon: icons.oldWorldIcon
  },
  {
    id: 'clay',
    icon: icons.clayIcon,
    textPre: 'Enbesa',
    textPost: ' production chains use Clay Collectors.',
    worldIcon: icons.enbesaIcon
  }
];

// S2 to S4
// export const itemDataExpansions: InfoCardItem[] = [, ...commonItemData];

// export const worldItemDataExpansions: InfoCardWorldItem[] = [
//   ...commonWorldItemData,
//   {
//     id: 'hacienda',
//     icon: icons.haciendaIcon,
//     textPre: 'Hacienda chains use New World',
//     textPost: 'buildings.',
//     worldIcon: icons.newWorldIcon
//   }
// ];
