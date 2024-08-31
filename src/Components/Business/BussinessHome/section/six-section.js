import React, { Component } from 'react'
import First from '../image/1121.png'
import Second from '../image/2212.png'
import { Container } from 'react-bootstrap';

export default class SixSection extends Component {
  render() {
    return (
      <Container>
      <div className='page3_six_section'>
        <h1 className='page3_six_section_wrapper_title'>Домин и хостинг для сайта</h1>
        <div className='page3_six_section_wrapper'>
          <div className='page3_six_section_wrapper_card'>
            <div className='page3_six_section_wrapper_card_wrapper'>
              <h1 className='page3_six_section_wrapper_card_paragraph'>Домин</h1>
              <p className='page3_six_section_wrapper_card_title'>Размещайте сайты на быстром хостинге с удобной панелью управления</p>
              <div className='page3_button_box'>
                <button className='page3_six_section_wrapper_card_button1'>Подробное</button>
                <button className='page3_six_section_wrapper_card_button2'>Оформить</button>
              </div>
              <picture>
                <img src={First} className='page3_six_section_wrapper_card_img1' alt="description of image"/>
              </picture>
            </div>
          </div>
          <div className='page3_six_section_wrapper_card'>
            <div className='page3_six_section_wrapper_card_wrapper'>
              <h1 className='page3_six_section_wrapper_card_paragraph'>Хостинг</h1>
              <p className='page3_six_section_wrapper_card_title'>Размещайте сайты на быстром хостинге с удобной панелью управления</p>
              <div className='page3_button_box'>
                <button className='page3_six_section_wrapper_card_button1'>Подробное</button>
                <button className='page3_six_section_wrapper_card_button2'>Подключить</button>
              </div>
              <img src={Second} className='page3_six_section_wrapper_card_img1' alt="description of image"/>
            </div>
          </div>
        </div>
      </div>
      </Container>
    )
  }
}
