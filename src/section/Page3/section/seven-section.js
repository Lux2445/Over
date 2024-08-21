import React, { Component } from 'react'
import Server from '../image/Server.png'
import Windows from '../image/windows.png'
import Linux from '../image/Linux.png'
import { Container } from 'react-bootstrap';

export default class SevenSection extends Component {
  render() {
    return (
      <Container>
      <div className='page3_seven_section'>
        <h1 className='page3_seven_section_wrapper_first_text'>Виртуальный сервер VPS</h1>
        <div className='page3_seven_section_wrapper'>
          <div className='page3_seven_section_wrapper_first_part'>
            <img src={Server} alt='' className='page3_seven_section_wrapper_first_part_image'/>
          </div>
          <div className='page3_seven_section_wrapper_second_part'>
            <div className='page3_seven_section_wrapper_second_part_item1'>
              <p className='page3_seven_section_wrapper_second_part_title1'>
                При выборе тарифа учитывайте нагрузку вашего проекта. Чем мощнее сервер, тем стабильнее и быстрее работает сайт или сервис, размещённый на нём.
              </p>
              <p className='page3_seven_section_wrapper_second_part_title2'>Создай себе сервер</p>
              <div className='page3_operation'>
                <img src={Windows} alt='' className='page3_seven_section_wrapper_second_part_image1'/>
                <p className='page3_seven_section_wrapper_second_part_title3'>Windows</p>
                <img src={Linux} alt='' className='page3_seven_section_wrapper_second_part_image2'/>
              </div>
            </div>
            <div className='page3_seven_section_wrapper_second_part_button_items'>
              <button className='page3_seven_section_wrapper_second_part_button1'>Конструктор</button>
              <button className='page3_seven_section_wrapper_second_part_button2'>Подключить</button>
            </div>
          </div>
        </div>
      </div>
      </Container>
    )
  }
}
