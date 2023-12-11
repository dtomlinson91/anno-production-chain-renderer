import * as icons from './icons';
import fullChainMultiplierIcon from 'assets/productionChainMultiplier.svg';
import { InfoCardItem, InfoCardItemWorldIcon } from './models';

// Common items
// export const commonItemData: InfoCardItem[] = [
//   {
//     id: 'charcoal',
//     icon: icons.charcoalKilnIcon,
//     text: '2 Charcoal Kilns can be replaced with 1 Coal Mine.'
//   },
//   {
//     id: 'airship',
//     icon: icons.airshipIcon,
//     text: 'Airship drop chain ratios are the same for Old World & New World.'
//   },
//   {
//     id: 'electricity',
//     icon: icons.electricityIcon,
//     text: 'Building requires electricity.'
//   },
//   {
//     id: 'fullChain',
//     icon: fullChainMultiplierIcon,
//     text: 'The multiplier for a full chain. To scale chain to 100% multiply together (for every item in the chain): ',
//     additionalText: ' number of buildings × efficiency % × multiplier'
//   }
// ];

// const commonWorldItemData: InfoCardItemWorldIcon[] = [
//   {
//     id: 'gold',
//     icon: icons.goldOreIcon,
//     textPre: 'Gold mines use New World',
//     textPost: 'production rates.',
//     worldIcon: icons.newWorldIcon
//   },
//   {
//     id: 'hacienda',
//     icon: icons.haciendaIcon,
//     textPre: 'Hacienda chains use New World',
//     textPost: 'buildings.',
//     worldIcon: icons.newWorldIcon
//   }
// ];

// export const itemDataBase: InfoCardItem[] = [...commonItemData];

// export const worldItemDataBase: InfoCardItemWorldIcon[] = [
//   ...commonWorldItemData,
//   {
//     id: 'furs',
//     icon: icons.fursIcon,
//     textPre: 'Furs use Old World',
//     textPost: 'production rates.',
//     worldIcon: icons.oldWorldIcon
//   },
//   {
//     id: 'clay',
//     icon: icons.clayIcon,
//     textPre: 'Enbesa',
//     textPost: ' production chains use Clay Collectors.',
//     worldIcon: icons.enbesaIcon
//   }
// ];

// Base
export const baseItemData: InfoCardItem[] = [
  {
    id: 'charcoal',
    icon: icons.charcoalKilnIcon,
    text: '2 Charcoal Kilns can be replaced with 1 Coal Mine.'
  },
  {
    id: 'electricity',
    icon: icons.electricityIcon,
    text: 'Building requires electricity.'
  }
];

export const baseItemWorldData: InfoCardItemWorldIcon[] = [
  {
    id: 'furs',
    icon: icons.fursIcon,
    textPre: 'Furs use Old World',
    textPost: 'production rates.',
    worldIcon: icons.oldWorldIcon
  }
];

// Misc
export const miscItemData: InfoCardItem[] = [];
export const miscItemWorldData: InfoCardItemWorldIcon[] = [];

// S1
export const season1ItemData: InfoCardItem[] = [];
export const season1ItemWorldData: InfoCardItemWorldIcon[] = [];

// S2
export const season2ItemData: InfoCardItem[] = [];
export const season2ItemWorldData: InfoCardItemWorldIcon[] = [];

// S3
export const season3ItemData: InfoCardItem[] = [];
export const season3ItemWorldData: InfoCardItemWorldIcon[] = [];

// S4
export const season4ItemData: InfoCardItem[] = [];
export const season4ItemWorldData: InfoCardItemWorldIcon[] = [];
