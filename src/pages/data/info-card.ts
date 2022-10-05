import * as icons from './icons';
import fullChainMultiplierIcon from 'assets/productionChainMultiplier.svg';
import { InfoCardItem, InfoCardWorldItem } from './models';

export const commonWorldItemData: InfoCardWorldItem[] = [
  {
    id: 'gold',
    icon: icons.goldOreIcon,
    textPre: 'Gold mines use New World',
    textPost: 'production rates.',
    worldIcon: icons.newWorldIcon
  }
];

export const worldItemDataBase: InfoCardWorldItem[] = [
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
    textPre: 'Represents a Clay Mine. A clay collector includes Enbesa',
    textPost: 'icon.',
    worldIcon: icons.enbesaIcon
  },
  ...commonWorldItemData
];

export const itemDataBase: InfoCardItem[] = [
  {
    id: 'charcoal',
    icon: icons.charcoalKilnIcon,
    text: '2 Charcoal Kilns can be replaced with 1 Coal Mine'
  },
  {
    id: 'electricity',
    icon: icons.electricityIcon,
    text: 'Building has electricity'
  },
  {
    id: 'fullChain',
    icon: fullChainMultiplierIcon,
    text: 'Multiplier for a full chain. To scale chain to 100%:',
    additionalText:
      'multiply together number * efficiency * multiplier for each building in the chain.'
  }
];

export const itemDataExpansions: InfoCardItem[] = [
  {
    id: 'fullChain',
    icon: fullChainMultiplierIcon,
    text: 'Multiplier for a full chain. To scale chain to 100%:',
    additionalText:
      'multiply together number * efficiency * multiplier for each building in the chain.'
  }
];
