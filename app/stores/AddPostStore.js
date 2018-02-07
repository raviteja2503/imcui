import alt from '../alt';
import AddPostActions from '../actions/AddPostActions';

class AddPostStore {
  constructor() {
    this.bindActions(AddPostActions);
    this.postName = '';
    this.author  = '';
    this.category  = '';
    this.content  = '';
    this.postType  = '';
    this.postNameHelpBlock = '';    
    this.authorHelpBlock = '';
    this.categoryHelpBlock = '';
    this.contentHelpBlock = '';
    this.postTypeHelpBlock = '';
    this.postNameValidationState = '';
    this.authorValidationState = '';
    this.categoryValidationState = '';
    this.contentValidationState = '';
    this.postTypeValidationState = '';
  }

  onAddPostSuccess(successMessage) {
    console.log(successMessage);
    this.postTypeValidationState = 'has-success';
    this.postTypeHelpBlock = successMessage;
  }

  onAddPostFail(errorMessage) {
    this.postTypeValidationState = 'has-error';
    this.postTypeHelpBlock = errorMessage;
  }

  onUpdatePostName(event) {
    this.postName = event.target.value;
    this.postNameValidationState = '';
    this.postNameHelpBlock = '';
  }   

  onUpdateAuthor(event) {
    this.author = event.target.value;
    this.authorValidationState = '';
    this.authorHelpBlock = '';
  }

  onUpdateCategory(event) {
    this.category = event.target.value;
    this.categoryValidationState = '';
    this.categoryHelpBlock = '';
  }

  onUpdateContent(event) {
    this.content = event.target.value;
    this.contentValidationState = '';
    this.contentHelpBlock = '';
  }

  onUpdatePostType(event) {
    this.postType = event.target.value;
    this.postTypeValidationState = '';
    this.postTypeHelpBlock = '';
  }

  onInvalidPostName() {
    this.postNameValidationState = 'has-error';
    this.postNameHelpBlock = 'Please enter Post Title.';
  }

  onInvalidAuthor() {
    this.authorValidationState = 'has-error';
    this.authorHelpBlock = 'Please enter Author Name.';
  }

  onInvalidCategory() {
    this.categoryValidationState = 'has-error';
    this.categoryHelpBlock = 'Please enter Category';
  }

  onInvalidContent() {
    this.contentValidationState = 'has-error';
    this.contentHelpBlock = 'Please enter Your Post Content.';
  }

  onInvalidPostType() {
    this.postTypeValidationState = 'has-error';
    this.postTypeHelpBlock = 'Please enter Post Type.';
  }
}

export default alt.createStore(AddPostStore);