import alt from '../alt';
import UpdatePasswordActions from '../actions/UpdatePasswordActions';

class UpdatePasswordStore {
  constructor() {
    this.bindActions(UpdatePasswordActions);
    this.currentPassword = '';
    this.newPassword = '';
    this.currentPasswordHelpBlock = '';
    this.newPasswordHelpBlock = '';
    this.currenPasswordValidationState = '';
    this.newPasswordValidationState = '';
  }

  onUpdatePasswordSuccess(successMessage) {
    this.newPasswordValidationState = 'has-success';
    this.currenPasswordValidationState = 'has-success';
    this.newPasswordHelpBlock = successMessage;
  }

  onUpdatePasswordFail(errorMessage) {
    this.newPasswordValidationState = 'has-error';
    this.currenPasswordValidationState = 'has-error';
    this.newPasswordHelpBlock = errorMessage;
  }

  onUpdateCurrentPassword(event) {
    this.currentPassword = event.target.value;
    this.currenPasswordValidationState = '';
    this.currentPasswordHelpBlock = '';
  }

  onUpdateNewPassword(event) {
    this.newPassword = event.target.value;
    this.newPasswordValidationState = '';
    this.newPasswordHelpBlock = '';
  }

  onInvalidCurrentPassword() {
    this.currenPasswordValidationState = 'has-error';
    this.currentPasswordHelpBlock = 'Please enter Your Current Password.';
  }

  onInvalidNewPassword() {
    this.newPasswordValidationState = 'has-error';
    this.newPasswordHelpBlock = 'Please enter Your New Password';
  }

  onPasswordNeedDIff() {
    this.newPasswordValidationState = 'has-error';
    this.newPasswordHelpBlock = 'New Password must different from Current Password';
  }
}

export default alt.createStore(UpdatePasswordStore);