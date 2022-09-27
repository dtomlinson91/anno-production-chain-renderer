export interface TieredProductionChain {
  colBreak: boolean;
  tierName: string;
  productionChains?: ProductionChain[];
}

export interface ProductionChain {
  productionChain: string;
  mermaidDefinition: string;
}
