import { TokenPriceService } from 'types';
import { VertekDataService } from './pool-data.service';

const priceCache: {
  [address: string]: {
    lastTimestamp: number;
    price: string;
  };
} = {};

const ttl = 1000 * 30;

export class VertekTokenPricingService implements TokenPriceService {
  constructor(private readonly vertekClient: VertekDataService) {}

  async getNativeAssetPriceInToken(tokenAddress: string): Promise<string> {
    return '';
  }
}
