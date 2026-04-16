import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    borderRadius: "xl",
    fontWeight: "semibold",
    transition: "all 0.2s cubic-bezier(.175,.885,.32,1.275)",
    _focusVisible: {
      outline: "none",
      boxShadow: "0 0 0 4px var(--chakra-colors-effects-brandFocus)",
    },
  },
  variants: {
    variant: {
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        _hover: {
          bg: "blue.700",
          transform: "translateY(-1px)",
          boxShadow: "0 10px 24px var(--chakra-colors-effects-brandGlow)",
        },
        _active: {
          transform: "translateY(0)",
        },
      },
      subtle: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        _hover: {
          bg: "colorPalette.muted",
        },
      },
      outline: {
        bg: "surface.panel",
        borderColor: "surface.border",
        color: "text.primary",
        _hover: {
          bg: "bg.subtle",
        },
      },
      ghost: {
        bg: "transparent",
        color: "text.secondary",
        _hover: {
          bg: "bg.muted",
          color: "text.primary",
        },
        _active: {
          bg: "bg.emphasized",
        },
      },
    },
    size: {
      sm: {
        h: "9",
        minW: "9",
        px: "3.5",
        textStyle: "sm",
        gap: "2",
      },
      md: {
        h: "10",
        minW: "10",
        px: "4",
        textStyle: "sm",
        gap: "2",
      },
      xl: {
        h: "14",
        minW: "14",
        px: "5",
        textStyle: "md",
      },
    },
  },
});
