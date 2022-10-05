export interface TieredProductionChain {
  colBreak: boolean;
  tierName: string;
  productionChains?: ProductionChain[];
}

export interface ProductionChain {
  productionChain: string;
  chainMultiplier?: string;
  mermaidDefinition: string;
}

export interface InfoCardItem {
  id: string;
  icon: string;
  text: string;
  additionalText?: string;
}

export interface InfoCardWorldItem {
  id: string;
  icon: string;
  textPre: string;
  textPost: string;
  worldIcon: string;
}
