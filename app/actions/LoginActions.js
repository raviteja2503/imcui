import alt from '../alt';

var utils = require('../../utils').utils;

class LoginActions {
  constructor() {
    this.generateActions(
      'validateUserSuccess',
      'validateUserFail',
      'updateEmail',
      'updatePassword',
      'invalidEmail',
      'invalidPassword'
    );
  }

  validateUser(email, password) {
    var formData = {
      email: email,
      password: password
    };
    var target = document.getElementById('app');
    var spinner = new Spinner(opts).spin(target);

    $.blockUI({
      message: null,
      css: { backgroundColor: '#fff', color: '#fff' }
    });

    $.ajax({
      type: 'POST',
      url: '/ui/user/login',
      data: {
        'email': email,
        'password': password
      }
    })
      .done(data => {
        spinner.stop();
        $.unblockUI();
        if (data.status == 'Error') {
          if (data.result) {
            toastr.error(data.result);
          } else if (data.error) {
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
          }
        } else if (data.status == 'Success') {
          var result = data.result;
          utils.formatStorage('userId', 210);
          localStorage.setItem("user", 210);
          this.actions.validateUserSuccess(data.result);
          toastr.success("Successfully Logged In");
        }
      })
      .fail(jqXhr => {
        spinner.stop();
        $.unblockUI();
        if (jqXhr) {
          toastr.error("Error From Server Please try again");
          this.actions.validateUserFail(jqXhr.responseJSON);
        }
      });
  }
}

export default alt.createActions(LoginActions);