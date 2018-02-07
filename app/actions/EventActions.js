import alt from '../alt';

class EventActions {
  constructor() {
    this.generateActions(
      'getEventSuccess',
      'getEventFail'
    );
  }

  getEvent(eventId) {
    $.ajax({ url: '/ui/event/' + eventId })
      .done((data) => {
        this.actions.getEventSuccess(data.result);
        console.log("Event Data Is:: " + " " + JSON.stringify(data.result, null, 2));
      })
      .fail((jqXhr) => {
        this.actions.getEventFail(jqXhr);
        console.log("Event Data Error Is:: " + " " + jqXhr);
      });
  }  
}

export default alt.createActions(EventActions);