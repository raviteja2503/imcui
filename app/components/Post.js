import React from 'react';
import PostStore from '../stores/PostStore';
import PostActions from '../actions/PostActions';
import Navbar from './Navbar';
var moment = require('moment');

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = PostStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    PostStore.listen(this.onChange);
    if(isNaN(this.props.params.id)) {
        toastr.error("Please search for a post with proper Id");
    } else {
        PostActions.getPost(this.props.params.id);
    }        
  }

  componentWillUnmount() {
    PostStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    // Fetch new charachter data when URL path changes
    if (prevProps.params.id !== this.props.params.id) {
      PostActions.getPost(this.props.params.id);
    }
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
      console.log("State", this.state);
    return (
        <div>
            <Navbar />
            <div className='content'>
                <div className='container'>
                    <div className='cover-img'>
                        <img src={"/img/home_bg.jpg"} alt="Post_bg" className='cover-img' />
                    </div>
                    <div className='row'>
                        <h2><strong>{this.state.postName}</strong></h2>
                        <h4 className='lead'>Author: <strong>{this.state.author}</strong></h4>
                        <h4 className='lead'>category: <strong>{this.state.category}</strong></h4>
                        <h4 className='lead'>postType: <strong>{this.state.postType}</strong></h4>
                        <p>{this.state.content}</p>                
                    </div>
                    <div className='profile-stats clearfix'>
                        <ul>
                            <li><span className='stats-number'>{moment(this.state.dateCreated).format("DD MMM YYYY")}</span></li>
                            <li><span className='stats-number'>{this.state.author}</span></li>
                            <li><span className='stats-number'>{this.state.postType}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Post;