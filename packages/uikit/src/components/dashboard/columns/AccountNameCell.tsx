import { FC } from 'react';
import { WalletId } from '@tonkeeper/core/src/entries/wallet';
import { Account } from '@tonkeeper/core/src/entries/account';
import { AccountAndWalletInfo } from '../../account/AccountAndWalletInfo';

export const AccountNameCell: FC<{ account: Account; walletId: WalletId }> = ({
    account,
    walletId
}) => {
    return <AccountAndWalletInfo account={account} walletId={walletId} hideAddress noPrefix />;
};
