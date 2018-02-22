import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import './styles.css';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  //SignIn Methods

  //If user does not have an account - this takes them to SignUp form
  createAnAccount = () => {
    <Link to={'/signup'} />;
    alert('i work');
  };

  //Setting state of user email and passworld on each keystroke
  handleEmailAndPasswordState = event => {
    event.preventDefault();
    this.setState({
      email: this.emailInput.value,
      password: this.passwordInput.value
    });
  };

  //Checking DB if the user and password match - if no user exists or their password is inncorect, throw an error
  handleSignInSubmit = event => {
    event.preventDefault();
    Meteor.loginWithPassword(this.state.email, this.state.password, err => {
      this.setState({ error: `${err.reason}, please try again!` });
    });
    Meteor.loggingIn();
  };

  render() {
    return (
      <div className="Login-Container">
        <div className="Login-Box">
          <h3> MayDu </h3>
          <p className="TagLine">
            {' '}
            Where students connect with fellow classmates{' '}
          </p>
          <form onSubmit={this.handleSignInSubmit}>
            <input
              onChange={this.handleEmailAndPasswordState}
              ref={input => (this.emailInput = input)}
              type="email"
              placeholder="Email Address"
              className="Email-Input"
            />
            <input
              onChange={this.handleEmailAndPasswordState}
              ref={input => (this.passwordInput = input)}
              type="password"
              placeholder="Password"
              className="Password-Input"
            />
            <p> {this.state.error} </p>
            <button type="submit" className="Sign-In-Submit">
              {' '}
              Sign In{' '}
            </button>
          </form>
          <div className="Create-Account-SignIn">
            <p> Don't have an account? </p>
            <button
              onClick={this.createAnAccount}
              type="submit"
              className="Create-Account-Submit"
            >
              {' '}
              Create An Account{' '}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
