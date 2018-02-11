import React from 'react';

import LoginStore from '../stores/LoginStore';

class EnsureLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = LoginStore.getState();
        console.log("State from Ensure LoginIn" + " "+ JSON.stringify(this.state, null, 2));
    }

    componentDidMount() {
      const isLoggedIn = this.state.isLoggedIn;
      const { dispatch, currentURL } = this.props;
  
      if (!isLoggedIn) {
        // set the current url/path for future redirection (we use a Redux action)
        // then redirect (we use a React Router method)
        dispatch(setRedirectUrl(currentURL));
        browserHistory.replace("/login");
      }
    }
  
    render() {
      if (isLoggedIn) {
        return this.props.children;
      } else {
        return null;
      }
    }
  }
  
  // Grab a reference to the current URL. If this is a web app and you are
  // using React Router, you can use `ownProps` to find the URL. Other
  // platforms (Native) or routing libraries have similar ways to find
  // the current position in the app.
  function mapStateToProps(state, ownProps) {
      console.log(state);
    return {
      isLoggedIn: state.loggedIn,
      currentURL: ownProps.location.pathname
    }
  }
  
  export default EnsureLogin;