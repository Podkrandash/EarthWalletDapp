import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const EarthLogoWrapper = styled.div<{ size: string }>`
  font-size: ${props => props.size}px;
  animation: ${rotate} 3s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EarthLogoIcon: FC<{
    size: string;
}> = ({ size }) => {
    return (
        <EarthLogoWrapper size={size}>
            🌍
        </EarthLogoWrapper>
    );
};

const EarthIcon: FC<{
    width?: string;
    height?: string;
}> = ({ width = '128' }) => {
    return <EarthLogoIcon size={width} />;
};

export default EarthIcon; 