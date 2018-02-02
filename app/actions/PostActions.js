import alt from '../alt';

class PostActions {
  constructor() {
    this.generateActions(
      'getPostSuccess',
      'getPostFail'
    );
  }

  getPost(postId) {
    $.ajax({ url: '/ui/post/' + postId })
      .done((data) => {
        this.actions.getPostSuccess(data.result);
        console.log("Post Data Is:: " + " " + JSON.stringify(data.result, null, 2));
      })
      .fail((jqXhr) => {
        this.actions.getPostFail(jqXhr);
        console.log("Post Data Error Is:: " + " " + jqXhr);
      });
  }  
}

export default alt.createActions(PostActions);