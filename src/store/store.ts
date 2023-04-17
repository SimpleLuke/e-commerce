import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer,PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>

// const middleWares = [process.env.NODE_ENV === "development" ].filter(
//   Boolean
// );

type ExtendedPersistConfig = PersistConfig<RootState> & {
  blacklist: (keyof RootState)[];
};


const persistConfig:ExtendedPersistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware());

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
