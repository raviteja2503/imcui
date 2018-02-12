import React from 'react';
import { Link } from 'react-router';
var utils = require('../../utils').utils;

import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount(state) {
    NavbarStore.listen(this.onChange);
    const AthValue = utils.getStorage('isLoggedIn');
    this.state.isAuth = AthValue;
    this.setState(this.state);
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  render() {
    if (this.state.isAuth) {
      return (
        <nav className='navbar navbar-default navbar-static-top'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link to='/' className='navbar-brand'>
              Iot Mentor Club
            </Link>
          </div>
          <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav'>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li><Link to='/addpost'>Add Post</Link></li>
              <li><Link to='/posts'>Posts</Link></li>
              <li><Link to='/addevent'>Add Event</Link></li>
              <li><Link to='/events'>Events</Link></li>
{/*              <li><Link to='/contact'><i className="far fa-bell"></i><span className='badge badge-up badge-danger'>{5}</span></Link></li> */}
              <li className='dropdown'>
                <a href='#' className='dropdown-toggle' data-toggle='dropdown'><i className="far fa-bell"></i><span className='badge badge-up badge-primary'>{5}</span></a>
                <ul className='dropdown-menu'>
                  <li><Link to='/male'>New post Added by User At 11:00AM</Link></li>
                  <div className="divider"></div>
                  <li><Link to='/male'>All</Link></li>
                  <div className="clearfix"></div>
                  <li><Link to='/male'>All</Link></li>
                  <div className="clearfix"></div>                  
                </ul>
              </li>
              <li><Link to='/logout'>Logout</Link></li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className='navbar navbar-default navbar-static-top'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link to='/' className='navbar-brand'>
              {/*  <img src={"/favicon.png"} height="30px" width="30px" />*/}
              Iot Mentor Club
            </Link>
          </div>
          <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/posts'>Posts</Link></li>
              <li><Link to='/events'>Events</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/login'>Login/</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
              <li className='dropdown'>
                <a href='#' className='dropdown-toggle' data-toggle='dropdown'>DropDown <span className='caret'></span></a>
                <ul className='dropdown-menu'>
                  <li><Link to='/male'>All</Link></li>
                  <li className='dropdown-submenu'>
                    <Link to='/male/caldari'>Caldari</Link>
                    <ul className='dropdown-menu'>
                      <li><Link to='/male/caldari/achura'>Achura</Link></li>
                      <li><Link to='/male/caldari/civire'>Civire</Link></li>
                      <li><Link to='/male/caldari/deteis'>Deteis</Link></li>
                    </ul>
                  </li>
                  <li className='dropdown-submenu'>
                    <Link to='/male/gallente'>Gallente</Link>
                    <ul className='dropdown-menu'>
                      <li><Link to='/male/gallente/gallente'>Gallente</Link></li>
                      <li><Link to='/male/gallente/intaki'>Intaki</Link></li>
                      <li><Link to='/male/gallente/jin-mei'>Jin-Mei</Link></li>
                    </ul>
                  </li>
                  <li className='dropdown-submenu'>
                    <Link to='/male/minmatar'>Minmatar</Link>
                    <ul className='dropdown-menu'>
                      <li><Link to='/male/minmatar/brutor'>Brutor</Link></li>
                      <li><Link to='/male/minmatar/sebiestor'>Sebiestor</Link></li>
                      <li><Link to='/male/minmatar/vherokior'>Vherokior</Link></li>
                    </ul>
                  </li>
                  <li className='dropdown-submenu'>
                    <Link to='/male/amarr'>Amarr</Link>
                    <ul className='dropdown-menu'>
                      <li><Link to='/male/amarr/amarr'>Amarr</Link></li>
                      <li><Link to='/male/amarr/ni-kunni'>Ni-Kunni</Link></li>
                      <li><Link to='/male/amarr/khanid'>Khanid</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

export default Navbar;