import alt from '../alt';
import AddPostStore from '../stores/AddPostStore';

class AddPostActions {
  constructor() {
    this.generateActions(
      'addPostSuccess',
      'addPostFail',
      'updatePostName',
      'updateAuthor',
      'updateCategory',
      'updateContent',
      'updatePostType',
      'invalidPostName',
      'invalidAuthor',
      'invalidCategory',
      'invalidContent',
      'invalidPostType'
    );
  }

  AddPost(postName, author , category , content , postType) {
    var formData = {
      postName: postName,
      author: author,
      category: category,
      content: content,
      postType: postType
    };
    console.log("Form Data::" + JSON.stringify(formData, null, 2));

    $.ajax({
      type: 'POST',
      url: '/ui/post',
      data: {
        postName: postName,
        author: author,
        category: category,
        content: content,
        postType: postType,
        postOwner: localStorage.getItem("user")
      }
    })
      .done((data) => {
        if (data.status == 'Error') {
          if (data.result) {
            toastr.error(data.result);
            this.actions.addPostFail(data);
          } else if (data.error) {            
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
            this.actions.addPostFail(data);
          }
        } else if (data.status == 'Success') {
          var result = data.result;
          toastr.success(data.result);
          console.log(JSON.stringify(data,null,2));
          console.log(" State From Post Actions" ,this.state);
          this.actions.addPostSuccess(data.message);
        }        
      })
      .fail((jqXhr) => {
        console.log(jqXhr.responseJSON.message);
        this.actions.addPostFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddPostActions);