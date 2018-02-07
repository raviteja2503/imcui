import alt from '../alt';

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

    $.ajax({
      type: 'POST',
      url: '/ui/user/login',
      data: {
        'email': email,
        'password': password
      }
    })
      .done(data => {
        console.log("Data From Server Is::" + " "+JSON.stringify(data, null, 2));
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
          localStorage.setItem("user", result[0].userId);
          this.actions.validateUserSuccess(data.result);          
          console.log("user Id", result[0].userId);
          toastr.success(data.result);
        }
        // if(this.state.userId) {
        //   console.log("User Signed In");
        // }
      })
      .fail(jqXhr => {
        console.log("Get Posts Called and Fail ::", jqXhr);
        this.actions.validateUserFail(jqXhr.responseJSON.result);
      });
  }
}

export default alt.createActions(LoginActions);