import React from 'react';

import AddPostStore from '../stores/AddPostStore';
import AddPostActions from '../actions/AddPostActions';
import Navbar from './Navbar';
var utils = require('../../utils').utils;

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddPostStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddPostStore.listen(this.onChange);
        const aa = utils.getStorage('isLoggedIn');
        this.state.isAuth = aa;
        this.setState(this.state);
        if(!(this.state.isAuth)) {
            console.log("Not Ath", this.state.isAuth);
            toastr.warning("First You Need To Login"); 
            this.props.history.push('/login');
        }
    }

    componentWillUnmount() {
        AddPostStore.unlisten(this.onChange);
    }

    onChange(state) {
        console.log(JSON.stringify(state, null, 2));
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var postName    =  this.state.postName.trim();        
        var author    =  this.state.author.trim();
        var category  =  this.state.category.trim();
        var content   =  this.state.content.trim();
        var postType  =  this.state.postType.trim();

        if (!postName) {
            AddPostActions.invalidPostName();
            this.refs.postNameFeild.focus();
        }

        if (!author) {
            AddPostActions.invalidAuthor();
            this.refs.authorField.focus();
        }

        if (!category) {
            AddPostActions.invalidCategory();
            this.refs.categoryFeild.focus();
        }

        if (!content) {
            AddPostActions.invalidContent();
            this.refs.contentField.focus();
        }

        if(!postType) {
            AddPostActions.invalidPostType();
            this.refs.postTypeField.focus();
        }

        if (postName && author && category && content && postType) {
            console.log(postName, author , category , content , postType);
            AddPostActions.AddPost(postName, author , category , content , postType);
        }
    }
    render() {
        if(this.state.isAuth) {
            console.log("Ath", this.state.isAuth); 
            return(
                <div>
                    <Navbar />
                    <div className='content'>
                        <div className='row'>
                            <div className='col-sm-8 col-sm-offset-2' id='contactForm'>
                                <div className='panel panel-default'>
                                    <div className='panel-heading'>Add Post</div>
                                    <div className='panel-body'>
                                        <form onSubmit={this.handleSubmit.bind(this)}>
                                            <div className={'form-group ' + this.state.postNameValidationState}>
                                                <label className='control-label'>Post Name:</label>
                                                <input 
                                                    type='text' 
                                                    className='form-control' 
                                                    ref='postNameFeild' 
                                                    value={this.state.postName}
                                                    onChange={AddPostActions.updatePostName} 
                                                />
                                                <span className='help-block'>{this.state.postNameHelpBlock}</span>
                                            </div>
                                            <div className={'form-group ' + this.state.authorValidationState}>
                                                <label className='control-label'>Author:</label>
                                                <input 
                                                    type='text'
                                                    className='form-control'
                                                    ref='authorField'
                                                    value={this.state.author}
                                                    onChange={AddPostActions.updateAuthor}
                                                />
                                                <span className='help-block'>{this.state.authorHelpBlock}</span>
                                            </div>
                                            <div className={'form-group ' + this.state.categoryValidationState}>
                                                <label className='control-label'>Category:</label>
                                                <input 
                                                    type='text' 
                                                    className='form-control' 
                                                    ref='categoryFeild' 
                                                    value={this.state.category}
                                                    onChange={AddPostActions.updateCategory} 
                                                />
                                                <span className='help-block'>{this.state.categoryHelpBlock}</span>
                                            </div>
                                            <div className={'form-group ' + this.state.contentValidationState}>
                                                <label className='control-label'>Content:</label>
                                                <input 
                                                    type='text' 
                                                    className='form-control' 
                                                    ref='contentField' 
                                                    value={this.state.content}
                                                    onChange={AddPostActions.updateContent} 
                                                />
                                                <span className='help-block'>{this.state.contentHelpBlock}</span>
                                            </div>
                                            <div className={'form-group ' + this.state.postTypeValidationState}>
                                                <label className='control-label'>Post Type:</label>
                                                <input 
                                                    type='text' 
                                                    className='form-control' 
                                                    ref='postTypeField' 
                                                    value={this.state.postType}
                                                    onChange={AddPostActions.updatePostType} 
                                                />
                                                <span className='help-block'>{this.state.postTypeHelpBlock}</span>
                                            </div>
                                            <div className="row text-center">
                                                <button type='submit' className='btn btn-primary'>Add Post</button>
                                            </div>                                    
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
                    <Navbar />
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

export default AddPost;