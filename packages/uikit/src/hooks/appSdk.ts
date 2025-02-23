import { IAppSdk, MockAppSdk } from '@tonkeeper/core/src/AppSdk';
import React, { useContext } from 'react';

export const AppSdkContext = React.createContext<IAppSdk>(new MockAppSdk());

export const useAppSdk = () => {
    return useContext(AppSdkContext);
};

