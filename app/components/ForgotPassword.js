import React from 'react';

import ForgotPasswordStore from '../stores/ForgotPasswordStore';
import ForgotPasswordActions from '../actions/ForgotPasswordActions';

class Forgotpassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = ForgotPasswordStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ForgotPasswordStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ForgotPasswordStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var forgotEmail = this.state.forgotEmail.trim();        

        if (!forgotEmail) {
            ForgotPasswordActions.invalidForgotEmail();
            this.refs.forgotEmailField.focus();
        }
        if (forgotEmail) {
            console.log(forgotEmail);
            ForgotPasswordActions.forgotPassword(forgotEmail);
        }
    }
    render() {
        return(
            <div className="content">
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="form-outline">
                                    <form onSubmit={this.handleSubmit.bind(this)} className="form-signup">
                                        <h2 className="form-links text-center">Forgot password</h2>
                                        <div className={'form-group ' + this.state.forgotEmailValidationState}>
                                            <label className='control-label'>Email:</label>
                                            <input 
                                                type='email'
                                                placeholder='Email Address'
                                                className='form-control'
                                                ref='forgotEmailField'
                                                value={this.state.forgotEmail}
                                                onChange={ForgotPasswordActions.updateForgotEmail} 
                                            />
                                            <span className='help-block'>{this.state.forgotEmailHelpBlock}</span>
                                        </div>                                                                               
                                        <button type='submit' className='btn btn-special btn-block'>Forgot Password</button>
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

export default Forgotpassword;