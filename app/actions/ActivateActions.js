import alt from '../alt';

class LoginActions {
  constructor() {
    this.generateActions(
      'activateUserSuccess',
      'activateUserFail',
      'updateActivationCode',
      'invalidActivationCode'
    );
  }

  activateUser(activationCode) {
    var formData = {
      activationCode: activationCode
    };

    $.ajax({
      type: 'PUT',
      url: '/ui/user/activate',
      data: {
        'activationCode': activationCode
      }
    })
      .done(data => {
        if (data.status == 'Success') {
          toastr.success(data.result);
          this.actions.activateUserSuccess(data.result);
        } else if (data.status == 'Error') {
          toastr.error(data.result);
        }
      })
      .fail(jqXhr => {
        console.log("Get Posts Called and Fail ::", jqXhr);
        this.actions.activateUserFail(jqXhr.responseJSON.result);
      });
  }
}

export default alt.createActions(LoginActions);