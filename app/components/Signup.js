import React  from 'react';
import { Route, Redirect } from 'react-router';
import { browserHistory } from 'react-router';

import {withRouter} from 'react-router';


import SignupStore from '../stores/SignupStore';
import SignupActions from '../actions/SignupActions';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = SignupStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SignupStore.listen(this.onChange);
    }

    componentWillUnmount() {
        SignupStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
        console.log(this.state.isSignup);
        if(this.state.isSignup == 'true') {            
            console.log("User SIgned Up Succesfully");
            this.props.history.push({
                pathname: '/activate',
                state: {userId: this.state.userId}  
            });
        } else {
            console.log("Nope Not Signed In");
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        var firstName = this.state.firstName.trim();
        var lastName = this.state.lastName.trim();
        var mobile = this.state.mobile.trim();
        var email = this.state.email.trim();
        var password = this.state.password.trim();
        var repeatPassword = this.state.repeatPassword.trim();
        

        if (!firstName) {
            SignupActions.invalidFirstName();
            this.refs.firstNameTextField.focus();
        }       
        
        if (!lastName) {
            SignupActions.invalidLastName();
            this.refs.lastNameTextField.focus();
        }

        if (!mobile) {
            SignupActions.invalidMobile();
            this.refs.mobileField.focus();
        }

        if (!email) {
            SignupActions.invalidEmail();
            this.refs.emailField.focus();
        }

        if (!password) {
            SignupActions.invalidPassword();
            this.refs.passwordField.focus();
        }

        if (! (password == repeatPassword)) {
            SignupActions.invalidRepeatPassword();
            this.refs.repeatPasswordField.focus();
        }

        if (!repeatPassword) {
            SignupActions.passwordNotMatched();
            this.refs.repeatPasswordField.focus();
        }
        else if (firstName && lastName && mobile && email && password && repeatPassword) {
            // console.log(firstName, lastName, mobile, email, password, repeatPassword);
            SignupActions.registerUser(firstName, lastName, mobile, email, password, repeatPassword);
        }
    }    

    render() {
        return(            
            <div className="content signup-bg">
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-outline">
                                    <form onSubmit={this.handleSubmit.bind(this)} className="form-signup">
                                        <h2 className="form-links text-center">SignUp</h2>
                                        <div className={'form-group ' + this.state.firstNameValidationState}>
                                            <label className='control-label'>First Name:</label>
                                            <input 
                                                type='text'
                                                className='form-control'
                                                ref='firstNameTextField'
                                                value={this.state.firstName}
                                                onChange={SignupActions.updateFirstName} autoFocus 
                                            />
                                            <span className='help-block'>{this.state.firstNameHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.lastNameValidationState}>
                                            <label className='control-label'>Last Name:</label>
                                            <input 
                                                type='text'
                                                className='form-control'
                                                ref='lastNameTextField'
                                                value={this.state.lastName}
                                                onChange={SignupActions.updateLastName} 
                                            />
                                            <span className='help-block'>{this.state.lastNameHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.mobileValidationState}>
                                            <label className='control-label'>Mobile:</label>
                                            <input 
                                                type='mobile'
                                                className='form-control'
                                                ref='mobileField'
                                                value={this.state.mobile}
                                                onChange={SignupActions.updateMobile} />
                                            <span className='help-block'>{this.state.mobileHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.emailValidationState}>
                                            <label className='control-label'>Email:</label>
                                            <input 
                                                type='text'
                                                className='form-control'
                                                ref='emailField'
                                                value={this.state.email}
                                                onChange={SignupActions.updateEmail} 
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
                                                onChange={SignupActions.updatePassword}
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
                                                onChange={SignupActions.updateRepeatPassword} 
                                            />
                                            <span className='help-block'>{this.state.repeatPasswordHelpBlock}</span>
                                        </div>
                                        <button type='submit' className='btn btn btn-primary btn-block'>Sign In</button>
                                    {    /* <div className="row">
                                            <p className="form-links">Don't Have an Account?
                                                <a href="/signup">Sign Up</a>
                                            </p>
                                            <p className="form-links">
                                                <a href="#" onclick="fogotPassword()">Forgot Password?</a>
                                            </p>
        </div> */ }
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

export default Signup;