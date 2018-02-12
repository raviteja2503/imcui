import React from 'react';

import AddCharacterStore from '../stores/AddCharacterStore';
import AddCharacterActions from '../actions/AddCharacterActions';
import Navbar from './Navbar';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddCharacterStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddCharacterStore.listen(this.onChange);
    }

    componentWillUnmount() {
        AddCharacterStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var name = this.state.name.trim();
        var email = this.state.email.trim();
        var mobile = this.state.mobile.trim();
        var query = this.state.query.trim();

        if (!name) {
            AddCharacterActions.invalidName();
            this.refs.nameTextField.focus();
        }
        if (!email) {
            AddCharacterActions.invalidEmail();
            this.refs.emailTextField.focus();
        }

        if (!mobile) {
            AddCharacterActions.invalidMobile();
            this.refs.mobileTextFeild.focus();
        }

        if (!query) {
            AddCharacterActions.invalidQuery();
            this.refs.queryTextField.focus();
        }

        if (name && email && mobile && query) {
            AddCharacterActions.addCharacter(name, email, mobile, query);
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className='content'>
                    <img src={"/img/home_bg.jpg"} alt='AboutUs_Banner' className='cover-img' />
                    <div className='row'>
                        <div className='col-sm-8 col-sm-offset-2' id='contactForm'>
                            <div className='panel panel-default'>
                                <div className='panel-heading'>Contact Us</div>
                                <div className='panel-body'>
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <div className={'form-group ' + this.state.nameValidationState}>
                                            <label className='control-label'>Name:</label>
                                            <input 
                                                type='text'
                                                className='form-control'
                                                ref='nameTextField'
                                                value={this.state.name}
                                                onChange={AddCharacterActions.updateName} autoFocus 
                                            />
                                            <span className='help-block'>{this.state.nameHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.emailValidationState}>
                                            <label className='control-label'>Email:</label>
                                            <input type='email' className='form-control' ref='emailTextField' value={this.state.email}
                                                onChange={AddCharacterActions.updateEmail} />
                                            <span className='help-block'>{this.state.emailHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.mobileValidationState}>
                                            <label className='control-label'>Mobile:</label>
                                            <input type='mobile' className='form-control' ref='mobileTextFeild' value={this.state.mobile}
                                                onChange={AddCharacterActions.updateMobile} />
                                            <span className='help-block'>{this.state.mobileHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.queryValidationState}>
                                            <label className='control-label'>Query:</label>
                                            <input type='text' className='form-control' ref='queryTextField' value={this.state.query}
                                                onChange={AddCharacterActions.updateQuery} />
                                            <span className='help-block'>{this.state.queryHelpBlock}</span>
                                        </div>
                                        <button type='submit' className='btn btn-primary'>Submit</button>
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

export default Contact;