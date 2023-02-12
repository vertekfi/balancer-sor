export enum PrismaPoolType {
  WEIGHTED = 'WEIGHTED',
  STABLE = 'STABLE',
  // META_STABLE,
  // PHANTOM_STABLE,
  // ELEMENT,
  // LINEAR,
  // UNKNOWN,
  // LIQUIDITY_BOOTSTRAPPING,
  // INVESTMENT
}

// address: string;
// balance: string;
// decimals: number;
// priceRate: string;
// // WeightedPool field
// weight: string | null;

export interface PrismaToken {
  address: string;

  token: {
    tokenAddress: string;
  };
}

// id: string;
// address: string;
// poolType: string;
// swapFee: string;
// swapEnabled: boolean;
// totalShares: string;
// tokens: SubgraphToken[];
// tokensList: string[];

export interface PrismaPool {
  id: string;
  address: string;
  type: PrismaPoolType;

  dynamicData: PrismaPoolDynamicData;

  tokens: PrismaPoolToken[];
}

export interface PrismaPoolToken {
  dynamicData: PrismaPoolTokenDynamicData;
}

export interface PrismaPoolTokenDynamicData {
  balance: string;
  weight?: string;
}

export interface PrismaPoolDynamicData {
  totalShares: string;
  swapEnabled: boolean;
  swapFee: string;
}
