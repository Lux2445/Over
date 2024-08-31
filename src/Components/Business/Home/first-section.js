import React, { Component } from 'react';
import Icon1 from '../../../images/business/icon_first_section.png';
import Laptop from '../../../images/business/project-laptop.png';
import { Container } from 'react-bootstrap';
// import '../style/style.css';

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
      // <Container>
      <div className='page1_first_section'>
        <div className='page1_first_section_wrapper'>
          <div className='page1_first_section_items'>
            <div className='page1_first_section_item_text'>
              <h1 className='page1_first_section_item_title'>Интернет</h1>
              <p className='page1_first_section_item_paragraph'> для вашего бизнеса</p>
            </div>
          </div> 
          <div className='page1_first_section_items'>
            <div className='page1_first_section_item_image'>
              <img src={Laptop} alt="" className='page1_first_section_image'/>
            </div>
          </div> 
        </div>
      </div>
      // </Container>
    );
  }
}
