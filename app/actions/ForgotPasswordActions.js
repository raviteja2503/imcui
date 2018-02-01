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
    console.log("Form Data::" + JSON.stringify(formData, null, 2)); 
    alert("Form Data::" + JSON.stringify(formData, null, 2));   

    $.ajax({
			type: 'PUT',			
			url: '/ui/user/forgotPassword',
			data: {
                'forgotEmail': forgotEmail
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
                toastr.error("aaaa");
			}
		});
  }
}

export default alt.createActions(ForgotPasswordActions);