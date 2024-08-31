import Icon from '../image/png/phone.png'
import Google from '../image/png/GooglePlay.png'
import AppStore from '../image/png/AppStory.png'
import React, { Component } from 'react';
import Gif from '../image/png/c9103d691f844c5e768cb69e9386ac44.gif'
import { Container } from 'react-bootstrap';

class PromoBlock extends Component {
  render() {
    return (

 
      <div className='page2_five_section'>
          <div className="page2_promo-block">
                <div className="page2_promo-image">
          <img src={Icon} alt="Babilon-T Messenger" />
        </div>
        <div className="page2_promo-content">
          <h2>Для звонков и смс с удобным интерфейсом</h2>
          <ul>
            <li><img src={Gif} alt='' className='page2_gif'/>Оставайтесь на связи вне офиса и в поездке</li>
            <li><img src={Gif} alt='' className='page2_gif'/>Смотрите статистику звонков и запись разговоров</li>
            <li><img src={Gif} alt='' className='page2_gif'/>Помечайте номера алиасами для удобной работы</li>
            <li><img src={Gif} alt='' className='page2_gif'/>Звоните, принимайте и отправляйте СМС</li>
          </ul>
          <div className="page2_store-buttons">
            <a href='#'>
            <img src={Google} alt="Google Play" />
            </a>
            <a href='#'>
            <img src={AppStore} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default PromoBlock;
