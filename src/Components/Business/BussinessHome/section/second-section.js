import React, { Component } from 'react'
import Icon1 from '../image/basket ball.png'
import Icon2 from '../image/monitor.png'
import Icon3 from '../image/user-circle.png'
import Icon4 from '../image/filter 01.png'
import { Container } from 'react-bootstrap';

export default class SecondSection extends Component {
  render() {
    return (
      <Container>
      <div className='page3_second_section'>
        <h1 className='page3_second_section_wrapper_title'>Преимущества</h1>
        <div className='page3_second_section_wrapper'>
          <div className='page3_second_section_wrapper_card'>
            <img src={Icon1} alt='' className='page3_second_section_wrapper_card_img1'/>
            <h1 className='page3_second_section_wrapper_card_title'>Высокая скорость</h1>
            <p className='page3_second_section_wrapper_card_text1'>
              Безлимитный Интернет для бизнеса на скорости до 1 Гбит/с.
            </p>
            <a href='#!' className='page3_second_section_wrapper_card_link'>Подключить</a>
          </div>
          <div className='page3_second_section_wrapper_card'>
            <img src={Icon2} alt='' className='page3_second_section_wrapper_card_img2'/>
            <h1 className='page3_second_section_wrapper_card_title'>Мониторинг</h1>
            <p className='page3_second_section_wrapper_card_text2'>
              Автоматическая диагностика предотвращает технические сбои
            </p>
          </div>
          <div className='page3_second_section_wrapper_card'>
            <img src={Icon3} alt='' className='page3_second_section_wrapper_card_img3'/>
            <h1 className='page3_second_section_wrapper_card_title'>Личный кабинет</h1>
            <p className='page3_second_section_wrapper_card_text3'>
              Узнавайте и пополняйте баланс, получайте счета, меняйте настройки, смотрите статистику.
            </p>
          </div>
          <div className='page3_second_section_wrapper_card'>
            <img src={Icon4} alt='' className='page3_second_section_wrapper_card_img4'/>
            <h1 className='page3_second_section_wrapper_card_title'>Техподдержка</h1>
            <p className='page3_second_section_wrapper_card_text4'>
              24/7 Горячая линия или ваш персональный менеджер ответят на все вопросы
            </p>
          </div>
        </div>
      </div>
      </Container>
    )
  }
}
