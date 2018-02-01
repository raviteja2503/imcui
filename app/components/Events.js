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
                <div className="row" id="events" key={event.eventId}>
                    <div className="col-md-4">
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
                </div>            
            );
        });
        var event = {
            'eventName': 'Test Event',
            'time': '02-Feb-2018',
            'place': 'Test place',
            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            'guests': 'Test Guests'
        };
        return (
            <div className='content'>
                <div className="container">
                    <section className="dashboard-content">
                        <div className="col-md-12">
                            <div>
                                {eventNodes}
                            </div>
                            <div className="row" id="events">
                                <div className="col-md-4">
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
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Events;