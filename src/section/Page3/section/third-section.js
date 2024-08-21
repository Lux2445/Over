import React, { Component } from 'react';
import Slider from 'react-slick';
import Icon1 from '../image/people1.png'; 
import Icon2 from '../image/people2.png';
import Icon3 from '../image/people3.png';
import Icon4 from '../image/people4.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/style.css';
import { Container } from 'react-bootstrap';

const plans = [
  {
    title1: 'Безлимитный Интернет',
    title: 'Biznes XXL',
    speed: '50 Мбит/с',
    description: 'Крупный бизнес с большой командой',
    icon: Icon3,
  },
  {
    title1: 'Безлимитный Интернет',
    title: 'Biznes PRO',
    speed: '100 Мбит/с',
    description: 'Крупный бизнес с большой командой и ресурсоёмкими сервисами',
    icon: Icon4,
  },
  {
    title1: 'Безлимитный Интернет',
    title: 'Biznes L',
    speed: '5 Мбит/с',
    description: 'Малый бизнес, небольшой офис с несколькими сотрудниками',
    icon: Icon1,
  },
  {
    title1: 'Безлимитный Интернет',
    title: 'Biznes XL',
    speed: '10 Мбит/с',
    description: 'Малый бизнес, небольшой офис с несколькими сотрудниками',
    icon: Icon2,
  },
];

class BusinessPlansSlider extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef(); // Используем реф для управления слайдером
  }

  goToNextSlide = () => {
    this.sliderRef.current.slickNext();
  };

  goToPreviousSlide = () => {
    this.sliderRef.current.slickPrev();
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, 
      slidesToScroll: 1,
      nextArrow: <button className="page3_slider-button next" onClick={this.goToNextSlide}>›</button>,
      prevArrow: <button className="page3_slider-button prev" onClick={this.goToPreviousSlide}>‹</button>,
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
      <div className="page3_third_section">
        <h1 className="page3_third_section-title">Выберите интернет для вашего бизнеса</h1>
        <div className="page3_slider">
          <button className="page3_slider-button prev" onClick={this.goToPreviousSlide}>‹</button> {/* Кнопка переключения назад */}
          <Slider ref={this.sliderRef} {...settings} className="page3_slider-container">
            {plans.map((plan, index) => (
              <div key={index} className="page3_third_section_cards">
                <div className="page3_third_section_wrapper_card page3_plan-card">
                  <img src={plan.icon} alt="" className="page3_plan-icon" />
                  <h3 className="page3_plan-title">{plan.title}</h3>
                  <p className="page3_plan-title1">{plan.title1}</p>
                  <p className="page3_plan-speed">{plan.speed}</p>
                  <p className="page3_plan-description">{plan.description}</p>
                  <button className="page3_plan-button">Подключить</button>
                  <button className="page3_plan-details-button">Подробнее</button>
                </div>
              </div>
            ))}
          </Slider>
          <button className="page3_slider-button next" onClick={this.goToNextSlide}>›</button> {/* Кнопка переключения вперед */}
        </div>
        <div className="page3_third-section-text">
          <p className="page3_third-section-text-first">В современном мире, где каждая сфера бизнеса тесно связана с онлайн-миром, надежное подключение к Интернету становится неотъемлемой составляющей успешной деятельности. Вавилон-Т</p>
        </div>
      </div>
      </Container>
    );
  }
}

export default BusinessPlansSlider;
