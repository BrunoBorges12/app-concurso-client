import { defineGlobalStyles } from "@chakra-ui/react";

export const globalCss = defineGlobalStyles({
  html: {
    colorScheme: "light",
    colorPalette: "blue",
  },
  body: {
    minHeight: "100vh",
    bg: "surface.canvas",
    color: "text.primary",
    backgroundAttachment: "fixed",
    backgroundImage: `
      radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.14), transparent),
      radial-gradient(ellipse 55% 55% at 88% 100%, rgba(37, 99, 235, 0.08), transparent),
      radial-gradient(ellipse 50% 50% at 12% 100%, rgba(125, 211, 252, 0.14), transparent)
    `,
  },
});
