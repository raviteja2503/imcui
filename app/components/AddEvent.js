import React from 'react';

import AddEventStore from '../stores/AddEventStore';
import AddEventActions from '../actions/AddEventActions';
var utils = require('../../utils').utils;

class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddEventStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddEventStore.listen(this.onChange);
        const aa = utils.getStorage('isLoggedIn');
        this.state.isAuth = aa;
        if(this.state.isAuth) {
            console.log("Ath", this.state.isAuth);
        } else {
            console.log("Not Ath", this.state.isAuth);
            toastr.warning("First You Need To Login");
            this.props.history.push('/login');
        }
    }

    componentWillUnmount() {
        AddEventStore.unlisten(this.onChange);
    }

    onChange(state) {
        console.log(JSON.stringify(state, null, 2));
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var eventName = this.state.eventName.trim();
        var description = this.state.description.trim();
        var place = this.state.place.trim();
        var time = this.state.time.trim();
        var guests = this.state.guests.trim();

        if (!eventName) {
            AddEventActions.invalidEventName();
            this.refs.eventNameFeild.focus();
        }

        if (!description) {
            AddEventActions.invalidDescription();
            this.refs.descriptionField.focus();
        }

        if (!place) {
            AddEventActions.invalidPlace();
            this.refs.placeFeild.focus();
        }

        if (!time) {
            AddEventActions.invalidTime();
            this.refs.timeField.focus();
        }

        if (!guests) {
            AddEventActions.invalidGuests();
            this.refs.guestsField.focus();
        }

        if (eventName && description && place && time && guests) {
            console.log(eventName, description, place, time, guests);
            AddEventActions.addEvent(eventName, description, place, time, guests);
        }
    }
    render() {
        if(this.state.isAuth) {
            console.log("Ath", this.state.isAuth);
            return (
                <div className='content'>
                    <div className='row'>
                        <div className='col-sm-8 col-sm-offset-2' id='contactForm'>
                            <div className='panel panel-default'>
                                <div className='panel-heading'>Add Event</div>
                                <div className='panel-body'>
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <div className={'form-group ' + this.state.eventNameValidationState}>
                                            <label className='control-label'>Event Name:</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                ref='eventNameFeild'
                                                value={this.state.eventName}
                                                onChange={AddEventActions.updateEventName}
                                            />
                                            <span className='help-block'>{this.state.eventNameHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.descriptionValidationState}>
                                            <label className='control-label'>description:</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                ref='descriptionField'
                                                value={this.state.description}
                                                onChange={AddEventActions.updateDescription}
                                            />
                                            <span className='help-block'>{this.state.descriptionHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.placeValidationState}>
                                            <label className='control-label'>place:</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                ref='placeFeild'
                                                value={this.state.place}
                                                onChange={AddEventActions.updatePlace}
                                            />
                                            <span className='help-block'>{this.state.placeHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.timeValidationState}>
                                            <label className='control-label'>Time:</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                ref='timeField'
                                                value={this.state.time}
                                                onChange={AddEventActions.updateTime}
                                            />
                                            <span className='help-block'>{this.state.timeHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.guestsValidationState}>
                                            <label className='control-label'>Guests Of The Event:</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                ref='guestsField'
                                                value={this.state.guests}
                                                onChange={AddEventActions.updateGuests}
                                            />
                                            <span className='help-block'>{this.state.guestsHelpBlock}</span>
                                        </div>
                                        <div className="row text-center">
                                            <button type='submit' className='btn btn-primary'>Add Event</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            console.log("Not Ath", this.state.isAuth);
            return (
                <div>
                    <div id="loader-wrapper">
                        <div id="loader"></div>
    
                        <div className="loader-section section-left"></div>
                        <div className="loader-section section-right"></div>
    
                    </div>
                </div>
            );
        }
    }
}

export default AddEvent;