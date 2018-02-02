import alt from '../alt';

class PostsActions {
  constructor() {
    this.generateActions(
      'getPostsSuccess',
      'getPostsFail'
    );
  }

  getPosts() {
    $.ajax({ url: '/ui/query/post' })
      .done(data => {
         this.actions.getPostsSuccess(data.result);
      })
      .fail(jqXhr => {
        console.log("Get Posts Called and Fail ::", jqXhr);
        this.actions.getPostsFail(jqXhr.responseJSON.result);
      });

    // $.ajax({
    //     type: 'GET',			
    //     url: '/ui/query/post',
    //     success: function(data) {
    //         // console.log("Success Data Is ::" + JSON.stringify(data, null, 2));
    //         // alert("Success Data Is ::" + JSON.stringify(data, null, 2));
    //         this.actions.getPostsSuccess(data.result);
    //         console.log("Data Is:", data.result);			
    //         toastr.success(data.result);
    //     },
    //     error: function(data) {
    //         console.log("Error Data Is ::" + JSON.stringify(data, null, 2));
    //         alert("Error Data Is ::" + JSON.stringify(data, null, 2));
    //         this.actions.getPostsFail(data);
    //         console.log(data.error);			
    //         toastr.error(data.result);
    //     }
    // });
  }  
}

export default alt.createActions(PostsActions);