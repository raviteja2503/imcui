import alt from '../alt';

class ResetPasswordActions {
  constructor() {
    this.generateActions(
      'resetPasswordSuccess',
      'resetPasswordFail',
      'updateResetToken',
      'updatePassword',
      'updateRepeatPassword',
      'invalidResetToken',
      'invalidPassword',
      'invalidRepeatPassword',
      'passwordNotMatch'
    );
  }

  resetPassword(resetToken, password, repeatPassword) {
    var formData = {
      resetToken: resetToken,
      password: password,
      repeatPassword: repeatPassword
    };
    $.ajax({
      type: 'POST',
      url: '/ui/user/resetPassword',
      data: {
        'passwordResetToken': resetToken,
        'password': password,
        'confirmPassword': repeatPassword
      }
    })
      .done(data => {
        if (data.status == 'Success') {
          toastr.success(data.result);
          this.actions.resetPasswordSuccess(data.status);
        } else if (data.status == 'Error') {
          if (data.message) {
            this.actions.resetPasswordFail(data);
            toastr.error(data.result);
          } else {
            var errorList = data.error;
            var errors = [];
            for (var i = 0; i < errorList.length; i++) {
              var error = '';
              error = errorList[i].error;
              errors.push(error);
            }
            var finalErrors = errors.map((e, index) => {
              toastr.error(e);
            });
            this.actions.resetPasswordFail(data.status);
          }
        }
      })
      .fail(jqXhr => {
        console.log(data.error);
        toastr.error(data.result);
      });
  }
}

export default alt.createActions(ResetPasswordActions);