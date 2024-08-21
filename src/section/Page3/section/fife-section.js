import React, { Component } from 'react';
import Logo from '../image/Logo.png';
import Icon from '../image/icon_first_section.png'
import { Container } from 'react-bootstrap';

export default class FifeSection extends Component {
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
      <div className='page3_fife_section'>
            <div className='page3_fife_section_wrapper'>
              <div className='page3_fife_section_wrapper_form'>
                <img src={Logo} alt='' className='page3_fife_section_wrapper_form_img' />
                <h1 className='page3_fife_section_wrapper_form_paragraph'>Заполните заявку </h1>
                <p className='page3_fife_section_wrapper_form_title'>Заполните заявку на подключение</p>
                <input value={this.state.nameValue} onChange={(e) => this.handleChange('nameValue', e)} type='text' placeholder='Как к Вам обращаться' className='page3_fife_section_wrapper_form_input1' />
                <input type='number' maxLength='9' value={this.state.value} onChange={this.handleShange} placeholder='Введите номер телефона' className='page3_fife_section_wrapper_form_input2' />
                <div className='page3_fife_section_wrapper_form_center_text'>
                  <hr className='page3_fife_section_wrapper_form_hr1' />
                  <h1 className='page3_fife_section_wrapper_form_center_text_title'>Название компании важна</h1>
                  <hr className='page3_fife_section_wrapper_form_hr2' />
                </div>
                <input value={this.state.companyValue} onChange={(e) => this.handleChange('companyValue', e)} type='text' placeholder='Введите компанию' className='page3_fife_section_wrapper_form_input3' />
                <button className='page3_fife_section_wrapper_form_button'>Отправить заявку</button>         
              </div>
        <div className='page3_fife_section_wrapper_image'>
    <img src={Icon} alt='' className='page3_fife_section_wrapper_image_items' />
  </div>
</div>

      </div>
      </Container>
    );
  }
}
