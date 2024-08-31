import React, { Component } from 'react';
import First from '../../../images/business/1121.png';
import Second from '../../../images/business/2212.png'
import { Container } from 'react-bootstrap';

export default class FiveSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      nameValue: '',
      phoneValue: '',
      companyValue: ''
    };
  }


    handleShange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 9) {
      this.setState({ value: inputValue });
    }
  };

  handleChange = (field, e) => {
    let inputValue = e.target.value;
    if (inputValue.length > 0) {
      inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    }
    this.setState({ [field]: inputValue });
  };

  render() {
    return (
      <Container>
        <div className='page1_fife_section'>
          <h1 className='page1_fife_section_wrapper_title'>Другие услуги для Вашего Бизнеса</h1>
          <div className='page1_fife_section_wrapper'>
            <div className='page1_fife_section_wrapper_card'>
              <div className='page1_fife_section_wrapper_card_wrapper'>
                <h1 className='page1_fife_section_wrapper_card_paragraph'>Домен</h1>
                <p className='page1_fife_section_wrapper_card_title'>Размещайте сайты на быстром хостинге с удобной панелью управления</p>
                <div className='page1_button_box'>
                  <button className='page1_fife_section_wrapper_card_button1'>Подробное</button>
                  <button className='page1_fife_section_wrapper_card_button2'>Оформить</button>
                </div>
                <img src={First} className='page1_fife_section_wrapper_card_img1' alt="description of image" />
              </div>
            </div>
            <div className='page1_fife_section_wrapper_card'>
              <div className='page1_fife_section_wrapper_card_wrapper'>
                <h1 className='page1_fife_section_wrapper_card_paragraph'>Хостинг</h1>
                <p className='page1_fife_section_wrapper_card_title'>Размещайте сайты на быстром хостинге с удобной панелью управления</p>
                <div className='page1_button_box'>
                  <button className='page1_fife_section_wrapper_card_button1'>Подробное</button>
                  <button className='page1_fife_section_wrapper_card_button2'>Оформить</button>
                </div>
                <img src={Second} className='page1_fife_section_wrapper_card_img1' alt="description of image" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
