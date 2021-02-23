import React, { Component } from "react";
import { Typography } from "@material-ui/core";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <Typography variant="h4">Something went wrong</Typography>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
