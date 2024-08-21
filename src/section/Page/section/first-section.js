import React, { Component } from 'react'
import Laptop from '../images/png/project-laptop.png'
import { Container } from 'react-bootstrap'

export default class firstSection extends Component {
  render() {
    return (
      <Container>
      <div className='page1_first_section'>
        <div className='page1_first_section_wrapper'>
          <div className='page1_first_section_items'>
            <div className='page1_first_section_item_text'>
              <h1 className='page1_first_section_item_title'>Интернет</h1>
              <p className='page1_first_section_item_paragraph'> для вашего бизнеса</p>
            </div>
          </div> 
          <div className='page1_first_section_items'>
            <div className='page1_first_section_item_image'>
              <img src={Laptop} alt="" className='page1_first_section_image'/>
            </div>
          </div> 
        </div>
      </div>
      </Container>
    )
  }
}