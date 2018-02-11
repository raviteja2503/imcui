import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';


class App extends React.Component { 
  componentDidUpdate(prevProps) {
    const { dispatch, redirectUrl } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      dispatch(navigateTo(redirectUrl));
    } else if (isLoggingOut) {
      console.log("Succesfully Logout");
      // do any kind of cleanup or post-logout redirection here
    }
  }

  render() {
    return (      
      <div>
        <Navbar history={this.props.history} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;