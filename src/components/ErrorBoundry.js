import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  // apply to class based components only 
//   this lifecycle method will be triggered  whenever one of the child components throws an error
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

// the idea behind error boundaries

// really is that you can ensure that

// not your entire application crashes if something goes wrong,

// but that instead you can catch those errors

// and then handle them in an elegant way,