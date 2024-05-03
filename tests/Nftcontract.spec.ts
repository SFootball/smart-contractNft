import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { Nftcontract } from '../wrappers/Nftcontract';
import '@ton/test-utils';


describe('Nftcontract', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let nftcontract: SandboxContract<Nftcontract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        nftcontract = blockchain.openContract(await Nftcontract.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await nftcontract.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: nftcontract.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and nftcontract are ready to use
    });
});

