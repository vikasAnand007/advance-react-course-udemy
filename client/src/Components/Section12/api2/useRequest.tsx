import { useRef, useState } from "react";
import { didAbort } from "./api";

const useRequest = () => {
  const [response, setResponse] = useState<null | any>(null);
  const [state, setState] = useState<"IDLE" | "PENDING" | "SUCCESS" | "ERROR">(
    "IDLE"
  );
  const abortRef = useRef<any>({});
  const request = async (method: any) => {
    try {
      abortRef.current.abort?.();
      setState("PENDING");
      const result = await method({
        abort: (abort: any) => (abortRef.current.abort = abort),
      });
      setState("SUCCESS");
      setResponse(result.data);
    } catch (error) {
      setState("ERROR");
      if (didAbort(error)) {
        console.log("aborted!....");
      } else {
        console.log("normal error!....");
      }
    }
  };
  return {
    request,
    response,
    state,
  };
};

export default useRequest;
