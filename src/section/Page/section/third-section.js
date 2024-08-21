import React, { Component } from 'react';
import Slider from 'react-slick';
import First from '../images/svg/third.svg';
import Second from '../images/svg/four.svg';
import Third from '../images/svg/fife.svg';
import Four from '../images/svg/six.svg';
import Fife from '../images/svg/seven.svg';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import '../style/slide.css';
import { Container } from 'react-bootstrap';

export default class ThirdSection extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, 
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };

    return (
      <Container>
      <div className="page1_third_section">
        <h1 className="page1_third_section_wrapper_text">Как начать работать?</h1>
        <div className='page1_slider'>
          <Slider {...settings} className="page1_third_section_wrapper">
            <div className="page1_third_section_cards">
              <div className="page1_third_section_wrapper_card">
                <img src={First} alt="" className="page1_third_section_card_img" />
                <h1 className="page1_third_section_card_paragraph">Заявка / Звонок</h1>
                <p className="page1_third_section_card_title">Оставьте заявку на сайте</p>
                <p className="page1_third_section_card_title2">или позвоните нам</p>
                <p className="page1_third_section_card_title2">по телефону</p>
                <p className="page1_third_section_card_link_title">
                  <a target="blank" href="/#" className="page1_third_section_card_link">Подключить</a>
                </p>
              </div>
            </div>
            <div className="page1_third_section_cards">
              <div className="page1_third_section_wrapper_card">
                <img src={Second} alt="" className="page1_third_section_card_img" />
                <h1 className="page1_third_section_card_paragraph">Согласование</h1>
                <p className="page1_third_section_card_title">Менеджер связывается с</p>
                <p className="page1_third_section_card_title2">вами для подтверждения</p>
                <p className="page1_third_section_card_title2">заявки и согласования</p>
                <p className="page1_third_section_card_title2">условий</p>
              </div>
            </div>
            <div className="page1_third_section_cards">
              <div className="page1_third_section_wrapper_card">
                <img src={Third} alt="" className="page1_third_section_card_img" />
                <h1 className="page1_third_section_card_paragraph">Выезд инженера</h1>
                <p className="page1_third_section_card_title">Заявка передается в</p>
                <p className="page1_third_section_card_title2">техническую службу,</p>
                <p className="page1_third_section_card_title2">назначается ответственный</p>
                <p className="page1_third_section_card_title2">инженер</p>
              </div>
            </div>
            <div className="page1_third_section_cards">
              <div className="page1_third_section_wrapper_card">
                <img src={Four} alt="" className="page1_third_section_card_img" />
                <h1 className="page1_third_section_card_paragraph">Монтаж системы</h1>
                <p className="page1_third_section_card_title">Производится монтаж, канал</p>
                <p className="page1_third_section_card_title2">передаётся вам на</p>
                <p className="page1_third_section_card_title2">тестирование на 7 дней</p>
              </div>
            </div>
            <div className="page1_third_section_cards">
              <div className="page1_third_section_wrapper_card">
                <img src={Fife} alt="" className="page1_third_section_card_img" />
                <h1 className="page1_third_section_card_paragraph">Оплата</h1>
                <p className="page1_third_section_card_title">Подписываем с вами</p>
                <p className="page1_third_section_card_title2">договор, вы производите</p>
                <p className="page1_third_section_card_title2">оплату услуг и пользуетесь</p>
                <p className="page1_third_section_card_title2">надёжным интернетом!</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      </Container>
    );
  }
}
