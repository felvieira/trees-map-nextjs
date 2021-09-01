import { css } from "styled-components";
import theme from "./theme";

export const minWidth = Object.keys(theme.breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${theme.breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
