import "styled-components";

declare module "styled-components" {
  export type DefaultTheme = {
    breakpoints: {
      hd: string; // 720p
      fullHd: string; // 1080p
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
  };
}
