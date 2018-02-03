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

    $.ajax({
			type: 'PUT',			
			url: '/ui/user/forgotPassword',
			data: {
            'femail': forgotEmail
        }})
        .done(data => {
          if (data.status == 'Success') {
            console.log("Success Data Is ::" + JSON.stringify(data, null, 2));
            alert("Success Data Is ::" + JSON.stringify(data, null, 2));
            console.log(data.result);			  
            toastr.success(data.result);
            this.actions.activateUserSuccess(data.result);
          } else if (data.status == 'Error') {
            console.log("Success Data Is ::" + JSON.stringify(data, null, 2));
            var a = data.error;
            console.log("Success Data Is ::" + JSON.stringify(a.error, null, 2));
            toastr.error(data.error + " " + JSON.stringify(a.error));
          }
      })
      .fail(jqXhr => {
        console.log("Get Posts Called and Fail ::", jqXhr);
        this.actions.activateUserFail(jqXhr.responseJSON.result);
      });
  }
}

export default alt.createActions(ForgotPasswordActions);