import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  palette: {
    colorWhite: {
      main: "#fff",
      dark: "#fafafa",
    },
    colorBlack: {
      main: " #2b2b2b",
    },
    colorGray: {
      main: "#a2a2a2",
      dark: "#737373",
      light: "#e7e7e7",
    },
    colorHeader: {
      main: "#252f35",
      light: "#2f4858",
    },
    colorGreen: {
      light: "#29b7b7",
      main: "#009b9b",
      dark: "#017575",
    },
    colorSuccess: {
      main: "#1dc6a7",
      light: "#d7f1f1",
    },
    colorFailure: {
      main: " #df3554",
      light: "#ffbac1",
    },
    colorRed: {
      main: "#d84b4b",
    },
    colorLogo: {
      main: "#ffb82a",
    },
  },
  direction: "rtl",
});
