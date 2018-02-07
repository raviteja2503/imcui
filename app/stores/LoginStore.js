import alt from '../alt';
import LoginActions from '../actions/LoginActions';
import { assign, contains } from 'underscore';

class LoginStore {
  constructor() {
    this.bindActions(LoginActions);
    this.email = '';
    this.password = '';
    this.emailHelpBlock = '';
    this.passwordHelpBlock = '';
    this.emailValidationState = '';
    this.passwordValidationState = '';
    this.btnValidationState = 'disabled';
  }

  onValidateUserSuccess(data) {
    assign(this, data[0]);
    console.log(this);
  }

  onValidateUserFail(errorMessage) {
    this.emailValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateEmail(event) {
    this.email = event.target.value;
    console.log("Email::", event.target.value);
    this.emailValidationState = '';
    this.emailHelpBlock = '';
  }

  onUpdatePassword(event) {
    this.password = event.target.value;
    this.passwordValidationState = '';
    this.passwordHelpBlock = '';
  }

  onInvalidEmail() {
    this.emailValidationState = 'has-error';
    this.emailHelpBlock = 'Please enter Your Email Address.';
  }

  onInvalidPassword() {
    this.passwordValidationState = 'has-error';
    this.passwordHelpBlock = 'Please enter Your Password';
  }
}

export default alt.createStore(LoginStore);