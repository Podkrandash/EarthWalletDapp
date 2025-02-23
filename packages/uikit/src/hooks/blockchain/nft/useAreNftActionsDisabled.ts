import { NFT } from '@tonkeeper/core/src/entries/nft';
import { seeIfAddressEqual } from '@tonkeeper/core/src/utils/common';
import { useActiveWallet } from '../../../state/wallet';

export function useAreNftActionsDisabled(nft: NFT) {
    const wallet = useActiveWallet();

    return nft.sale !== undefined || !seeIfAddressEqual(wallet.rawAddress, nft.owner?.address);
}
