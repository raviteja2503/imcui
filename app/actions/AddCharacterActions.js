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
        name : name,
        email: email,
        mobile : mobile,
        query : query
    };
    console.log("Form Data::" + JSON.stringify(formData, null, 2));

    $.ajax({
      type: 'POST',
      url: '/api/contact',
      data: { name: name, email: email, mobile: mobile, query: query }
    })
      .done((data) => {
        this.actions.addCharacterSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addCharacterFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddCharacterActions);