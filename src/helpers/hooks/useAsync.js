import { useCallback, useReducer, useRef } from "react";
import useSafeDispatch from "./useSafeDispatch";

const defaultState = {
  data: null,
  status: "idle",
  error: null,
};

export default function useAsync(initialState) {
  const initialStateRef = useRef({ ...defaultState, ...initialState });
  // const [state, setState] = useState({...defaultState,...initialState});
  const [{ data, status, error }, setState] = useReducer((state, action) => {
    return { ...state, ...action };
  }, initialStateRef.current);

  const safeSetState = useSafeDispatch(setState);

  const run = useCallback(
    (promise) => {
      if (!promise || !promise.then) {
        throw new Error("run must be promise");
      }
      safeSetState({ status: "pending" });
      return promise.then(
        (data) => {
          safeSetState({ data, status: "resolved" });
        },
        (error) => {
          safeSetState({
            status: "reject",
            error: JSON.stringify(error.message),
          });
        }
      );
    },
    [safeSetState]
  );

  return {
    data,
    status,
    error,
    run,
  };
}
