import styled, { css } from "styled-components";
import { minWidth } from "styles/breakpoint";

export const ChartContainer = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.secondary};
    display: flex;
    position: absolute;
    bottom: ${theme.spacings.xlarge};
    min-width: 250px;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusMenu};
    flex-direction: column;
    ${minWidth.xxs`
    right: 0px;
    width: 100%;
    bottom: 0;
        border-radius:0;
  `}
    ${minWidth.sm`
    right: 50px;
    width: 30%;
    bottom: ${theme.spacings.xlarge};
     border-radius: ${theme.border.radiusMenu};
  `}
  `}
`;

export const Chart = styled.div``;

export const ChartBar = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.primary};
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.tertiary};
    border-bottom: 6px solid ${theme.colors.quaternary};
    border-radius: ${theme.border.radiusButton};
  `}
`;

export const ChartButton = styled.div`
  ${({ theme }) => css`
    background: ${({ active }) => (active ? theme.colors.quaternary : "none;")};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radiusButton};
    font-weight: ${theme.font.bold};
    color: ${({ active }) =>
      active ? theme.colors.tertiary : theme.colors.quaternary};
    cursor: pointer;
    ${minWidth.xxs`
    font-size:${theme.font.sizes.xsmall};
  `}
    ${minWidth.sm`
       font-size: ${theme.font.sizes.medium};
  `}
  `}
`;
