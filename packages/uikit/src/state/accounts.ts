import { useAccountsStorage } from '../hooks/useStorage';
import { useQuery } from '@tanstack/react-query';
import { AccountsState } from '@tonkeeper/core/src/entries/account';
import { QueryKey } from '../libs/queryKey';

export const useAccountsState = () => {
    return useAccountsStateQuery().data!;
};

export const useAccountsStateQuery = () => {
    const storage = useAccountsStorage();
    return useQuery<AccountsState, Error>(
        [QueryKey.account, QueryKey.wallets],
        () => storage.getAccounts(),
        {
            keepPreviousData: true
        }
    );
};
