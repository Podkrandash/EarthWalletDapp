import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { Account } from '@tonkeeper/core/src/entries/account';
import { getApiConfig, Network } from '@tonkeeper/core/src/entries/network';
import { WalletVersion } from '@tonkeeper/core/src/entries/wallet';
import { InnerBody, useWindowsScroll } from '@tonkeeper/uikit/src/components/Body';
import { CopyNotification } from '@tonkeeper/uikit/src/components/CopyNotification';
import { Footer, FooterGlobalStyle } from '@tonkeeper/uikit/src/components/Footer';
import { Header, HeaderGlobalStyle } from '@tonkeeper/uikit/src/components/Header';
import { DarkThemeContext } from '@tonkeeper/uikit/src/components/Icon';
import { GlobalListStyle } from '@tonkeeper/uikit/src/components/List';
import { Loading } from '@tonkeeper/uikit/src/components/Loading';
import MemoryScroll from '@tonkeeper/uikit/src/components/MemoryScroll';
import {
    ActivitySkeletonPage,
    BrowserSkeletonPage,
    CoinSkeletonPage,
    HomeSkeleton,
    SettingsSkeletonPage
} from '@tonkeeper/uikit/src/components/Skeleton';
import { SybHeaderGlobalStyle } from '@tonkeeper/uikit/src/components/SubHeader';
import { AppContext, IAppContext } from '@tonkeeper/uikit/src/hooks/appContext';
import { AppSdkContext } from '@tonkeeper/uikit/src/hooks/appSdk';
import { StorageContext } from '@tonkeeper/uikit/src/hooks/storage';
import {
    I18nContext,
    TranslationContext,
    useTWithReplaces
} from '@tonkeeper/uikit/src/hooks/translation';
import { AppRoute, any } from '@tonkeeper/uikit/src/libs/routes';
import { Unlock } from '@tonkeeper/uikit/src/pages/home/Unlock';

import { Platform as TwaPlatform, initViewport } from '@tma.js/sdk';
import { SDKProvider } from '@tma.js/sdk-react';
import { ModalsRoot } from '@tonkeeper/uikit/src/components/ModalsRoot';
import { AmplitudeAnalyticsContext, useTrackLocation } from '@tonkeeper/uikit/src/hooks/amplitude';
import { useLock } from '@tonkeeper/uikit/src/hooks/lock';
import { useDebuggingTools } from '@tonkeeper/uikit/src/hooks/useDebuggingTools';
import { UnlockNotification } from '@tonkeeper/uikit/src/pages/home/UnlockNotification';
import { useDevSettings } from '@tonkeeper/uikit/src/state/dev';
import { useUserFiatQuery } from '@tonkeeper/uikit/src/state/fiat';
import { useUserLanguage } from '@tonkeeper/uikit/src/state/language';
import { useSwapMobileNotification } from '@tonkeeper/uikit/src/state/swap/useSwapMobileNotification';
import { useTonendpoint, useTonenpointConfig } from '@tonkeeper/uikit/src/state/tonendpoint';
import {
    useAccountsStateQuery,
    useActiveAccountQuery,
    useActiveTonNetwork
} from '@tonkeeper/uikit/src/state/wallet';
import { defaultTheme } from '@tonkeeper/uikit/src/styles/defaultTheme';
import { Container, GlobalStyle } from '@tonkeeper/uikit/src/styles/globalStyle';
import { lightTheme } from '@tonkeeper/uikit/src/styles/lightTheme';
import React, { FC, PropsWithChildren, Suspense, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import StandardErrorBoundary from './components/ErrorBoundary';
import { InitDataLogger } from './components/InitData';
import { TwaReceiveNotification } from './components/ReceiveNotifications';
import { TwaQrScanner } from './components/TwaQrScanner';
import { TwaNftNotification } from './components/nft/NftNotification';
import { SwapScreen } from './components/swap/SwapNotification';
import { TwaSendNotification } from './components/transfer/SendNotifications';
import { TwaAppSdk } from './libs/appSdk';
import { useAnalytics, useTwaAppViewport } from './libs/hooks';
import { useGlobalPreferencesQuery } from '@tonkeeper/uikit/src/state/global-preferences';
import { useGlobalSetup } from '@tonkeeper/uikit/src/state/globalSetup';

const Initialize = React.lazy(() => import('@tonkeeper/uikit/src/pages/import/Initialize'));
const ImportRouter = React.lazy(() => import('@tonkeeper/uikit/src/pages/import'));
const Browser = React.lazy(() => import('@tonkeeper/uikit/src/pages/browser'));
const Settings = React.lazy(() => import('@tonkeeper/uikit/src/pages/settings'));
const Activity = React.lazy(() => import('@tonkeeper/uikit/src/pages/activity/Activity'));
const Home = React.lazy(() => import('@tonkeeper/uikit/src/pages/home/Home'));
const Coin = React.lazy(() => import('@tonkeeper/uikit/src/pages/coin/Coin'));
const TonConnectSubscription = React.lazy(
    () => import('@tonkeeper/uikit/src/components/connect/TonConnectSubscription')
);
const PairSignerNotification = React.lazy(
    () => import('@tonkeeper/uikit/src/components/PairSignerNotification')
);
const PairKeystoneNotification = React.lazy(
    () => import('@tonkeeper/uikit/src/components/PairKeystoneNotification')
);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30000,
            refetchOnWindowFocus: false
        }
    }
});

const TARGET_ENV = 'twa';

export const App = () => {
    return (
        <StandardErrorBoundary>
            <SDKProvider>
                <QueryClientProvider client={queryClient}>
                    <TwaLoader />
                </QueryClientProvider>
            </SDKProvider>
        </StandardErrorBoundary>
    );
};

const TwaLoader = () => {
    const { data: sdk, error } = useQuery(['sdk'], async () => {
        const [willViewport] = initViewport();
        return new TwaAppSdk(await willViewport);
    });

    useEffect(() => {
        if (!sdk) return undefined;

        const theme = sdk.miniApp.isDark ? defaultTheme : lightTheme;

        if (sdk.miniApp.supports('setBackgroundColor')) {
            sdk.miniApp.setBgColor(theme.backgroundPage);
        }
        if (sdk.miniApp.supports('setHeaderColor')) {
            sdk.miniApp.setHeaderColor(theme.backgroundPage);
        }

        sdk.mainButton.setBgColor(theme.buttonPrimaryBackground);
        sdk.mainButton.setTextColor(theme.buttonPrimaryForeground);

        document.body.style.backgroundColor = theme.backgroundPage;
    }, [sdk]);

    if (error instanceof Error) {
        return <div>{error.message}</div>;
    }

    if (!sdk || sdk == null) {
        return <div></div>;
    }

    return (
        <AppSdkContext.Provider value={sdk}>
            <ThemeProvider theme={sdk.miniApp.isDark ? defaultTheme : lightTheme}>
                <DarkThemeContext.Provider value={sdk.miniApp.isDark}>
                    <GlobalStyle />
                    <TwaApp sdk={sdk} />
                </DarkThemeContext.Provider>
            </ThemeProvider>
        </AppSdkContext.Provider>
    );
};

const getUsePadding = (platform: TwaPlatform): boolean => {
    switch (platform) {
        case 'ios':
            return true;
        case 'android':
        case 'android_x':
            return false;
        default:
            return false;
    }
};

const TwaApp: FC<{ sdk: TwaAppSdk }> = ({ sdk }) => {
    const { t: tSimple, i18n } = useTranslation();

    const t = useTWithReplaces(tSimple);

    const translation = useMemo(() => {
        const client: I18nContext = {
            t,
            i18n: {
                enable: false,
                reloadResources: i18n.reloadResources,
                changeLanguage: i18n.changeLanguage as any,
                language: i18n.language,
                languages: []
            }
        };
        return client;
    }, [t, i18n]);

    return (
        <BrowserRouter>
            <TranslationContext.Provider value={translation}>
                <StorageContext.Provider value={sdk.storage}>
                    <HeaderGlobalStyle />
                    <FooterGlobalStyle />
                    <SybHeaderGlobalStyle />
                    <GlobalListStyle />

                    <Loader sdk={sdk} />
                    <InitDataLogger />
                    <UnlockNotification
                        sdk={sdk}
                        usePadding={getUsePadding(sdk.launchParams.platform)}
                    />
                </StorageContext.Provider>
            </TranslationContext.Provider>
        </BrowserRouter>
    );
};

const FullSizeWrapper = styled(Container)``;

const Wrapper = styled(FullSizeWrapper)<{ standalone: boolean }>`
    height: var(--app-height);
    transition: height 0.4s ease;

    box-sizing: border-box;
    padding-top: 64px;
    padding-bottom: ${props => (props.standalone ? '96' : '80')}px;
`;

const seeIfShowQrScanner = (platform: TwaPlatform): boolean => {
    switch (platform) {
        case 'ios':
        case 'android':
        case 'android_x':
            return true;
        default:
            return false;
    }
};

export const Loader: FC<{ sdk: TwaAppSdk }> = ({ sdk }) => {
    const { data: activeAccount, isLoading: activeWalletLoading } = useActiveAccountQuery();
    const { data: accounts, isLoading: isWalletsLoading } = useAccountsStateQuery();
    const { data: lang, isLoading: isLangLoading } = useUserLanguage();
    const { data: fiat } = useUserFiatQuery();
    const { data: devSettings } = useDevSettings();
    const { isLoading: globalPreferencesLoading } = useGlobalPreferencesQuery();
    const { isLoading: globalSetupLoading } = useGlobalSetup();

    const lock = useLock(sdk);
    const network = useActiveTonNetwork();

    const tonendpoint = useTonendpoint({
        targetEnv: TARGET_ENV,
        build: sdk.version,
        network,
        lang
    });
    const { data: serverConfig } = useTonenpointConfig(tonendpoint);

    const { data: tracker } = useAnalytics(
        activeAccount || undefined,
        accounts,
        network,
        sdk.version
    );

    if (
        isWalletsLoading ||
        activeWalletLoading ||
        isLangLoading ||
        serverConfig === undefined ||
        lock === undefined ||
        fiat === undefined ||
        !devSettings ||
        globalPreferencesLoading ||
        globalSetupLoading
    ) {
        return <Loading />;
    }

    const showQrScan = seeIfShowQrScanner(sdk.launchParams.platform);

    const context: IAppContext = {
        mainnetApi: getApiConfig(serverConfig.mainnetConfig, Network.MAINNET),
        testnetApi: getApiConfig(serverConfig.testnetConfig, Network.TESTNET),
        fiat,
        mainnetConfig: serverConfig.mainnetConfig,
        testnetConfig: serverConfig.testnetConfig,
        tonendpoint,
        standalone: true,
        extension: false,
        ios: true,
        proFeatures: false,
        hideLedger: true,
        hideSigner: !showQrScan,
        hideKeystone: !showQrScan,
        hideQrScanner: !showQrScan,
        hideMam: true,
        hideMultisig: true,
        defaultWalletVersion: WalletVersion.V5R1,
        browserLength: 4,
        env: {
            tronApiKey: import.meta.env.VITE_APP_TRON_API_KEY
        }
    };

    return (
        <AmplitudeAnalyticsContext.Provider value={tracker}>
            <AppContext.Provider value={context}>
                <Content
                    activeAccount={activeAccount}
                    lock={lock}
                    showQrScan={showQrScan}
                    sdk={sdk}
                />
                <CopyNotification />
                <ModalsRoot />
                {showQrScan && <TwaQrScanner />}
            </AppContext.Provider>
        </AmplitudeAnalyticsContext.Provider>
    );
};

const InitWrapper = styled(Container)`
    height: var(--app-height);
    min-height: auto;

    transition: height 0.4s ease;

    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 16px;
    box-sizing: border-box;
    position: relative;
`;

const InitPages: FC<{ sdk: TwaAppSdk }> = ({ sdk }) => {
    useTwaAppViewport(true, sdk);
    return (
        <InitWrapper>
            <Suspense fallback={<Loading />}>
                <Initialize />
            </Suspense>
        </InitWrapper>
    );
};

const Content: FC<{
    sdk: TwaAppSdk;
    activeAccount?: Account | null;
    lock: boolean;
    showQrScan: boolean;
}> = ({ activeAccount, lock, showQrScan, sdk }) => {
    const location = useLocation();
    useWindowsScroll();
    useTrackLocation();
    useDebuggingTools();

    if (lock) {
        return (
            <FullSizeWrapper>
                <Unlock />
            </FullSizeWrapper>
        );
    }

    if (!activeAccount || location.pathname.startsWith(AppRoute.import)) {
        return <InitPages sdk={sdk} />;
    }

    return (
        <>
            <Routes>
                <Route path={AppRoute.swap} element={<SwapScreen />} />
                <Route path={'*'} element={<MainPages showQrScan={showQrScan} sdk={sdk} />} />
            </Routes>
            <Suspense>
                <PairSignerNotification />
                <PairKeystoneNotification />
            </Suspense>
        </>
    );
};

const TwaNotification: FC<PropsWithChildren> = ({ children }) => {
    return (
        <TwaNftNotification>
            <TwaReceiveNotification>
                <TwaSendNotification>{children}</TwaSendNotification>
            </TwaReceiveNotification>
        </TwaNftNotification>
    );
};

const MainPages: FC<{ showQrScan: boolean; sdk: TwaAppSdk }> = ({ showQrScan, sdk }) => {
    useTwaAppViewport(false, sdk);

    const [isOpen] = useSwapMobileNotification();
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            navigate(AppRoute.swap);
        }
    }, [isOpen]);

    return (
        <TwaNotification>
            <Wrapper standalone={getUsePadding(sdk.launchParams.platform)}>
                <Routes>
                    <Route
                        path={AppRoute.activity}
                        element={
                            <Suspense fallback={<ActivitySkeletonPage />}>
                                <Activity />
                            </Suspense>
                        }
                    />
                    <Route
                        path={any(AppRoute.browser)}
                        element={
                            <Suspense fallback={<BrowserSkeletonPage />}>
                                <Browser />
                            </Suspense>
                        }
                    />
                    <Route
                        path={any(AppRoute.settings)}
                        element={
                            <Suspense fallback={<SettingsSkeletonPage />}>
                                <Settings />
                            </Suspense>
                        }
                    />
                    <Route path={AppRoute.coins}>
                        <Route
                            path=":name/*"
                            element={
                                <Suspense fallback={<CoinSkeletonPage />}>
                                    <Coin />
                                </Suspense>
                            }
                        />
                    </Route>
                    <Route
                        path="*"
                        element={
                            <>
                                <Header showQrScan={showQrScan} />
                                <InnerBody>
                                    <Suspense fallback={<HomeSkeleton />}>
                                        <Home />
                                    </Suspense>
                                </InnerBody>
                            </>
                        }
                    />
                </Routes>
                <Footer standalone={getUsePadding(sdk.launchParams.platform)} />
                <MemoryScroll />
                <Suspense>
                    <TonConnectSubscription />
                </Suspense>
            </Wrapper>
        </TwaNotification>
    );
};
