import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { globalCss } from "./global-css";
import { buttonRecipe } from "./recipes/button";
import { fieldSlotRecipe } from "./recipes/field";
import { inputRecipe } from "./recipes/input";
import { menuSlotRecipe } from "./recipes/menu";
import { semanticTokens } from "./semantic-tokens";
import { colors } from "./tokens/colors";

const config = defineConfig({
  globalCss,
  theme: {
    tokens: {
      colors,
    },
    semanticTokens,
    recipes: {
      button: buttonRecipe,
      input: inputRecipe,
    },
    slotRecipes: {
      field: fieldSlotRecipe,
      menu: menuSlotRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);
