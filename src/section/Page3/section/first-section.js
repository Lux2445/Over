import React, { Component } from 'react';
import Icon1 from '../image/icon_first_section.png';
import '../style/style.css';
import { Container } from 'react-bootstrap';

export default class FirstSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: null
    };
  }

  handleMouseEnter = (index) => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredIndex: null });
  };

  render() {
    const { hoveredIndex } = this.state;
    const items = [
      { title: 'Безлимитный Интернет', subtitle: 'для вашего бизнеса' },
      { title: 'Беспроводной LTE', subtitle: 'Беспроводной интернет' },
      { title: 'VPS сервера', subtitle: 'Lorem Ipsum is simply' },
      { title: 'WiFi Роутер', subtitle: 'Топ роутердля бизнеса' }
    ];

    return (
      <Container>
      <div className='page3_first_section'>
        <div className='page3_first_section_wrapper'>
          <div className='page3_first_section_wrapper_items1'>
            <div className='page3_first_section_items'>
              <h1 className='page3_first_section_items_text'>Интернет для Бизнеса по Оптике</h1>
            </div>
            <img src={Icon1} alt='' className='page3_first_section_wrapper_image'/>
          </div>
          <div className='page3_active-hover-items'>
            {items.map((item, index) => (
              <div key={index} className='page3_first_section_wrapper_items2'>
                <div
                  className={`page3_hover-container ${hoveredIndex === index ? 'page3_hovered' : ''}`}
                  onMouseEnter={() => this.handleMouseEnter(index)}
                  onMouseLeave={this.handleMouseLeave} 
                >
                  <div className={`page3_circle ${hoveredIndex === index ? 'page3_hovered' : ''}`}>
                    {hoveredIndex === index ? '✔' : `0${index + 1}`} 
                  </div>
                  <div className="page3_text-container">
                    <p className="page3_title">{item.title}</p>
                    <p className="page3_subtitle">{item.subtitle}</p>
                  </div>
                </div>
                <hr className={`page3_hr-1 ${hoveredIndex === index ? 'page3_hovered' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      </Container>
    );
  }
}
