import alt from '../alt';
import EventsActions from '../actions/EventsActions';

class EventsStore {
  constructor() {
    this.bindActions(EventsActions);
    this.events = [];
  }

  onGetEventsSuccess(data) {
    console.log("Get Posts Called and data assigned ::");
    this.events = data;
  }

  onGetEventsFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(EventsStore);