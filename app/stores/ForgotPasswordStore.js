import alt from '../alt';
import ForgotPasswordActions from '../actions/ForgotPasswordActions';

class ForgotPasswordStore {
  constructor() {
    this.bindActions(ForgotPasswordActions);
    this.forgotEmail = '';
    this.forgotEmailHelpBlock = '';
    this.forgotEmailValidationState = '';
    this.isTokenSetSuccess = 'false';

  }

  onForgotPasswordSuccess(successState) {
    this.isTokenSetSuccess = 'true';
  }

  onForgotPasswordFail(errorMessage) {
    this.forgotEmailValidationState = 'has-error';
    this.forgotEmailHelpBlock = errorMessage;
  }

  onUpdateForgotEmail(event) {
    this.forgotEmail = event.target.value;
    this.forgotEmailValidationState = '';
    this.forgotEmailHelpBlock = '';
  }

  onInvalidForgotEmail() {
    this.forgotEmailValidationState = 'has-error';
    this.forgotEmailHelpBlock = 'Please enter Your Current Password.';
  }
}

export default alt.createStore(ForgotPasswordStore);