// Define an enum of action types related to categories.
export enum CATEGORIES_ACTION_TYPES {
  SET_CATEGORIES_MAP = "categories/SET_CATEGORIES_MAP",
}

// Define a type for a single category item.
export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

// Define a type for a map of categories, where each key is a category name and the value is an array of category items.
export type CategoriesMap = {
  [key:string]:CategoryItem[]
}