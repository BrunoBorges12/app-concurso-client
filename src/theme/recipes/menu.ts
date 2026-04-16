import { defineSlotRecipe } from "@chakra-ui/react";

export const menuSlotRecipe = defineSlotRecipe({
  slots: [
    "content",
    "item",
    "itemText",
    "itemIndicator",
    "itemGroupLabel",
    "indicator",
    "itemCommand",
    "separator",
    "arrow",
    "arrowTip",
  ],
  base: {
    content: {
      outline: 0,
      bg: "bg.panel",
      boxShadow: "lg",
      color: "fg",
      borderWidth: "1px",
      borderColor: "border",
      borderRadius: "xl",
      maxHeight: "var(--available-height)",
      overflow: "hidden",
      overflowY: "auto",
    },
    item: {
      textDecoration: "none",
      color: "fg",
      userSelect: "none",
      borderRadius: "lg",
      width: "100%",
      display: "flex",
      cursor: "menuitem",
      alignItems: "center",
      textAlign: "start",
      position: "relative",
      flex: "0 0 auto",
      outline: 0,
      _highlighted: {
        bg: "bg.muted",
        color: "fg",
      },
      _disabled: {
        layerStyle: "disabled",
      },
      "&[data-type]": {
        ps: "8",
      },
    },
    itemText: {
      flex: "1",
    },
    itemIndicator: {
      position: "absolute",
      insetStart: "2",
      transform: "translateY(-50%)",
      top: "50%",
    },
    itemGroupLabel: {
      px: "2",
      py: "1.5",
      fontWeight: "semibold",
      textStyle: "sm",
      color: "text.secondary",
    },
    indicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
    },
    itemCommand: {
      opacity: "0.6",
      textStyle: "xs",
      ms: "auto",
      ps: "4",
      letterSpacing: "widest",
      fontFamily: "inherit",
    },
    separator: {
      height: "1px",
      bg: "border",
      my: "1",
      mx: "-1",
    },
    arrow: {
      "--arrow-size": "sizes.3",
      "--arrow-background": "colors.bg.panel",
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderLeftWidth: "1px",
      borderColor: "border",
    },
  },
  variants: {
    size: {
      md: {
        content: {
          minW: "8rem",
          padding: "1.5",
          scrollPadding: "1.5",
        },
        item: {
          gap: "2",
          textStyle: "sm",
          py: "1.5",
          px: "2",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
