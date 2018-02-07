import alt from '../alt';
import AddEventStore from '../stores/AddEventStore';

class AddEventActions {
    constructor() {
        this.generateActions(
            'addEventSuccess',
            'addEventFail',
            'updateEventName',
            'updateDescription',
            'updatePlace',
            'updateTime',
            'updateGuests',
            'invalidEventName',
            'invalidDescription',
            'invalidPlace',
            'invalidTime',
            'invalidGuests'
        );
    }

    addEvent(eventName, description, place, time, guests) {
        var formData = {
            eventName: eventName,
            description: description,
            place: place,
            time: time,
            guests: guests
        };
        console.log("Form Data::" + JSON.stringify(formData, null, 2));

        var target = document.getElementById('app');
        var spinner = new Spinner(opts).spin(target);

        $.blockUI({
            message: null,
            css: { backgroundColor: '#fff', color: '#fff' }
        });
        $.ajax({
            type: 'POST',
            url: '/ui/event',
            data: {
                eventName: eventName,
                description: description,
                place: place,
                time: time,
                guests: guests,
                userId: localStorage.getItem("user")
            }
        })
            .done((data) => {
                spinner.stop();
                $.unblockUI();
                if (data.status == 'Error') {
                    if (data.result) {
                        toastr.error(data.result);
                        this.actions.addEventFail(data);
                    } else if (data.error) {
                        var errorList = data.error;
                        var errors = [];
                        for (var i = 0; i < errorList.length; i++) {
                            var error = '';
                            error = errorList[i].error;
                            errors.push(error);
                        }
                        var finalErrors = errors.map((e, index) => {
                            toastr.error(e);
                        });
                        this.actions.addEventFail(data);
                    }
                } else if (data.status == 'Success') {
                    var result = data.result;
                    toastr.success(data.result);
                    console.log(JSON.stringify(data, null, 2));
                    console.log(" State From Post Actions", this.state);
                    this.actions.addEventSuccess(data.message);
                }
            })
            .fail((jqXhr) => {
                spinner.stop();
                $.unblockUI();
                console.log(jqXhr.responseJSON.message);
                this.actions.addEventFail(jqXhr.responseJSON.message);
            });

        // var iotReq = new IotReq();
        // iotReq.post({
        //     url: '/ui/event',
        //     data: {
        //         eventName: eventName,
        //         description: description,
        //         place: place,
        //         time: time,
        //         guests: guests,
        //         auserId: localStorage.getItem("user")
        //     }
        // }, function (response) {
        //     if (response.status == 'Success') {
        //         console.log("Success", " " + JSON.stringify(response.result), "success");
        //         if (response.status == 'Success') {
        //             var result = response.result;
        //             toastr.success(response.result);
        //             console.log(JSON.stringify(response, null, 2));
        //             console.log(" State From Post Actions", this.state);
        //             this.actions.addEventSuccess.bind(response.message);
        //         }
        //     } else {
        //         console.log("Error", " " + JSON.stringify(response.error), "error");
        //         if (response.status == 'Error') {
        //             if (response.result) {
        //                 toastr.error(response.result);
        //                 this.actions.addEventFail.bind(response);
        //             } else if (response.error) {
        //                 var errorList = response.error;
        //                 var errors = [];
        //                 for (var i = 0; i < errorList.length; i++) {
        //                     var error = '';
        //                     error = errorList[i].error;
        //                     errors.push(error);
        //                 }
        //                 var finalErrors = errors.map((e, index) => {
        //                     toastr.error(e);
        //                 });
        //                 this.actions.addEventFail.bind(response);
        //             }
        //         }
        //     }
        // });
    }
}

export default alt.createActions(AddEventActions);