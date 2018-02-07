import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Posts from './components/Posts';
import Post from './components/Post';
import Events from './components/Events';
import Event from './components/Event';
import Forgotpassword from './components/ForgotPassword';
import UpdatePassword from './components/UpdatePassword';
import Activate from './components/Activate';
import ResetPassword from './components/ResetPassword';
import AddPost from './components/AddPost';
import AddEvent from './components/AddEvent';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/posts' component={Posts} />
    <Route path='/posts/:id' component={Post} />
    <Route path='/events' component={Events} />
    <Route path='/events/:id' component={Event} />    
    <Route path='/forgotpassword' component={Forgotpassword} />
    <Route path='/updatepassword' component={UpdatePassword} />
    <Route path='/activate' component={Activate} />
    <Route path='/resetpassword' component={ResetPassword} />
    <Route path='/addpost' component={AddPost} />
    <Route path='/addevent' component={AddEvent} />
  </Route>
);