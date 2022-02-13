import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const white = '#f9f9f9';
const lightGray = '#ddd';
const darkGray = '#aaa';
const alpha = 0.95;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
`;

export const Loader = styled.div`
  border: 8px solid ${lightGray};
  border-top: 8px solid ${darkGray};
  border-radius: 50%;
  margin: auto;
  width: 60px;
  height: 60px;
  animation: ${spin} 750ms linear infinite;
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: ${alpha};
  background-color: ${white};
`;
