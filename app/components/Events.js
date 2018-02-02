import React from 'react';
import {Link} from 'react-router';

import EventsStore from '../stores/EventsStore';
import EventsActions from '../actions/EventsActions';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = EventsStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");          
        EventsStore.listen(this.onChange);
        console.log("Currnt State", this.state);
        EventsActions.getEvents();
    }
  
    componentWillUnmount() {
        EventsStore.unlisten(this.onChange);
    }
  
    onChange(state) {
        this.setState(state);
    }

    render() {
        var eventNodes = this.state.events.map((event, index) => {
            return (
                <div className="col-md-4" id="events" key={event.eventId}>
                    <div className="dashboard-card">
                        <div className="dashboard-card-title text-center">
                            <h3 className="Post-header"> {event.eventName} </h3>
                            <hr />
                        </div>
                        <div className="row col-lg-12">
                            <div className="row">
                                <p className="event-subtitle text-left"><b>At:</b>{event.place}</p>
                            </div>
                            <div className="row">
                                <p className="event-subtitle text-muted text-right"><b>On:</b>
                                    <time>{event.time}</time>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div className="dashboard-card-content">
                                <div className="row col-lg-12 text-justify">
                                    <p>{event.description.split(" ").splice(0, 10).join(" ")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="guests text-center">
                            <h4>Guests Of The Event</h4>
                            <img src={"/img/home_bg.jpg"} alt="Gustes Test Image" className="img-fluid rounded-circle" height="150px" width="150px" />
                            <br />
                            {event.guests}
                        </div>
                        <hr />
                        <div className="dashboard-card-footer text-center"> <button className="btn btn btn-outline-info">View Event</button></div>
                    </div>
                </div>            
            );
        });
        return (
            <div className='content'>
                <div className="container">
                    <section className="dashboard-content">
                        <div className="col-md-12">
                            <div className="row">
                                {eventNodes}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Events;