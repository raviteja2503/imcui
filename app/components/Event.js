import React from 'react';
import EventStore from '../stores/EventStore';
import EventActions from '../actions/EventActions';
var moment = require('moment');

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = EventStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        EventStore.listen(this.onChange);
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        $('[data-toggle="popover"]').popover({
            placement: 'right',
            html: true,
            content: '<div class="media"><ul class="list-inline text-center"> <li class="list-inline-item">  <div class="fb-share-button" data-href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.css" data-layout="button" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmaxcdn.bootstrapcdn.com%2Fbootstrap%2F4.0.0%2Fcss%2Fbootstrap.css&amp;src=sdkpreparse">Share</a></div> </li><li class="list-inline-item"> <a href="#"> <span class="fa-stack fa-lg"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-instagram fa-stack-1x fa-inverse"></i> </span> </a> </li><li class="list-inline-item"> <a href="#"> <span class="fa-stack fa-lg"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-twitter fa-stack-1x fa-inverse"></i> </span> </a> </li><li class="list-inline-item"> <a href="#"> <span class="fa-stack fa-lg"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-github fa-stack-1x fa-inverse"></i> </span> </a> </li></ul></div>'
        });

        $('body').on('click', function (e) {
            if ($(e.target).data('toggle') !== 'popover'
                && $(e.target).parents('.popover.in').length === 0) {
                $('[data-toggle="popover"]').popover('hide');
            }
        });

        if (isNaN(this.props.params.id)) {
            toastr.error("Please search for a Event with proper Id");
        } else {
            EventActions.getEvent(this.props.params.id);
        }
    }

    componentWillUnmount() {
        EventStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
        // Fetch new charachter data when URL path changes
        if (prevProps.params.id !== this.props.params.id) {
            EventActions.getEvent(this.props.params.id);
        }
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        console.log("State", this.state);
        return (
            <div className='content'>
                <section className="dashboard-content">
                    <div className="dashboard-card">
                        <div className="dashboard-card-title text-center">
                            <h3 className="Post-header"> {this.state.eventName} </h3>
                            <hr />
                        </div>
                        <div className="row col-lg-12">
                            <div className="col-lg-6">
                                <p className="event-subtitle text-left"><b>At:</b>{this.state.place}</p>
                            </div>
                            <div className="col-lg-6">
                                <p className="event-subtitle text-muted text-right"><b>On:</b>
                                    <time>{this.state.time}</time>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div className="dashboard-card-content">
                                <div className="row col-lg-12 text-justify">
                                    <p> {this.state.description} </p>
                                </div>
                            </div>
                        </div>
                        <div className="guests text-center">
                            <h4>Guests Of The Event</h4>
                            <img src={"/img/user.png"} className="img-fluid rounded-circle" height="150px" width="150px" />
                            <img src={"/img/user.png"} className="img-fluid rounded-circle" height="150px" width="150px" />
                        </div>
                        <hr />
                        <div className="event-footer text-center">
                            <button className="btn btn btn-outline-info event-footer">I'm Interested</button>
                            <button type="button" className="btn btn-outline-info" data-toggle="popover">Share To A Friend</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Event;