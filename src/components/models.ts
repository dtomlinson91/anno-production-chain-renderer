export interface TieredProductionChain {
  tierName: string;
  productionChains: ProductionChain[];
}

export interface ProductionChain {
  productionChain: string;
  mermaidDefinition: string;
}
