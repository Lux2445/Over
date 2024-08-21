import React, { Component } from 'react'
import Second from './section/second-section';
import First from './section/first-section';
import Third from './section/third-section';
import Four from './section/four-section'
import Fife from './section/fife-section'
import './style/reset.css'
import './style/style.css';

export default class App extends Component {
  render() {
    return (
      <div>
      <First />
      <Second/>
      <Third />
      <Four />
      <Fife />
      </div>
    )
  }
}
