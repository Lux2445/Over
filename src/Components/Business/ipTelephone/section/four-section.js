import { Container } from 'react-bootstrap';
import Icon1 from '../image/png/four-section-icon1.png';
import Icon2 from '../image/png/four-section-icon2.png';
import Icon3 from '../image/png/four-section-icon3.png';
import Icon4 from '../image/png/four-section-icon4.png';
import Icon5 from '../image/png/four-section-icon5.png';
import Icon6 from '../image/png/four-section-icon6.png';
import React, { Component } from 'react';

class FeatureBlock extends Component {
  render() {
    return (
      <div className='page2_four_section'>
        <div className='page2_four_section_text_wrapper'>
          <h1 className='page2_four_section_wrapper_title'>Преимущества</h1>
        </div>
        <div className='page2_four_section_wrapper'>
          <div className="page2_feature-block">
            <div className="page2_feature-item">
              <img src={Icon1} alt="Quality Icon" className="page2_feature-icon" />
              <h3>Качество связи</h3>
              <p>Высокая скорость передачи пакетов, позволяют создать отличное качество голоса.</p>
            </div>
            <div className="page2_feature-item">
              <img src={Icon2} alt="Cost Icon" className="page2_feature-icon" />
              <h3>Стоимость дешевая</h3>
              <p>Высокая скорость передачи пакетов, позволяют создать отличное качество голоса.</p>
            </div>
            <div className="page2_feature-item">
              <img src={Icon3} alt="Flexible Connection Icon" className="page2_feature-icon" />
              <h3>Гибкое подключение</h3>
              <p>Мы можем предложить несколько вариантов для подключения.</p>
            </div>
            <div className="page2_feature-item">
              <img src={Icon4} alt="Number Preservation Icon" className="page2_feature-icon" />
              <h3>Сохранение телефонных номеров</h3>
              <p>При переезде ваши телефонные номера всегда будут с вами.</p>
            </div>
            <div className="page2_feature-item">
              <img src={Icon5} alt="Unlimited Channels Icon" className="page2_feature-icon" />
              <h3>Безлимитный количество каналов</h3>
              <p>Благодаря подключению через интернет вы можете масштабировать количество абонентов бесконечно.</p>
            </div>
            <div className="page2_feature-item">
              <img src={Icon6} alt="High Protection Icon" className="page2_feature-icon" />
              <h3>Высокая защита</h3>
              <p>Мы имеем специальные системы для отслеживания взломов.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureBlock;
