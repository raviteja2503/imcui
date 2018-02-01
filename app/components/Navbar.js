import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  render() {
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

export default Navbar;