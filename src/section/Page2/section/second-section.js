import { Container } from 'react-bootstrap';
import Call from '../image/png/call.png';
import Cally from '../image/png/cally.png';
import Profile from '../image/png/profile.png';
import Women from '../image/png/women.png';
import React, { Component } from 'react';

class PricingConfigurator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: 31,
      users: 62,
      recordingDays: 13,
      discount: 6,
    };
  }

  handleSliderChange = (field, value) => {
    this.setState({ [field]: value });
  };

  renderTicksAndNumbers = (ticksArray) => {
    return ticksArray.map((tick, index) => (
      <div className="page2_tick" key={index}>
        <span className="page2_tick-number">{tick.label}</span>
        <div className="page2_tick-mark" />
      </div>
    ));
  };

  render() {
    const { numbers, users, recordingDays, discount } = this.state;

    return (
      <div className='page2_second_section'>
        <div className='page2_second_section_text_wrapper'>
          <h1 className='page2_second_section_text_wrapper_title'>Создай тариф для вашего бизнеса</h1>
        </div>
        <div className='page2_second_section_wrapper'>
          <div className="page2_pricing-configurator">
            <div className="page2_config-options">
              <div className="page2_option">
                <div className="page2_option-header">
                  <img src={Call} alt="Phone Icon" />
                  <span>Сколько Вам нужно номеров?</span>
                </div>
                <div className="page2_slider-container">
                  <div className="page2_ticks-container">
                    {this.renderTicksAndNumbers([
                      { label: '1' },
                      { label: '20' },
                      { label: '40' },
                      { label: '60' },
                      { label: '80' },
                      { label: '100' },
                    ])}
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={numbers}
                    onChange={(e) => this.handleSliderChange('numbers', e.target.value)}
                  />
                  <div className="page2_value-display-box">
                    <div className="page2_value-display">{numbers} шт.</div>
                  </div>
                </div>
              </div>

              <div className="page2_option">
                <div className="page2_option-header">
                  <img src={Profile} alt="User Icon" />
                  <span>Количество пользователей</span>
                </div>
                <div className="page2_slider-container">
                  <div className="page2_ticks-container">
                    {this.renderTicksAndNumbers([
                      { label: '1' },
                      { label: '10' },
                      { label: '30' },
                      { label: '50' },
                      { label: '70' },
                      { label: '90' },
                    ])}
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="90"
                    value={users}
                    onChange={(e) => this.handleSliderChange('users', e.target.value)}
                  />
                  <div className="page2_value-display-box">
                    <span className="page2_value-display">{users} шт.</span>
                  </div>
                </div>
              </div>

              <div className="page2_option">
                <div className="page2_option-header">
                  <img src={Women} alt="Recording Icon" />
                  <span>Запись разговоров в днях</span>
                </div>
                <div className="page2_slider-container">
                  <div className="page2_ticks-container">
                    {this.renderTicksAndNumbers([
                      { label: '1' },
                      { label: '20' },
                      { label: '40' },
                      { label: '60' },
                      { label: '80' },
                      { label: '90' },
                    ])}
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="90"
                    value={recordingDays}
                    onChange={(e) => this.handleSliderChange('recordingDays', e.target.value)}
                  />
                  <div className="page2_value-display-box">
                    <div className="page2_value-display">{recordingDays} дн.</div>
                  </div>
                </div>
              </div>

              <div className="page2_additional-options">
                <label>
                  <input type="checkbox" /> VPN номера
                </label>
                <label>
                  <input type="checkbox" /> SIP
                </label>
                <label>
                  <input type="checkbox" /> Голосовая почта
                </label>
                <label>
                  <input type="checkbox" /> Группы сотрудников
                </label>
                <label>
                  <input type="checkbox" /> Короткий номер
                </label>
                <img src={Cally} alt='' className='page2_cally'/>
              </div>
            </div>

            <div className="page2_summary">
              <div className="page2_summary-row">
                <div className="page2_summary-item">
                  <h3>{numbers}</h3>
                  <p>Номеров</p>
                </div>
                <div className="page2_summary-item">
                  <h3>{users}</h3>
                  <p>Пользователей</p>
                </div>
              </div>
              <div className="page2_summary-row">
                <div className="page2_summary-item">
                  <h3>{recordingDays}</h3>
                  <p>Запись разговоров</p>
                </div>
              </div>
              <div className="page2_discount">
                <p>Выберите со скидкой</p>
                <div className="page2_discount-info">
                  <span>1 мес.</span>
                  <span>6 мес.</span>
                  <span>12 мес.</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={discount}
                  onChange={(e) => this.handleSliderChange('discount', e.target.value)}
                />
                <button className="page2_get-offer-button">Получить предложение</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default PricingConfigurator;
