import alt from '../alt';

class SignupActions {
  constructor() {
    this.generateActions(
      'registerUserSuccess',
      'registerUserFail',
      'updateFirstName',
      'updateLastName',
      'updateMobile',
      'updateEmail',
      'updatePassword',
      'updateRepeatPassword',
      'invalidFirstName',
      'invalidLastName',
      'invalidMobile',
      'invalidEmail',
      'invalidPassword',
      'invalidRepeatPassword',
      'passwordNotMatched'
    );
  }

  registerUser(firstName, lastName, mobile, email, password, repeatPassword) {
    var formData = {
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      email: email,
      password: password,
      repeatPassword: repeatPassword
    };

    $.ajax({
      type: 'POST',
      url: '/ui/user',
      data: {
        'firstName': firstName,
        'lastName': lastName,
        'mobile': mobile,
        'email': email,
        'password': password
      }
    })
      .done(data => {
        if (data.status == 'Success') {
          toastr.success(data.result);
          this.actions.registerUserSuccess(data.status);
        } else if (data.status == 'Error') {
            if (data.message) {
                toastr.error(data.error);
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
              this.actions.registerUserFail(data.status);
            }
        }
      })
      .fail(jqXhr => {
        console.log("Error Data Is ::" + JSON.stringify(jqXhr, null, 2));
        alert("Error Data Is ::" + JSON.stringify(jqXhr, null, 2));
        toastr.error(jqXhr.responseJSON.message);
      });
    // $.ajax({
    // 	type: 'POST',			
    // 	url: '/ui/user',
    // 	data: {
    //     'firstName': firstName,
    //     'lastName': lastName,
    //     'mobile': mobile,
    //     'email': email,
    //     'password': password
    //   },
    // 	success: function(data) {
    //     if(data.status == 'Success') {
    //       toastr.success(data.result);
    //       this.actions.registerUserSuccess(data.status);
    //     }
    //     // console.log(data.result);	
    //     // console.log("Success Data Is ::" + JSON.stringify(data.result, null, 2));
    //     // console.log(data.result);			

    // 	},
    // 	error: function(data) {
    //     console.log("Error Data Is ::" + JSON.stringify(data, null, 2));
    //     alert("Error Data Is ::" + JSON.stringify(data, null, 2));
    //     console.log(data.error);			
    //     toastr.error(data.result);
    // 	}
    // });
  }
}

export default alt.createActions(SignupActions);