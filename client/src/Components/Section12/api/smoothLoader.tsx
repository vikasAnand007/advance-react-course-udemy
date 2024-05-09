import React, { ReactNode, useEffect, useState } from "react";

const Loader = () => <>Loading...</>;

const SmoothLoader = ({
  show = false,
  delay = 0,
  children,
}: {
  show: boolean;
  delay: number;
  children: ReactNode;
}) => {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  useEffect(() => {
    let timeout: any;
    if (!show) {
      setShowLoader(false);
      return;
    }
    if (delay === 0) {
      setShowLoader(true);
    } else {
      timeout = setTimeout(() => setShowLoader(true), delay);
    }
    return () => {
      clearInterval(timeout);
    };
  }, [show, delay]);
  return showLoader ? <Loader /> : children;
};

export default SmoothLoader;
