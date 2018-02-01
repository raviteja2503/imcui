import React  from 'react';

import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = LoginStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        LoginStore.listen(this.onChange);
    }

    componentWillUnmount() {
        LoginStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var email = this.state.email.trim();
        var password = this.state.password.trim();
        

        if (!email) {
            LoginActions.invalidEmail();
            this.refs.emailField.focus();
        }

        if (!password) {
            LoginActions.invalidPassword();
            this.refs.passwordField.focus();
        }       

        if (email && password) {
            console.log(email, password);
            LoginActions.validateUser(email, password);
        }
    }
    render() {
        return(
            <div className="content">
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-outline">
                                    <form onSubmit={this.handleSubmit.bind(this)} className="form-signup">
                                        <h2 className="form-links text-center">SignIn</h2>
                                        <div className={'form-group ' + this.state.emailValidationState}>
                                            <label className='control-label'>Email:</label>
                                            <input 
                                                type='text'
                                                className='form-control'
                                                ref='emailField'
                                                value={this.state.email}
                                                onChange={LoginActions.updateEmail} 
                                            />
                                            <span className='help-block'>{this.state.emailHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.passwordValidationState}>
                                            <label className='control-label'>Password:</label>
                                            <input 
                                                type='password'
                                                className='form-control'
                                                ref='passwordField'
                                                value={this.state.password}
                                                onChange={LoginActions.updatePassword}
                                            />
                                            <span className='help-block'>{this.state.passwordHelpBlock}</span>
                                        </div>                                        
                                        <button type='submit' className='btn btn btn-primary btn-block'>Sign In</button>
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
{/*                         <div className="col-md-6">
                                <div className="col-md-6">
                                    <div className="form-outline">
                                        <form className="form-signin">
                                            <div className="g-signin2" data-onsuccess="onSignIn"></div>
                
                                            <h2 className="form-links text-center">Or</h2>
                                            <br />
                
                                            <input className="form-control" id="country_code" />
                                            <input className="form-control" placeholder="phone number" id="phone_number"/>
                                            <button className="btn btn btn-primary btn-block">Login via Mobile Number</button>
                
                                        </form>
                                    </div>
                                </div>
        </div>  */}
                        </div>
                    </div>       
                </div>
            </div>
        );
    }
}

export default Login;