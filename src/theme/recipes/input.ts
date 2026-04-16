import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  base: {
    width: "100%",
    minWidth: "0",
    outline: "0",
    position: "relative",
    appearance: "none",
    textAlign: "start",
    borderRadius: "xl",
    color: "text.primary",
    bg: "surface.input",
    _placeholder: {
      color: "text.tertiary",
    },
    _disabled: {
      layerStyle: "disabled",
    },
    height: "var(--input-height)",
    minW: "var(--input-height)",
    "--focus-color": "colors.colorPalette.focusRing",
    "--error-color": "colors.border.error",
    _invalid: {
      borderColor: "var(--error-color)",
      boxShadow: "0 0 0 1px var(--error-color)",
    },
  },
  variants: {
    size: {
      md: {
        textStyle: "sm",
        px: "3",
        "--input-height": "sizes.10",
      },
      xl: {
        textStyle: "md",
        px: "4",
        "--input-height": "sizes.14",
      },
    },
    variant: {
      outline: {
        borderWidth: "1px",
        borderColor: "surface.border",
        bg: "surface.input",
        _hover: {
          borderColor: "blue.400",
          bg: "surface.inputHover",
        },
        _focusVisible: {
          borderColor: "blue.400",
          outline: "none",
          boxShadow: "0 0 0 4px var(--chakra-colors-effects-brandFocus)",
        },
      },
      subtle: {
        borderWidth: "1px",
        borderColor: "surface.border",
        bg: "bg.subtle",
        _hover: {
          borderColor: "blue.400",
          bg: "bg.muted",
        },
        _focusVisible: {
          borderColor: "blue.400",
          outline: "none",
          boxShadow: "0 0 0 4px var(--chakra-colors-effects-brandFocus)",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});
