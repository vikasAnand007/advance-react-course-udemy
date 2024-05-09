import { useState } from "react";

const useRequest = () => {
  const [response, setResponse] = useState<null | any>(null);
  const [state, setState] = useState<"IDLE" | "PENDING" | "SUCCESS" | "ERROR">(
    "IDLE"
  );
  const [error, setError] = useState<null | any>(null);
  const request = async (method: any) => {
    try {
      setState("PENDING");
      const result = await method();
      setState("SUCCESS");
      setResponse(result.data);
    } catch (error) {
      setState("ERROR");
      setError(error);
    }
  };
  return {
    request,
    response,
    state,
    error,
  };
};

export default useRequest;
