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
