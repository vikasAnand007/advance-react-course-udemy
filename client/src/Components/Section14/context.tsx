import { Dispatch, ReactNode, createContext, useContext } from "react";
import { data } from "./data";
import { useImmerReducer } from "use-immer";

// TYPES ----------------------------------------------
type StateType = any;
type ActionType = {
  type: "SELECT";
  payload: number;
};
type StateContextType = StateType;
type DispatchContextType = Dispatch<ActionType>;

// REDUCER AND INITIAL STATES --------------------------
export const initialState: StateType = data;
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "SELECT":
      state[action.payload].selected = state[action.payload].selected
        ? false
        : true;
      break;

    default:
      throw new Error("provide a valid action");
  }
}

// CONTEXT PROVIDER ---------------------------------------
const StateContext = createContext<StateContextType | null>(null);
const DispatchContext = createContext<DispatchContextType | null>(null);
const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

// GET CONTEXT VALUE --------------------------------------
export const useSelector = () => {
  const value = useContext(StateContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
};

// GET CONTEXT VALUE --------------------------------------
export const useDispatch = () => {
  const value = useContext(DispatchContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
};

export default ContextProvider;
