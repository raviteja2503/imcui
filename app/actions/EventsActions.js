import alt from '../alt';

class EventsActions {
  constructor() {
    this.generateActions(
      'getEventsSuccess',
      'getEventsFail'
    );
  }

  getEvents() {
    console.log("Get Events Called");
    // $.ajax({ url: '/ui/query/post' })
    //   .done(data => {
    //     console.log("Get Posts Called and Success ::");
    //     this.actions.getPostsSuccess(data);
    //   })
    //   .fail(jqXhr => {
    //     onsole.log("Get Posts Called and Fail ::", jqXhr);
    //     this.actions.getPostsFail(jqXhr.responseJSON.result);
    //   });

    $.ajax({
        type: 'GET',			
        url: '/ui/query/event',
        success: function(data) {
            console.log("Success Data Is ::" + JSON.stringify(data, null, 2));
            alert("Success Data Is ::" + JSON.stringify(data, null, 2));
            console.log(data.result);			
            toastr.success(data.result);
        },
        error: function(data) {
            console.log("Error Data Is ::" + JSON.stringify(data, null, 2));
            alert("Error Data Is ::" + JSON.stringify(data, null, 2));
            console.log(data.error);			
            toastr.error(data.result);
        }
    });
  }  
}

export default alt.createActions(EventsActions);