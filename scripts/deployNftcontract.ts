import { toNano } from '@ton/core';
import { Nftcontract } from '../wrappers/Nftcontract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const nftcontract = provider.open(await Nftcontract.fromInit());

    await nftcontract.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(nftcontract.address);

    // run methods on `nftcontract`
}
