import { govPoolABI } from '../abi';

export const kardiaStakePools = [
    {
        id: 'sen-kai',
        name: 'SEN',
        logo: 'single-assets/SEN.png',
        token: 'SEN',
        tokenDecimals: 18,
        tokenAddress: '0xb697231730C004110A86f51BfF4B8DD085c0CB28',
        tokenOracle: 'tokens',
        tokenOracleId: 'SEN',
        earnedToken: 'KAI',
        earnedTokenDecimals: 18,
        earnedTokenAddress: '0xAF984E23EAA3E7967F3C5E007fbe397D8566D23d',
        earnContractAddress: '0x3e5Cc7C628edCD25660Ad5A78fcF8020159e8df7',
        earnContractAbi: govPoolABI,
        earnedOracle: 'tokens',
        earnedOracleId: 'WKAI',
        partnership: false,
        status: 'active',
        hideCountdown: true,
        partners: [
            // {
            //     logo: 'stake/beefy/beefyfinance.png',
            //     background: 'stake/beefy/background.png',
            //     text: "",
            //     website: 'https://app.sleepearn.finance',
            //     social: {
            //         telegram: 'http://t.me/beefyfinance',
            //         twitter: 'https://twitter.com/beefyfinance',
            //     },
            // },
        ],
    }
];
