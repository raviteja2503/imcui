import React from 'react';

import UpdatePasswordStore from '../stores/UpdatePasswordStore';
import UpdatePasswordActions from '../actions/UpdatePasswordActions';
var utils = require('../../utils').utils;

class UpdatePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = UpdatePasswordStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        UpdatePasswordStore.listen(this.onChange);
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
        UpdatePasswordStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var currentPassword = this.state.currentPassword.trim();
        var newPassword = this.state.newPassword.trim();
        

        if (!currentPassword) {
            UpdatePasswordActions.invalidCurrentPassword();
            this.refs.currentPasswordField.focus();
        }

        if (!newPassword) {
            UpdatePasswordActions.invalidNewPassword();
            this.refs.newPasswordField.focus();
        }
        
        if(newPassword == currentPassword) {
            UpdatePasswordActions.passwordNeedDIff();
            this.refs.newPasswordField.focus();
        }
        else if (currentPassword && newPassword) {
            console.log(currentPassword, newPassword);
            UpdatePasswordActions.updatePassword(currentPassword, newPassword);
        }
    }
    render() {
        if(this.state.isAuth) {
            console.log("Ath", this.state.isAuth);
            return(
                <div className="content">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="form-outline">
                                        <form onSubmit={this.handleSubmit.bind(this)} className="form-signup">
                                            <h2 className="form-links text-center">Update password</h2>
                                            <div className={'form-group ' + this.state.currenPasswordValidationState}>
                                                <label className='control-label'>Current Password:</label>
                                                <input 
                                                    type='password'
                                                    className='form-control'
                                                    ref='currentPasswordField'
                                                    value={this.state.currentPassword}
                                                    onChange={UpdatePasswordActions.updateCurrentPassword} 
                                                />
                                                <span className='help-block'>{this.state.currentPasswordHelpBlock}</span>
                                            </div>
                                            <div className={'form-group ' + this.state.newPasswordValidationState}>
                                                <label className='control-label'>New Password:</label>
                                                <input 
                                                    type='password'
                                                    className='form-control'
                                                    ref='newPasswordField'
                                                    value={this.state.newPassword}
                                                    onChange={UpdatePasswordActions.updateNewPassword}
                                                />
                                                <span className='help-block'>{this.state.newPasswordHelpBlock}</span>
                                            </div>                                        
                                            <button type='submit' className='btn btn-special btn-block'>Update Password</button>
                                        </form>
                                    </div>
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

export default UpdatePassword;