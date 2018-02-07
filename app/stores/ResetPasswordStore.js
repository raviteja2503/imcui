import alt from '../alt';
import ResetPasswordActions from '../actions/ResetPasswordActions';

class ResetPasswordStore {
  constructor() {
    this.bindActions(ResetPasswordActions);
    this.resetToken = '';
    this.password = '';
    this.repeatPassword = '';
    this.resetTokenHelpBlock = '';
    this.passwordHelpBlock = '';
    this.repeatPasswordHelpBlock = '';
    this.resetTokenValidationState = '';
    this.passwordValidationState = '';
    this.repeatPasswordValidationState = '';
    this.isResetSuccess = 'false';
  }

  onResetPasswordSuccess(successState) {
    if(successState == 'Success') {
      this.isResetSuccess = 'true';     
    }
  }

  onResetPasswordFail(errorMessage) {
    if (errorMessage.message) {
      this.resetTokenValidationState = 'has-error';
      this.resetTokenHelpBlock = 'InValid Activation Code';
    } else {
      this.resetTokenValidationState = 'has-error';
      this.passwordValidationState = 'has-error';
      this.repeatPasswordValidationState = 'has-error';
      this.resetTokenHelpBlock = 'Required';
      this.passwordHelpBlock = 'Required';
      this.repeatPasswordHelpBlock = 'Required';
    }
    
  }

  onUpdateResetToken(event) {
    this.resetToken = event.target.value;
    this.resetTokenValidationState = '';
    this.resetTokenHelpBlock = '';
  }
  
  onUpdatePassword(event) {
    this.password = event.target.value;
    this.passwordValidationState = '';
    this.passwordHelpBlock = '';
  }

  onUpdateRepeatPassword(event) {
    this.repeatPassword = event.target.value;
    this.repeatPasswordValidationState = '';
    this.repeatPasswordHelpBlock = '';
  }

  onInvalidResetToken() {
    this.resetTokenValidationState = 'has-error';
    this.resetTokenHelpBlock = 'Please enter Your Password Reset Token.';
  }

  onInvalidPassword() {
    this.passwordValidationState = 'has-error';
    this.passwordHelpBlock = 'Please enter Your New Password.';
  }

  onInvalidRepeatPassword() {
    this.repeatPasswordValidationState = 'has-error';
    this.repeatPasswordHelpBlock = 'Please enter Your Password Again';
  }

  onPasswordNotMatch() {
    this.repeatPasswordValidationState = 'has-error';
    this.repeatPasswordHelpBlock = 'Password and Repeat Password Must Be Same';
  }
}

export default alt.createStore(ResetPasswordStore);