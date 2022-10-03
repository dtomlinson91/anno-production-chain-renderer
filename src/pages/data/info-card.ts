import * as icons from './icons';
import fullChainMultiplierIcon from 'assets/productionChainMultiplier.svg';
import { InfoCardItem, InfoCardWorldItem } from './models';

export const worldItemDataBase: InfoCardWorldItem[] = [
  {
    id: 'furs',
    icon: icons.fursIcon,
    text: 'Furs use Old World',
    worldIcon: icons.oldWorldIcon
  },
  {
    id: 'clay',
    icon: icons.clayIcon,
    text: 'Clay uses Old World',
    worldIcon: icons.oldWorldIcon
  },
  {
    id: 'gold',
    icon: icons.goldOreIcon,
    text: 'Gold mines use New World',
    worldIcon: icons.newWorldIcon
  }
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
