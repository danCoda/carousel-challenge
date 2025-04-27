import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      hd: string;
      fullHd: string;
    };
    maxWidths: {
      hd: string;
      fullHd: string;
    };
    colors: {
      background: string;
      text: string;
      primary: string;
    };
    typography: {
      h1: {
        hd: string;
        fullHd: string;
      };
    };
  }
}
