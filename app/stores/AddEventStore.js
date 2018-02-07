import alt from '../alt';
import AddEventActions from '../actions/AddEventActions';

class AddEventStore {
    constructor() {
        this.bindActions(AddEventActions);
        this.eventName = '';
        this.description = '';
        this.place = '';
        this.time = '';
        this.guests = '';
        this.eventNameHelpBlock = '';
        this.descriptionHelpBlock = '';
        this.placeHelpBlock = '';
        this.timeHelpBlock = '';
        this.guestsHelpBlock = '';
        this.eventNameValidationState = '';
        this.descriptionValidationState = '';
        this.placeValidationState = '';
        this.timeValidationState = '';
        this.guestsValidationState = '';
    }

    onAddEventSuccess(successMessage) {
        console.log(successMessage);
        this.guestsValidationState = 'has-success';
        this.guestsHelpBlock = successMessage;
    }

    onAddEventFail(errorMessage) {
        this.guestsValidationState = 'has-error';
        this.guestsHelpBlock = errorMessage;
    }

    onUpdateEventName(event) {
        this.eventName = event.target.value;
        this.eventNameValidationState = '';
        this.eventNameHelpBlock = '';
    }

    onUpdateDescription(event) {
        this.description = event.target.value;
        this.descriptionValidationState = '';
        this.descriptionHelpBlock = '';
    }

    onUpdatePlace(event) {
        this.place = event.target.value;
        this.placeValidationState = '';
        this.placeHelpBlock = '';
    }

    onUpdateTime(event) {
        this.time = event.target.value;
        this.timeValidationState = '';
        this.timeHelpBlock = '';
    }

    onUpdateGuests(event) {
        this.guests = event.target.value;
        this.guestsValidationState = '';
        this.guestsHelpBlock = '';
    }

    onInvalidEventName() {
        this.eventNameValidationState = 'has-error';
        this.eventNameHelpBlock = 'Please enter Event Name.';
    }

    onInvalidDescription() {
        this.descriptionValidationState = 'has-error';
        this.descriptionHelpBlock = 'Please Write Something about Event.';
    }

    onInvalidPlace() {
        this.placeValidationState = 'has-error';
        this.placeHelpBlock = 'Please enter Place of event';
    }

    onInvalidTime() {
        this.timeValidationState = 'has-error';
        this.timeHelpBlock = 'Please Choose Event Time.';
    }

    onInvalidGuests() {
        this.guestsValidationState = 'has-error';
        this.guestsHelpBlock = 'Please enter Post Type.';
    }
}

export default alt.createStore(AddEventStore);