import React from 'react';
var utils = require('../../utils').utils;

class Login extends React.Component {

    componentDidMount() {
        localStorage.clear();
        toastr.success("Succefully Logged Out See You Again..!");
        this.props.history.pushState(null, 'login');        
        
    }

    render() {
        return (
            <div className="content">
                <div className='alert alert-success'>
                    Successfully logged Out, See You Again
                </div>
            </div>
        );
    }
}

export default Login;