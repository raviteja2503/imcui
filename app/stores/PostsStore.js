import alt from '../alt';
import PostsActions from '../actions/PostsActions';

class PostsStore {
  constructor() {
    this.bindActions(PostsActions);
    this.posts = [];
  }

  onGetPostsSuccess(data) {
    console.log("Get Posts Called and data assigned ::");
    this.posts = data;
  }

  onGetPostsFail(errorMessage) {
    toastr.error(errorMessage);
  }

  onVoteFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(PostsStore);