export const semanticTokens = {
  colors: {
    bg: {
      DEFAULT: { value: "{colors.surface.50}" },
      subtle: { value: "{colors.surface.100}" },
      muted: { value: "{colors.surface.200}" },
      emphasized: { value: "{colors.surface.300}" },
      panel: { value: "{colors.surface.50}" },
    },
    fg: {
      DEFAULT: { value: "{colors.surface.900}" },
      muted: { value: "{colors.surface.700}" },
      subtle: { value: "{colors.surface.600}" },
    },
    border: {
      DEFAULT: { value: "{colors.surface.300}" },
      muted: { value: "{colors.surface.200}" },
      subtle: { value: "{colors.surface.100}" },
      emphasized: { value: "{colors.surface.400}" },
    },
    brand: {
      solid: { value: "{colors.brand.600}" },
      contrast: { value: "{colors.white}" },
      fg: { value: "{colors.brand.700}" },
      muted: { value: "{colors.brand.100}" },
      subtle: { value: "{colors.brand.200}" },
      emphasized: { value: "{colors.brand.300}" },
      focusRing: { value: "{colors.brand.400}" },
      border: { value: "{colors.brand.300}" },
    },
    surface: {
      canvas: { value: "#f7f8fa" },
      panel: { value: "{colors.white}" },
      elevated: { value: "{colors.surface.100}" },
      header: { value: "rgba(255, 255, 255, 0.88)" },
      subtle: { value: "rgba(148, 163, 184, 0.10)" },
      muted: { value: "rgba(148, 163, 184, 0.16)" },
      input: { value: "{colors.white}" },
      inputHover: { value: "{colors.surface.100}" },
      border: { value: "{colors.surface.300}" },
      borderStrong: { value: "{colors.surface.400}" },
    },
    effects: {
      brandGlow: { value: "rgba(37, 99, 235, 0.22)" },
      brandFocus: { value: "rgba(37, 99, 235, 0.14)" },
      brandUnderline: { value: "rgba(37, 99, 235, 0.28)" },
    },
    text: {
      primary: { value: "{colors.surface.900}" },
      secondary: { value: "{colors.surface.700}" },
      tertiary: { value: "{colors.surface.600}" },
    },
  },
};
