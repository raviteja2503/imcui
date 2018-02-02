import React from 'react';
import {Link} from 'react-router';
var moment = require('moment');

import PostsStore from '../stores/PostsStore';
import PostsActions from '../actions/PostsActions';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = PostsStore.getState();
        this.onChange = this.onChange.bind(this);
      }
    
      componentDidMount() {
        PostsStore.listen(this.onChange);
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
            <div key={post.postId} className={index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1'}>
                <div className='thumbnail fadeInUp animated'>
                    <div className='caption text-center'>
                        <ul className='list-inline'>
                            <img className="card-img-top" src={"/img/home_bg.jpg"} alt="Post_image" />
                            <li><strong>PostName:</strong> {post.postName}</li>
                            <li><strong>Post Content:</strong> {post.content.split(" ").splice(0, 10).join(" ")}</li>
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

        var latestPosts = this.state.posts.map((post, index) => {
            return (
                <div className="col-lg-6 text-center" key={post.postId}>
                    <div className="card"> <img className="card-img-top" src={"/img/home_bg.jpg"} alt="Post_image" />
                        <div className="card-block">
                            <h4 className="card-title">{post.postName}</h4>
                            <p className="card-text">{post.content.split(" ").splice(0, 10).join(" ")}</p>
                            <ul className="list-inline ">
                                <li className="list-inline-item">
                                    <p className="card-text"><b>Poted On:</b>{ moment(post.dateCreated).format("DD MMM YYYY") }</p>
                                </li>
                                <li className="list-inline-item"> <Link to={'/posts/' + post.postId}><a className={index % 2 === 0 ? 'btn btn-primary' : 'btn btn-danger'} >View Post</a></Link></li>
                            </ul>
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
                    <div className="col-md-12">     
                        <div className="row">
                            <div className="posts-outline">
                                {latestPosts}
                            </div>
                        </div>  
                    </div>            
                </div>
            </div>
        );
    }
}

export default Posts;