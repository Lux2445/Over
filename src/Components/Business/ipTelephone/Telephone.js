import React, { Component } from 'react';
import First from './section/first-section'
import Sections from './section/second-section'
import Third from './section/third-section'
import Four from './section/four-section'
import Fife from './section/fife-section'
// import Faq from '../../Faq/Faq';
// import './style/reset.css'
import './style/style.css';
class Telephone extends Component {
  render() {
    return (
    <>
      <First />
      <Sections />
      <Third />
      <Four />
      <Fife />
      {/* <Faq /> */}
    </>
    );
  } 
}

export default Telephone;