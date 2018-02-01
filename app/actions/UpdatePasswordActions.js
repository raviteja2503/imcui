import alt from '../alt';

class UpdatePasswordActions {
  constructor() {
    this.generateActions(
      'updatePasswordSuccess',
      'updatePasswordFail',
      'updateCurrentPassword',
      'updateNewPassword',
      'invalidCurrentPassword',
      'invalidNewPassword',
      'passwordNeedDIff'
    );
  }

  updatePassword(currentPassword, newPassword) {
    var formData = {
      currentPassword: currentPassword,
      newPassword: newPassword
    };
    console.log("Form Data::" + JSON.stringify(formData, null, 2)); 
    alert("Form Data::" + JSON.stringify(formData, null, 2));   

    $.ajax({
			type: 'PUT',			
			url: '/ui/user/updatePassword',
			data: {
                'currentPassword': currentPassword,
                'newPassword': newPassword
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

export default alt.createActions(UpdatePasswordActions);