import { extendTheme } from "@chakra-ui/react";

const colors = {
  lightViolet: "#8D5CE5",
  violet: "#371687",
  blue: "#1B004C",
  pink: "#FF2498",
};

const fonts = {
  body: "Roboto, sans-serif",
  heading: "Roboto, sans-serif",
};

const theme = extendTheme({
  fonts,
  colors,
});

export default theme;
