export interface TieredProductionChain {
  tierName: string;
  width: number;
  productionChains: ProductionChain[];
}

export interface ProductionChain {
  productionChain: string;
  mermaidDefinition: string;
}
