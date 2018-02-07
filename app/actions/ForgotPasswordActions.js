import alt from '../alt';

class ForgotPasswordActions {
  constructor() {
    this.generateActions(
      'forgotPasswordSuccess',
      'forgotPasswordFail',
      'updateForgotEmail',
      'invalidForgotEmail'
    );
  }

  forgotPassword(forgotEmail) {
    var formData = {
      forgotEmail: forgotEmail
    };

    $.ajax({
      type: 'PUT',
      url: '/ui/user/forgotPassword',
      data: {
        'email': forgotEmail
      }
    })
      .done(data => {
        if (data.status == 'Success') {
          toastr.success(data.result);
          this.actions.forgotPasswordSuccess(data.result);
        } else if (data.status == 'Error') {
          if (data.message) {
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
            this.actions.forgotPasswordFail(data.status);
          }
        }
      })
      .fail(jqXhr => {
        console.log("Get Posts Called and Fail ::", jqXhr);
        this.actions.activateUserFail(jqXhr.responseJSON.result);
      });
  }
}

export default alt.createActions(ForgotPasswordActions);