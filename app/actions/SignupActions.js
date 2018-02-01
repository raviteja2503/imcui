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
    console.log("Form Data::" + JSON.stringify(formData, null, 2)); 
    alert("Form Data::" + JSON.stringify(formData, null, 2));   

    $.ajax({
			type: 'POST',			
			url: '/ui/user',
			data: {
        'firstName': firstName,
        'lastName': lastName,
        'mobile': mobile,
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

export default alt.createActions(SignupActions);