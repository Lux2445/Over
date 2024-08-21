import React, { Component } from 'react';

import People from '../images/png/secondsection.png';
import Internet from '../images/svg/first.svg';
import Speed from '../images/svg/second.svg';
import { Container } from 'react-bootstrap';

export default class secondSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstText: 'Тариф Biznes S',
      secondText: 'Скорость 5 Мбит/c',
      showText: false,
      activeButton: null,
    };
  }

  handleShowFirstTexts = () => {
    this.setState({
      firstText: 'Тариф Biznes S',
      secondText: 'Скорость 5 Мбит/c',
      showText: true,
      activeButton: 0,
    });
  };

  handleShowSecondTexts = () => {
    this.setState({
      firstText: 'Тариф Biznes L',
      secondText: 'Скорость 10 Мбит/c',
      showText: true,
      activeButton: 1,
    });
  };

  handleShowThirdTexts = () => {
    this.setState({
      firstText: 'Тариф Biznes XL',
      secondText: 'Скорость 15 Мбит/c',
      showText: true,
      activeButton: 2,
    });
  };

  render() {
    const { firstText, secondText, showText, activeButton } = this.state;

    const buttonStyle = (index) => ({
      color: activeButton === index ? 'blue' : 'black',
      backgroundColor: 'transparent',
      position: 'relative',
      margin: '10px',
      padding: '10px',
    });

    const underlineStyle = (index) => ({
      content: '""',
      position: 'absolute',
      bottom: '-12px',
      left: '-10px',
      width: '100%',
      height: '4px',
      backgroundColor: activeButton === index ? 'blue' : 'transparent',
    });

    return (
      <Container>
        <div className='page1_second_section'>
          <div className='page1_second_section_wrapper'>
            <div className='page1_second_section_items_first'>
              <div className='page1_second_section_items_paragraph_text'>
                <p className='page1_second_section_items_title'>Интернет </p>
                <p className='page1_second_section_items_title'>&gt;Интернет</p>
                <p className='page1_second_section_items_title'>&gt;Тарифы</p>
              </div>
              <div className='page1_second_section_items_paragraph_text2'>
                <div className='page1_second_section_items_text2_paragraph'>
                  <h1 className='page1_second_section_paragraph_item'>Выберите интернет для вашего бизнеса</h1>
                </div>         
              </div>
              <div className='page1_button-plus-hr'>
                <div className='page1_second_section_items_paragraph_chapters'>
                  <button className='page1_second_section_items_chapter_item' onClick={this.handleShowFirstTexts} style={buttonStyle(0)}>
                    Biznes S
                    <div style={underlineStyle(0)} />
                  </button>
                  <button className='page1_second_section_items_chapter_item' onClick={this.handleShowSecondTexts} style={buttonStyle(1)}>
                    Biznes L
                    <div style={underlineStyle(1)} />
                  </button>
                  <button className='page1_second_section_items_chapter_item' onClick={this.handleShowThirdTexts} style={buttonStyle(2)}>
                    Biznes XL
                    <div style={underlineStyle(2)} />
                  </button>
                </div>
              </div>
              <div className='page1_band'>
                <hr className='page1_band-hr'/>
              </div>
            </div> 
            <div className='page1_second_section_items_second'>
              <div className='page1_second_section_items_second_image'>
                <img src={People} alt="" className='page1_second_section_image'/>
              </div>
              <div className='page1_second_section_items_second_text'>
                <div className='page1_second_section_second_text_first'>
                  <h1 className='page1_text_first_paragraph'>{firstText}</h1>
                  <p className='page1_text_first_title_first'>Современные технологии подключения обеспечивают наилучшую скорость доступа к сети</p>
                </div> 
                <div className='page1_second_section_second_text_second'>
                  <img src={Internet} alt="" className='page1_second_section_text_image_first'/>
                  <h1 className='page1_second_section_text_title'>Безлимитный</h1>
                  <img src={Speed} alt="" className='page1_second_section_text_image_second'/>
                  <h1 className='page1_second_section_text_title'>{secondText}</h1>
                </div> 
                <div className='page1_second_section_second_text_third'>
                  <p className='page1_second_section_second_third_title'>Объем трафика не ограничен – у вас всегда будет доступ в интернет, сколько бы файлов вы ни скачивали.</p>
                  <button className='page1_second_section_second_third_button'>Подключить</button>
                </div> 
              </div>
            </div> 
          </div>
        </div>
      </Container>
    );
  }
}
