import {assign, contains} from 'underscore';
import alt from '../alt';
import PostActions from '../actions/PostActions';

class PostStore {
  constructor() {
    this.bindActions(PostActions);
    this.postId = 0;
    this.postName = '';
    this.author = '';
    this.category = '';
    this.content = '';
    this.postType = '';
    this.dateCreated = 0;
  }

  onGetPostSuccess(data) {
      console.log("Data::", data[0]);
    assign(this, data[0]);
    console.log("this", this[0]);
    this.post = data;
  }

  onGetPostFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(PostStore);