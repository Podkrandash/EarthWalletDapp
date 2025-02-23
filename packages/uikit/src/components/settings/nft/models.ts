import { NftItemCollection } from '@tonkeeper/core/src/tonApiV2';
import { NFT } from '@tonkeeper/core/src/entries/nft';

export type SettingsNFTCollection = NftItemCollection & {
    type: 'collection';
    nfts: NFT[];
    isSpam: boolean;
    isHidden: boolean;
    image?: string;
    name: string;
};

export type SettingsSingleNFT = NFT & {
    type: 'single';
    isSpam: boolean;
    isHidden: boolean;
    image?: string;
    name: string;
};
