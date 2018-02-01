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
    alert("Form Data::" + JSON.stringify(formData, null, 2));   

    $.ajax({
			type: 'POST',			
			url: '/ui/user/login',
			data: {
        'email': email,
        'password': password
      },
			success: function(data) {
        console.log("Success Data Is ::" + JSON.stringify(data, null, 2));
        alert("Success Data Is ::" + JSON.stringify(data, null, 2));
        console.log(data.result);			
        toastr.success(data.result);
			},
			error: function(data) {
        console.log("Error Data Is ::" + JSON.stringify(data, null, 2));
        alert("Error Data Is ::" + JSON.stringify(data, null, 2));
        console.log(data.error);			
        toastr.error(data.result);
			}
		});
  }
}

export default alt.createActions(LoginActions);