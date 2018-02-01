import alt from '../alt';

class AddCharacterActions {
  constructor() {
    this.generateActions(
      'addCharacterSuccess',
      'addCharacterFail',
      'updateName',
      'updateEmail',
      'updateMobile',
      'updateQuery',
      'invalidName',
      'invalidEmail',
      'invalidMobile',
      'invalidQuery'
    );
  }

  addCharacter(name, email, mobile, query) {
    var formData = {
      name: name,
      email: email,
      mobile: mobile,
      query: query
    };
    console.log("Form Data::" + JSON.stringify(formData, null, 2));

    $.ajax({
      type: 'POST',
      url: '/ui/contact',
      data: { name: name, email: email, mobile: mobile, query: query }
    })
      .done((data) => {
        console.log(data.message);
        this.actions.addCharacterSuccess(data.message);
      })
      .fail((jqXhr) => {
        console.log(jqXhr.responseJSON.message);
        this.actions.addCharacterFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddCharacterActions);