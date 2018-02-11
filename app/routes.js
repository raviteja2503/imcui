import React from 'react';
import { Route } from 'react-router';
var utils = require('./../utils').utils;

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
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/signup' component={Signup} />
    <Route path='/activate' component={Activate} />
    <Route path='/forgotpassword' component={Forgotpassword} />
    <Route path='/posts' component={Posts} />
    <Route path='/events' component={Events} />
    <Route path='/login' component={Login} />
    <Route path='/posts/:id' component={Post} />
    <Route path='/events/:id' component={Event} />

    <Route path='/dashboard' component={Dashboard} />
    <Route path='/updatepassword' component={UpdatePassword} />
    <Route path='/resetpassword' component={ResetPassword} />
    <Route path='/addpost' component={AddPost} />
    <Route path='/addevent' component={AddEvent} />
    <Route path='/logout' component={Logout} />
  </Route>
);