import React, { ReactNode } from "react";

type ErrorBoundaryProps = {
  Fallback: ReactNode;
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error): void {
    console.log("Error: ", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.Fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
