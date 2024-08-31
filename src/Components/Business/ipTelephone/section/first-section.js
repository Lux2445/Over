import logo1 from '../image/png/firstsectionicon1.png';
import logo2 from '../image/png/firstsectionicon2.png';
import logo3 from '../image/png/firstsectionicon3.png';
import logo4 from '../image/png/firstsectionicon4.png';
import React, { Component } from 'react';
import '../style/style.css'; // Подключение стилей
import { Container } from 'react-bootstrap';

class IpTelephonyBlock extends Component {
  render() {
    return (
      <div className='page2_first_section'>
        <div className="page2_ip-telephony-block">
          <h2 className="page2_title">IP-телефония для бизнеса</h2>
          <p className="page2_subtitle">Выгодные телефонные звонки через интернет, управление коммуникациями и продажами</p>
          
          <div className="page2_features">
            <div className="page2_feature">
              <img src={logo1} alt="icon1" className="page2_feature-icon" />
              <p className='page2_feature-icon-text'>Автоматически соединяйтесь с клиентами</p>
            </div>
            <div className="page2_feature">
              <img src={logo2} alt="icon2" className="page2_feature-icon" />
              <p className='page2_feature-icon-text'>Увеличивайте конверсию обращений в продажи</p>
            </div>
            <div className="page2_feature">
              <img src={logo3} alt="icon3" className="page2_feature-icon" />
              <p className='page2_feature-icon-text'>Контролируйте общение с клиентами</p>
            </div>
            <div className="page2_feature">
              <img src={logo4} alt="icon4" className="page2_feature-icon" />
              <p className='page2_feature-icon-text'>Обеспечьте стабильную связь</p>
            </div>
          </div>

          <button className="page2_learn-more">Узнать больше</button>
        </div>
      </div>
    );
  }
}

export default IpTelephonyBlock;
