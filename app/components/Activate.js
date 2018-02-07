import React from 'react';

import ActivateStore from '../stores/ActivateStore';
import ActivateActions from '../actions/ActivateActions';

class Activate extends React.Component {
    constructor(props) {
        super(props);
        this.state = ActivateStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ActivateStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ActivateStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
        if (this.state.isActivated == 'true') {
            this.props.history.push({
                pathname: '/login'
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        var activationCode = this.state.activationCode.trim();

        if (!activationCode) {
            ActivateActions.invalidActivationCode();
            this.refs.activationCodeField.focus();
        }

        if (activationCode) {
            ActivateActions.activateUser(activationCode);
        }
    }
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-outline">
                                    <form onSubmit={this.handleSubmit.bind(this)} className="form-signup">
                                        <h2 className="form-links text-center">Activate Your Account</h2>
                                        <div className={'form-group ' + this.state.activationCodeValidationState}>
                                            <label className='control-label'>Activation Code:</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='Activation Code'
                                                ref='activationCodeField'
                                                value={this.state.activationCode}
                                                onChange={ActivateActions.updateActivationCode}
                                            />
                                            <span className='help-block'>{this.state.activationCodeHelpBlock}</span>
                                        </div>
                                        <button type='submit' className='btn btn btn-primary btn-block'>Activate Account</button>
                                        <div className="row">
                                            <p className="form-links">Don't Have an Account?
                                                <a href="/signup">Sign Up</a>
                                            </p>
                                            <p className="form-links">
                                                <a href="/forgotpassword" onclick="fogotPassword()">Forgot Password?</a>
                                            </p>
                                        </div>
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

export default Activate;