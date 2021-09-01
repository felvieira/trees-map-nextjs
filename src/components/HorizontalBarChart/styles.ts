
import styled, { css } from "styled-components";

export const ChartTitle = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.small} auto ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
  `}
`;
