import React from 'react';
import { Link } from 'react-router';
// import FooterStore from '../stores/FooterStore';
// import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="col-lg-12 col-md-12 mx-auto">
        {/*  <ul className="list-inline text-center">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/IOT-Mentor-Club-725086434338669/" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="far fa-facebook fa-stack-1x fa-inverse"></i>
                  <i className="far fa-bell"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-youtube fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
    </ul> */}
          <p className="copyright text-center">Copyright &copy; IOT Mentor Club 2018</p>
        </div>
      </footer>
    );
  }
}

export default Footer;