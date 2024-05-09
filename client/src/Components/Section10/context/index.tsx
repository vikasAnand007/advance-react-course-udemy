import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

// TYPES ----------------------------------------------
type StateType = {
  count: number;
};
type ActionType = {
  type: "INCREMENT" | "DECREMENT";
};
type StateContextType = {
  state: StateType;
};
type DispatchContextType = Dispatch<ActionType>;

// REDUCER AND INITIAL STATES --------------------------
export const initialState: StateType = {
  count: 0,
};
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("provide a valid action");
  }
}

// CONTEXT PROVIDER ---------------------------------------
const StateContext = createContext<StateContextType | null>(null);
const DispatchContext = createContext<DispatchContextType | null>(null);
const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={{ state }}>
        {children}
      </StateContext.Provider>
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
