import { JsonRpcProvider } from '@ethersproject/providers';
import * as dotenv from 'dotenv';
import { SOR } from 'wrapper';
import { SorConfig } from '../types';
import { VertekDataService } from './pool-data.service';
import { VertekTokenPricingService } from './pricing.service';

dotenv.config();

export async function runVertek() {
  const provider = new JsonRpcProvider(process.env.BSC_RPC);
  const config: SorConfig = {
    chainId: 56,
    vault: '0x719488F4E859953967eFE963c6Bed059BaAab60c',
    weth: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    // connectingTokens?: { symbol: string; address: string }[];
    // staBal3Pool?: { id: string; address: string };
    // usdcConnectingPool?: { id: string; usdc: string };
    // wETHwstETH?: { id: string; address: string };
    // lbpRaisingTokens?: string[];
  };

  const poolDataProvider = new VertekDataService();
  const pricingService = new VertekTokenPricingService(poolDataProvider);

  const pools = await poolDataProvider.getPools();
  console.log(pools);
  // const sor = new SOR(provider, config, poolDataProvider, pricingService);
}
