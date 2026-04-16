import { defineSlotRecipe } from "@chakra-ui/react";

export const fieldSlotRecipe = defineSlotRecipe({
  slots: ["root", "label", "errorText", "helperText", "requiredIndicator"],
  base: {
    requiredIndicator: {
      color: "fg.error",
      lineHeight: "1",
    },
    root: {
      display: "flex",
      width: "100%",
      position: "relative",
      gap: "1.5",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    label: {
      display: "flex",
      alignItems: "center",
      textAlign: "start",
      color: "text.secondary",
      fontSize: "13px",
      fontWeight: "semibold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      gap: "1",
      userSelect: "none",
    },
    errorText: {
      display: "inline-flex",
      alignItems: "center",
      fontWeight: "medium",
      gap: "1",
      color: "fg.error",
      textStyle: "xs",
    },
    helperText: {
      color: "text.tertiary",
      textStyle: "xs",
    },
  },
});
