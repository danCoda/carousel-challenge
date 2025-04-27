import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  breakpoints: {
    hd: "1280px", // 720p
    fullHd: "1920px", // 1080p
  },
  maxWidths: {
    hd: "1200px",
    fullHd: "1800px",
  },
  colors: {
    background: "#282c34",
    text: "white",
    primary: "#007bff",
  },
  typography: {
    h1: {
      hd: "2rem",
      fullHd: "2.5rem",
    },
  },
};
