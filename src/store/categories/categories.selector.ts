import { RootState } from "../store";
import { CategoriesMap } from "./categories.types";
export const selectCategoriesMap = (state:RootState):CategoriesMap => state.categories.categoriesMap;
