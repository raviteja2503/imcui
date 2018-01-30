import alt from '../alt';
import AddCharacterActions from '../actions/AddCharacterActions';

class AddCharacterStore {
  constructor() {
    this.bindActions(AddCharacterActions);
    this.name = '';
    this.email = '';
    this.mobile = '';
    this.query = '';
    this.nameHelpBlock = '';
    this.emailHelpBlock = '';
    this.mobileHelpBlock = '';
    this.queryHelpBlock = '';
    this.nameValidationState = '';
    this.emailValidationState = '';
    this.mobileValidationState = '';
    this.queryValidationState = '';
  }

  onAddCharacterSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddCharacterFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.nameHelpBlock = '';
  }

  onUpdateEmail(event) {
    this.email = event.target.value;
    this.emailValidationState = '';
    this.emailHelpBlock = '';
  }

  onUpdateMobile(event) {
    this.mobile = event.target.value;
    this.mobileValidationState = '';
    this.mobileHelpBlock = '';
  }

  onUpdateQuery(event) {
    this.query = event.target.value;
    this.queryValidationState = '';
    this.queryHelpBlock = '';
  }

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.nameHelpBlock = 'Please enter Your name.';
  }

  onInvalidEmail() {
    this.emailValidationState = 'has-error';
    this.emailHelpBlock = 'Please enter Your Email Address.';
  }

  onInvalidMobile() {
    this.mobileValidationState = 'has-error';
    this.mobileHelpBlock = 'Please enter Your Mobile Number';
  }

  onInvalidQuery() {
    this.queryValidationState = 'has-error';
    this.queryHelpBlock = 'Please enter Your Query.';
  }
}

export default alt.createStore(AddCharacterStore);