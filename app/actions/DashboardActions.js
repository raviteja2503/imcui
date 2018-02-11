import alt from '../alt';

class DashboardActions {
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
        if (jqXhr) {
          toastr.error("Error From Server Please try again");
        }
      });
  }
}

export default alt.createActions(DashboardActions);