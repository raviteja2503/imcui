import alt from '../alt';
import SignupActions from '../actions/SignupActions';

class signupStore {
  constructor() {
    this.bindActions(SignupActions);
    this.firstName = '';
    this.lastName = '';
    this.mobile = '';
    this.email = '';
    this.password = '';
    this.repeatPassword = '';
    this.firstNameHelpBlock = '';
    this.lastNameHelpBlock = '';
    this.mobileHelpBlock = '';
    this.emailHelpBlock = '';
    this.passwordHelpBlock = '';
    this.repeatPasswordHelpBlock = '';
    this.firstNameValidationState = '';
    this.lastNameValidationState = '';
    this.mobileValidationState = '';
    this.emailValidationState = '';
    this.passwordValidationState = '';
    this.repeatPasswordValidationState = '';
    this.isSignup = 'false';
  }

  onRegisterUserSuccess(successState) {
    if (successState == 'Success') {
      this.isSignup = 'true';
      this.emailValidationState = 'has-success';
      this.emailHelpBlock = successState;
    }
  }

  onRegisterUserFail(errorState) {
    if (errorState == 'Error') {
      this.emailValidationState = 'has-error';
      this.emailHelpBlock = errorState;
    }
  }

  onUpdateFirstName(event) {
    this.firstName = event.target.value;
    this.firstNameValidationState = '';
    this.firstNameHelpBlock = '';
  }

  onUpdateLastName(event) {
    this.lastName = event.target.value;
    this.lastNameValidationState = '';
    this.lastNameHelpBlock = '';
  }

  onUpdateMobile(event) {
    this.mobile = event.target.value;
    if (isNaN(this.mobile)) {
      this.mobileValidationState = 'has-error';
      this.mobileHelpBlock = 'Please enter Valid Mobile Number.';
    } else {
      this.mobileValidationState = '';
      this.mobileHelpBlock = '';
    }
  }

  onUpdateEmail(event) {
    this.email = event.target.value;
    this.emailValidationState = '';
    this.emailHelpBlock = '';
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

  onInvalidFirstName() {
    this.firstNameValidationState = 'has-error';
    this.firstNameHelpBlock = 'Please enter Your First Name.';
  }

  onInvalidLastName() {
    this.lastNameValidationState = 'has-error';
    this.lastNameHelpBlock = 'Please enter Your First Name.';
  }

  onInvalidMobile() {
    this.mobileValidationState = 'has-error';
    this.mobileHelpBlock = 'Please enter Your Mobile Number.';
  }

  onInvalidEmail() {
    this.emailValidationState = 'has-error';
    this.emailHelpBlock = 'Please enter Your Email Address.';
  }

  onInvalidPassword() {
    this.passwordValidationState = 'has-error';
    this.passwordHelpBlock = 'Please enter Your Password';
  }

  onInvalidRepeatPassword() {
    this.repeatPasswordValidationState = 'has-error';
    this.repeatPasswordHelpBlock = 'Please Repeat Your Password';
  }

  onPasswordNotMatched() {
    this.repeatPasswordValidationState = 'has-error';
    this.repeatPasswordHelpBlock = 'Your Passwors Not Matched';
  }
}

export default alt.createStore(signupStore);