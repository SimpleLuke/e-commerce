import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase";
import { setCurrentUser } from "./user.action";

export type UserState = {
  readonly currentUser:UserData | null;
}

export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action:AnyAction) => {
  if(setCurrentUser.match(action)){
    return { ...state, currentUser: action.payload };
  }

  return state;
};
