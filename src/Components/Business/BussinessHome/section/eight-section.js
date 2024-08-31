import React, { Component } from 'react'
import Email from '../image/email.png'
import { Container } from 'react-bootstrap'

export default class eightSection extends Component {
  render() {
    return (
      <div className='page3_eight_section'>
          <Container>
            <div className='page3_eight_section_wrapper'>
              <div className='page3_eight_section_wrapper_text'>
              <h1 className='page3_eight_section_wrapper_paragraph'>Почта на домене</h1>
                <p className='page3_eight_section_wrapper_title'>Создавайте 	&#171;красивые&#187; именные электронные адреса сотрудникам</p>
                <a href='' className='page3_eight_section_wrapper_link'>Подробнее &#8594;</a>
              </div>
                <img src={Email} alt='' className='page3_eight_section_wrapper_image'/>
            </div>
        </Container>
        </div>
    )
  }
}
