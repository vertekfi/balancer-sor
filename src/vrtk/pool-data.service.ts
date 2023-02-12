import { gql, GraphQLClient } from 'graphql-request';
import { PoolDataService, SubgraphPoolBase } from 'types';

export class VertekDataService implements PoolDataService {
  readonly client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient(process.env.BACKEND_URL || '');
  }

  async getPools(): Promise<SubgraphPoolBase[]> {
    const { poolGetPools } = await this.client.request(gql`
      query {
        poolGetPools {
          id
          address
          allTokens {
            address
          }
        }
      }
    `);

    return poolGetPools;
  }
}
