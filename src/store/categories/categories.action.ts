import { CATEGORIES_ACTION_TYPES,CategoriesMap } from "./categories.types";
import { withMatcher } from "../../utils/reducer/reducer.utils";
import { createAction,ActionWithPayload } from "../../utils/reducer/reducer.utils";

// Define a type for the action that sets the categories map.
export type SetCategoriesMap = ActionWithPayload<CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, CategoriesMap>;

// Define the action creator function that sets the categories map.
export const setCategoriesMap = withMatcher((categoriesMap: CategoriesMap):SetCategoriesMap =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap));