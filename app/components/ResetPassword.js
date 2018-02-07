import React from 'react';

import ResetPasswordStore from '../stores/ResetPasswordStore';
import ResetPasswordActions from '../actions/ResetPasswordActions';

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = ResetPasswordStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ResetPasswordStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ResetPasswordStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
        if (this.state.isResetSuccess == 'true') {
            this.props.history.push({
                pathname: '/login',
                state: { userId: this.state.userId }
            });
        } else {
            console.log("Nope Not Reseted");
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        var resetToken = this.state.resetToken.trim();
        var password = this.state.password.trim();
        var repeatPassword = this.state.repeatPassword.trim();


        if (!resetToken) {
            ResetPasswordActions.invalidResetToken();
            this.refs.resetTokenFeild.focus();
        }

        if (!password) {
            ResetPasswordActions.invalidPassword();
            this.refs.passwordField.focus();
        }

        if (!repeatPassword) {
            ResetPasswordActions.invalidRepeatPassword();
            this.refs.repeatPasswordField.focus();
        }

        if (password != repeatPassword) {
            ResetPasswordActions.passwordNotMatch();
            this.refs.repeatPasswordField.focus();
        }
        else if (resetToken && password && repeatPassword) {
            ResetPasswordActions.resetPassword(resetToken, password, repeatPassword);
        }
    }
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="form-outline">
                                    <form onSubmit={this.handleSubmit.bind(this)} className="form-signup">
                                        <h2 className="form-links text-center">Reset password</h2>
                                        <div className={'form-group ' + this.state.resetTokenValidationState}>
                                            <label className='control-label'>Password Reset Token:</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                ref='resetTokenFeild'
                                                value={this.state.resetToken}
                                                onChange={ResetPasswordActions.updateResetToken}
                                            />
                                            <span className='help-block'>{this.state.resetTokenHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.passwordValidationState}>
                                            <label className='control-label'>Password:</label>
                                            <input
                                                type='password'
                                                className='form-control'
                                                ref='passwordField'
                                                value={this.state.password}
                                                onChange={ResetPasswordActions.updatePassword}
                                            />
                                            <span className='help-block'>{this.state.passwordHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.repeatPasswordValidationState}>
                                            <label className='control-label'>Repeat Password:</label>
                                            <input
                                                type='password'
                                                className='form-control'
                                                ref='repeatPasswordField'
                                                value={this.state.repeatPassword}
                                                onChange={ResetPasswordActions.updateRepeatPassword}
                                            />
                                            <span className='help-block'>{this.state.repeatPasswordHelpBlock}</span>
                                        </div>
                                        <button type='submit' className='btn btn-special btn-block'>Reset Password</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetPassword;