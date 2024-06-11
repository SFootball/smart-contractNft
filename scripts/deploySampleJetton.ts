import { Address, toNano } from '@ton/core';
import { SampleJetton } from '../wrappers/SampleJetton';
import { NetworkProvider } from '@ton/blueprint';
import { buildOnchainMetadata } from '../utils/jetton-helpers';

export async function run(provider: NetworkProvider) {
    const jettonParams = {
        name: "SFC",
        description: "Official token of the SFootBall",
        symbol: "SFC",
        image: "https://indigo-imaginative-sparrow-800.mypinata.cloud/ipfs/QmfXVWu9RQXSjnze7uHPo9rKMuH8H3dSYZQeRjnxKjmmka",
    };

    // Create content Cell
    let content = buildOnchainMetadata(jettonParams);

    const sampleJetton = provider.open(await SampleJetton.fromInit(provider.sender().address as Address, content, 1000000000000000000n));

    await sampleJetton.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Mint',
            amount: 100000000000000000n,
            receiver: provider.sender().address as Address
        }
    );

    await provider.waitForDeploy(sampleJetton.address);

    // run methods on `sampleJetton`
}
