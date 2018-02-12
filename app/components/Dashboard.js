import React from 'react';
import { Link } from 'react-router';

import DashboardStore from '../stores/DashboardStore';
import DashboardActions from '../actions/DashboardActions';
import Navbar from './Navbar';

var utils = require('../../utils').utils;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = DashboardStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(state) {
        // DashboardStore.listen(this.onChange);
        const aa = utils.getStorage('isLoggedIn');        
        this.state.isAuth = aa;
        this.setState(this.state);
        if (aa) {
            DashboardStore.listen(this.onChange);
            DashboardActions.getPosts();
            console.log("User Is Authorized to see Dashboard");
        } else {
            toastr.warning("First You Need To Login");
            this.props.history.push({
                pathname: '/login',
                state: { path: this.props.route.path }
            });
        }
    }

    componentWillUnmount() {
        DashboardStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
        console.log("On Change Called");
        console.log(this.state);
    }

    render() {
        if (this.state.isAuth) {
            // const userDetails = this.props.location.state.loginState;                
            var postNodes = this.state.posts.map((post, index) => {
                return (
                    <Link to={'/posts/' + post.postId} key={post.postId} style={{ textDecoration: 'none' }}>
                        <div className="post-card">
                            <div className="postTitle">
                                {post.postName}
                            </div>
                            <div className="postcontent">
                                {post.content.split(" ").splice(0, 10).join(" ")}
                            </div>
                        </div>
                    </Link>
                );
            });
            return (
                <div>
                    <Navbar history={this.props.history} />
                    <div className="content">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="profile-card">
                                    <div className="dashboard-card-title text-center">
                                        <div className="profile-pic">
                                            <img src={"/img/user.png"} className="img-fluid rounded-circle" height="130px" width="130px" />
                                        </div>
                                    </div>
                                    <div className="dashboard-body text-center">
                                        <h3 className="userName">{/*{utils.getFullName({ firstName: userDetails.firstName, lastName: userDetails.lastName })} */} AAA</h3>
                                        <h5>Role</h5>
                                    </div>
                                    <hr />
                                    <div className="event-footer text-center">
                                        <button className="btn-o">View Profile</button>
                                        <button className="btn btn btn-outline-info event-footer">Update Profile</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="dashboard-container">
                                    <div className="post-card">
                                        <div className="postTitle">
                                            Test Post
                                        </div>
                                        <div className="postcontent">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                    </div>
                                    {postNodes}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Navbar history={this.props.history} />
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

export default Dashboard;