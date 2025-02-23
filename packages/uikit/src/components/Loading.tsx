import React from 'react';
import styled from 'styled-components';
import EarthIcon from './lottie/EarthLogo';

const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: var(--app-height);
`;

export const Loading = () => {
    return (
        <LoadingWrapper>
            <EarthIcon width="128" />
        </LoadingWrapper>
    );
};
