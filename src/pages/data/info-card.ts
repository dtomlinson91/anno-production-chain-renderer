import * as icons from './icons';
import fullChainMultiplierIcon from 'assets/productionChainMultiplier.svg';

export const worldItemData = [
  {
    icon: icons.fursIcon,
    worldIcon: icons.oldWorldIcon,
    text: 'Furs use Old World'
  },
  {
    icon: icons.clayIcon,
    worldIcon: icons.oldWorldIcon,
    text: 'Clay uses Old World'
  },
  {
    icon: icons.goldOreIcon,
    worldIcon: icons.newWorldIcon,
    text: 'Gold mines use New World'
  }
];

export const itemData = [
  {
    icon: icons.charcoalKilnIcon,
    text: '2 Charcoal Kilns can be replaced with 1 Coal Mine'
  },
  {
    icon: icons.electricityIcon,
    text: 'Building has electricity'
  },
  {
    icon: fullChainMultiplierIcon,
    text: 'Multiplier for a full chain. To scale chain to 100%:',
    additionalText:
      'multiply together number * efficiency * multiplier for each building in the chain.'
  }
];
