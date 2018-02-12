import React from 'react';
import Navbar from './Navbar';

import PostsStore from '../stores/PostsStore';
import PostsActions from '../actions/PostsActions';

class Home extends React.Component {
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
                          <li className="list-inline-item"> <Link to={'/posts/' + post.postId} className={index % 2 === 0 ? 'btn btn-primary' : 'btn btn-danger'} >View Post</Link></li>
                      </ul>
                  </div>
              </div>
          </div>          
      );
    });
    return (
        <div>  
          <Navbar />
          <div className='content'>
            <img src={'/img/iot.png'} alt='AboutUs_Banner' className='cover-img'/>
          </div>
          <div>
              {latestPosts}
          </div>
        </div>
    );
  }
}

export default Home;