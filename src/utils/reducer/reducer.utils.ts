import { AnyAction } from 'redux';

// Define the Matchable type, which represents an action creator function that can be matched against a Redux action object.
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
};

// Define the withMatcher function, which takes an action creator function 
// and returns a new function that includes a match function that can be used to check 
// if a Redux action object matches the action creator's type.
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  // Get the type property of the return type of the action creator function.
  const type = actionCreator().type;

  // Return a new function that includes the match function.
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      // Check if the action object's type property matches the action creator's type property.
      return action.type === type;
    },
  });
}
// Define the ActionWithPayload and Action types, which represent Redux action objects.
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// Define the createAction function, which is used to create a new Redux action object. It is overloaded to handle two cases: one where the action has a payload, and one where the action has no payload.
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  // Return a new action object with the given type and payload properties.
  return { type, payload };
}
