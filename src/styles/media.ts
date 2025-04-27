import { DefaultTheme } from "styled-components";

export const media = {
  hd: `@media (min-width: ${({ theme }: { theme: DefaultTheme }) =>
    theme.breakpoints.hd})`,
  fullHd: `@media (min-width: ${({ theme }: { theme: DefaultTheme }) =>
    theme.breakpoints.fullHd})`,
};