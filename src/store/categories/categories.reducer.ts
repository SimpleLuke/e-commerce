import { AnyAction } from "redux";
import { CategoriesMap } from "./categories.types";

import { setCategoriesMap } from "./categories.action";

export type CategoriesState = {
  readonly categoriesMap:CategoriesMap
}

export const CATEGORIES_INITIAL_STATE:CategoriesState = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
):CategoriesState => {
  if(setCategoriesMap.match(action)){
    return { ...state, categoriesMap: action.payload };
  }

  return state
};
