import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ORB',
    lpAddresses: {
      97: '',
      1: '0x6bf0AD49176b0E55FE2c3C7BB1A218B18524c421',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba', // ORB-BUSD LP
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    tokenSymbol: 'ORB',
    tokenAddresses: {
      97: '',
      1: '0x1fbc5b43ba36adc9d2a28b460779ab03c276cd13',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba',
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'ORB-ETH',
    platfrom: 'Uniswap',

    lpAddresses: {
      97: '',
      1: '0x6bf0AD49176b0E55FE2c3C7BB1A218B18524c421',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba', // ORB-BUSD LP
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    tokenSymbol: 'ORB',
    tokenAddresses: {
      97: '',
      1: '0x1fbc5b43ba36adc9d2a28b460779ab03c276cd13',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba',
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    platfrom: 'Uniswap',

    lpSymbol: 'ORB-USDT',
    lpAddresses: {
      97: '',
      1: '0x81a10a45143d7a6b7e1a0e63761b4fba311bb661',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba', // ORB-BUSD LP
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    tokenSymbol: 'ORB',
    tokenAddresses: {
      97: '',
      1: '0x1fbc5b43ba36adc9d2a28b460779ab03c276cd13',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba',
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 5,
    lpSymbol: 'ETH-USDT',
    platfrom: 'Uniswap',

    lpAddresses: {
      97: '',
      1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba', // ORB-BUSD LP
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba',
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 10,
    risk: 5,
    lpSymbol: 'WBTC-ETH',
    platfrom: 'Uniswap',

    lpAddresses: {
      97: '',
      1: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba', // ORB-BUSD LP
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba',
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    quoteTokenSymbol: QuoteToken.BTC,
    quoteTokenAdresses: contracts.wbtc,
  },

  {
    pid: 11,
    risk: 5,
    platfrom: 'Uniswap',

    lpSymbol: 'SUSHI-ETH',
    lpAddresses: {
      97: '',
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba', // ORB-BUSD LP
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      97: '',
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
      56: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
      3: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 7,
    risk: 5,
    lpSymbol: 'SUSHI',
    isTokenOnly: true,

    lpAddresses: {
      97: '',
      1: '0x795065dcc9f64b5614c407a6efdc400da6221fb0',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba', // ORB-BUSD LP
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      97: '',
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba',
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 8,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'UNI',
    lpAddresses: {
      97: '',
      1: '0xa57f771c71cc6be8bd7b26012fa022113dc949f1',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba', // ORB-BUSD LP
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    tokenSymbol: 'UNI',
    tokenAddresses: {
      97: '',
      1: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba',
      3: '0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  // {
  //   pid: 7,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'PICKLE-ETH',
  //   lpAddresses: {
  //     97: '',
  //     1:"0xef0881ec094552b2e128cf945ef17a6752b4ec5d",
  //     56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba', // ORB-BUSD LP
  //     3:"0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"

  //   },
  //   tokenSymbol: 'PICKLE',
  //   tokenAddresses: {
  //     97: '',
  //     1:"0x1fbc5b43ba36adc9d2a28b460779ab03c276cd13",
  //     56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba',
  //     3:"0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },

  // {
  //   pid: 9,
  //   risk: 5,
  //   lpSymbol: 'SUSHI',
  //   lpAddresses: {
  //     97: '',
  //     1:"0x795065dcc9f64b5614c407a6efdc400da6221fb0",
  //     56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba', // ORB-BUSD LP
  //     3:"0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"

  //   },
  //   tokenSymbol: 'SUSHI',
  //   tokenAddresses: {
  //     97: '',
  //     1:"0x1fbc5b43ba36adc9d2a28b460779ab03c276cd13",
  //     56: '0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba',
  //     3:"0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
