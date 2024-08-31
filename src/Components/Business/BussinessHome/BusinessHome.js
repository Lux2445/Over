import React, { Component } from 'react';
import './style/style.css';
// import './style/reset.css';
import First from './section/first-section';
import Second from './section/second-section';
import Third from './section/third-section';
import Four from './section/four-section';
import Fife from './section/fife-section';
import Six from './section/six-section';
import Seven from './section/seven-section';
import Eight from './section/eight-section';


class BusinessHome extends Component {
  render() {
      return (
          <div>
              <First />
              <Second />
              <Third />
              <Four />
              <Fife />
              <Six />
              <Seven />
              <Eight />
          </div>
      );
  }
}

export default BusinessHome;
