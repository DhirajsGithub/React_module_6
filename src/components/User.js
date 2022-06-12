

import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
    // triggers when component id not render in the dom
  componentWillUnmount() {
    console.log('User will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
