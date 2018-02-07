import alt from '../alt';
import ActivateActions from '../actions/ActivateActions';
import { assign, contains } from 'underscore';

class ActivateStore {
  constructor() {
    this.bindActions(ActivateActions);
    this.activationCode = '';
    this.activationCodeHelpBlock = '';
    this.activationCodeValidationState = '';
    this.isActivated = 'false';
  }

  onActivateUserSuccess(data) {
    this.isActivated = 'true';
  }

  onActivateUserFail(errorMessage) {
    this.activationCodeValidationState = 'has-error';
    this.activationCodeHelpBlock = errorMessage;
  }

  onUpdateActivationCode(event) {
    this.activationCode = event.target.value;
    this.activationCodeValidationState = '';
    this.activationCodeHelpBlock = '';
  }

  onInvalidActivationCode() {
    this.activationCodeValidationState = 'has-error';
    this.activationCodeHelpBlock = 'Please enter Your Email Address.';
  }
}

export default alt.createStore(ActivateStore);