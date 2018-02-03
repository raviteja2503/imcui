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
    console.log("Form Data::" + JSON.stringify(formData, null, 2)); 

    $.ajax({
			type: 'POST',			
			url: '/ui/user/login',
			data: {
        'email': email,
        'password': password
      }})
        .done(data => {
          this.actions.validateUserSuccess(data.result);
          console.log("Success Data Is ::" + JSON.stringify(data, null, 2));
          if (data.status == 'Error') {
            toastr.error(data.result);
          } else if (data.status == 'Success') {
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

    // $.ajax({
		// 	type: 'POST',			
		// 	url: '/ui/user/login',
		// 	data: {
    //     'email': email,
    //     'password': password
    //   },
		// 	success: function(data) {
    //     if (data.status == "Error") {
    //       console.log("Error Data Is ::" + JSON.stringify(data, null, 2));
    //       console.log(data.error);
    //       toastr.error(data.error[0].error);
    //     } else {
    //       console.log("Success Data Is ::" + JSON.stringify(data, null, 2));
    //       this.actions.validateUserSuccess(data.result);
    //       console.log(data.result);			
    //       toastr.success(data.result);
    //     }        
		// 	},
		// 	error: function(data) {
    //     console.log("Error Data Is ::" + JSON.stringify(data, null, 2));
    //     console.log(data.error);			
    //     toastr.error(data.result);
		// 	}
		// });
  }
}

export default alt.createActions(LoginActions);