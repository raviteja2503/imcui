import React from 'react';
import {Link} from 'react-router';

import PostsStore from '../stores/PostsStore';
import PostsActions from '../actions/PostsActions';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = PostsStore.getState();
        this.onChange = this.onChange.bind(this);
      }
    
      componentDidMount() {
          console.log("componentDidMount");          
        PostsStore.listen(this.onChange);
        console.log("Currnt State", this.state);
        PostsActions.getPosts();
      }
    
      componentWillUnmount() {
        PostsStore.unlisten(this.onChange);
      }
    
      onChange(state) {
        this.setState(state);
      }    
      
    render() {
        var postNodes = this.state.posts.map((post, index) => {
            return (
            <div key={post.postId} className={index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5'}>
                <div className='thumbnail fadeInUp animated'>
                    <div className='caption text-center'>
                        <ul className='list-inline'>
                            <li><strong>PostName:</strong> {post.postName}</li>
                            <li><strong>Post Content:</strong> {post.content}</li>
                            <li><strong>author:</strong> {post.author}</li>
                            <li><strong>category:</strong> {post.category}</li>
                            <li><strong>postType:</strong> {post.postType} </li>
                        </ul>
                        <h4>
                        <Link to={'/posts/' + post.postId}><strong>{post.postName}</strong></Link>
                        </h4>
                    </div>
                </div>
            </div>
            );
        });
    
        return (
            <div className='content'>
                <div className='container'>
                    <h3 className='text-center'>Latest Posts Are</h3>
                    <div className='row'>
                        {postNodes}
                    </div>
                    <div className='row'>
                        <div className='col-xs-6 col-sm-6 col-md-5 col-md-offset-1'>
                            <div className='thumbnail fadeInUp animated'>
                                <div className='caption text-center'>
                                    <ul className='list-inline'>
                                    <li><strong>PostName:</strong> Test Post</li>
                                    <li><strong>Post Content:</strong> Make sure you have the appropriate dependencies installed and configured for your platform. You can find installation instructions for the dependencies for some common platforms in this page. </li>
                                    <li><strong>author:</strong> Ravi</li>
                                    <li><strong>category:</strong> IOT </li>
                                    <li><strong>postType:</strong> Test </li>
                                    </ul>
                                    <h4>
                                        <Link to={'/posts/'}><strong>Ravi</strong></Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;