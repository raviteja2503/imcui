import {assign, contains} from 'underscore';
import alt from '../alt';
import EventActions from '../actions/EventActions';

class EventStore {
  constructor() {
    this.bindActions(EventActions);
    this.eventId = 0;
    this.eventName = '';
    this.description = '';
    this.place = '';
    this.time = '';
    this.guests = '';
    this.dateCreated = 0;
  }

  onGetEventSuccess(data) {
      console.log("Data::", data[0]);
    assign(this, data[0]);
    console.log("this", this[0]);
    this.event = data;
  }

  onGetEventFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(EventStore);