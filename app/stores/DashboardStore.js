import { assign, contains } from 'underscore';
import alt from '../alt';
import DashboardActions from '../actions/DashboardActions';

class DashboardStore {
  constructor() {
    this.bindActions(DashboardActions);
    this.posts = [];
  }

  onGetPostsSuccess(data) {
    console.log("Get Posts Called and data assigned ::", data);
    this.posts = data;    
  }

  onGetPostsFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(DashboardStore);