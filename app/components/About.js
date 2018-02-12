import React from 'react';
import Navbar from './Navbar';

class About extends React.Component {
  render() {
    return (
        <div>
            <Navbar />
            <div className="content">
                <div className='alert alert-info'>
                    Hello from About Component
                </div>
            </div>
        </div>        
    );
  }
}

export default About;