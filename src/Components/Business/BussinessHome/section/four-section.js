// import React, { Component } from 'react'
import Icon1 from '../image/image 70.png'
import Icon2 from '../image/mikro.png'
import Icon3 from '../image/share.png'
import Icon4 from '../image/people.png'
import Icon5 from '../image/params.png'
import Icon6 from '../image/call-block.png'
import Icon7 from '../image/users 02.png'
// import { Container } from 'react-bootstrap';

// export default class FourSection extends Component {
//   render() {
//     return (
//       <Container>
//       <div className='page3_four_section'>
//         <div className='page3_four_section_wrapper'>
//           <h1 className='page3_four_section_wrapper_text'>IP-телефония для бизнеса</h1>
//           <div className='page3_four_section_wrapper_part1'>
//             <div className='page3_four_section_wrapper_part1_section1'>
//               <div className='page3_four_section_wrapper_part1_section1_title'>
//                 <p className='page3_four_section_wrapper_part1_section1_text'>
//                   Городские номера для бизнеса — общайтесь на выгодных условиях с сотрудниками, партнёрами и клиентами по всей Республики Таджикистан и за её пределами
//                 </p>
//               </div>
//               <div className='page3_four_section_wrapper_part1_section1_title_button'>
//                 <button className='page3_four_section_wrapper_part1_section1_button1'>Подробное</button>
//                 <button className='page3_four_section_wrapper_part1_section1_button2'>Заказать</button>                    
//               </div>
//             </div>
//             <div className='page3_four_section_wrapper_part1_section2'>
//               <img src={Icon1} alt='' className='page3_four_section_wrapper_part1_section2_image'/>
//             </div>
//           </div>
//           <div className='page3_four_section_wrapper_part2'>
//             <div className="page3_grid-container">
//               <div className="page3_grid-item">
//                 <div className="page3_microphone-container">
//                   <img src={Icon2} alt='' className="page3_microphone-icon"/>
//                   <div className="page3_wave page3_wave1"></div>
//                   <div className="page3_wave page3_wave2"></div>
//                   <div className="page3_wave page3_wave3"></div>
//                 </div>
//                 <p className='page3_grid-item-text page3_grid-item-text-first1'>
//                   Запись всех звонков. Оценка разговоров клиентами. Аналитика речи.
//                 </p> 
//               </div>
//               <div className="page3_grid-item">
//                 <div className="page3_microphone-container">
//                   <img src={Icon3} alt='' className='page3_grid-item-image2'/>
//                   <div className="page3_wave page3_wave1"></div>
//                   <div className="page3_wave page3_wave2"></div>
//                   <div className="page3_wave page3_wave3"></div>
//                 </div>
//                 <p className='page3_grid-item-text page3_grid-item-text-second'>
//                   Объединить офисы в единую корпоративную телефонную сеть
//                 </p>
//               </div>
//               <div className="page3_grid-item">
//                 <div className="page3_microphone-container">
//                   <img src={Icon4} alt='' className='page3_grid-item-image2'/>
//                   <div className="page3_wave page3_wave1"></div>
//                   <div className="page3_wave page3_wave2"></div>
//                   <div className="page3_wave page3_wave3"></div>
//                 </div>
//                 <p className='page3_grid-item-text page3_grid-item-text-third'>
//                   Организовать работу колл-центра с многоканальным номером
//                 </p>
//               </div>
//               <div className="page3_grid-item">
//                 <div className="page3_microphone-container">
//                   <img src={Icon5} alt='' className='page3_grid-item-image2'/>
//                   <div className="page3_wave page3_wave1"></div>
//                   <div className="page3_wave page3_wave2"></div>
//                   <div className="page3_wave page3_wave3"></div>
//                 </div>
//                 <p className='page3_grid-item-text page3_grid-item-text-four'>
//                   Обеспечить контроль за звонками сотрудников и автоматическое управление вызовами.
//                 </p>
//               </div>
//               <div className="page3_grid-item">
//                 <div className="page3_microphone-container">
//                   <img src={Icon6} alt='' className='page3_grid-item-image2'/>
//                   <div className="page3_wave page3_wave1"></div>
//                   <div className="page3_wave page3_wave2"></div>
//                   <div className="page3_wave page3_wave3"></div>
//                 </div>
//                 <p className='page3_grid-item-text page3_grid-item-text-five'>
//                   Подключить любое количество городских телефонных номеров
//                 </p>
//               </div>
//               <div className="page3_grid-item">
//                 <div className="page3_microphone-container">
//                   <img src={Icon7} alt='' className='page3_grid-item-image2 page3_image'/>
//                   <div className="page3_wave page3_wave1"></div>
//                   <div className="page3_wave page3_wave2"></div>
//                   <div className="page3_wave page3_wave3"></div>
//                 </div>
//                 <p className='page3_grid-item-text page3_grid-item-text-six'>
//                   Еороткий номер телефона каждому абоненту внутри компании для бесплатных звонков
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </Container>
//     )
//   }
// }




import React, { Component } from 'react';

class IpTelephonySection extends Component {
  render() {
    return (
      <div className="ip-telephony-section">
        <h2>IP-телефония для бизнеса</h2>
        <div className="content-wrapper">
          <div className="text-content">
            <p>
              Городские номера для бизнеса — общайтесь на выгодных условиях с сотрудниками, партнёрами и клиентами по всей Республике Таджикистан и за её пределами.
            </p>
            <div className="button-group">
              <button className="btn-second">Подробнее</button>
              <button className="btn-first">Заказать</button>
            </div>
          </div>
          <div className="image-content">
            <img src={Icon1} alt="IP-телефония" />
          </div>
        </div>
        <div className="features">
          <div className="feature-item">
            <i className="icon icon-call-recording"></i>
            <img src={Icon2} alt="Feature 1" />
            <p>Запись всех звонков. Оценка разговоров клиентами. Аналитика речи.</p>
          </div>
          <div className="feature-item">
            <i className="icon icon-network"></i>
            <img src={Icon3} alt="Feature 2" />
            <p>Объединить офисы в единую корпоративную телефонную сеть</p>
          </div>
          <div className="feature-item">
            <i className="icon icon-call-center"></i>
            <img src={Icon4} alt="Feature 3" />
            <p>Организовать работу колл-центра с многоканальным номером</p>
          </div>
          <div className="feature-item">
            <i className="icon icon-call-control"></i>
            <img src={Icon5} alt="Feature 4" />
            <p>Обеспечить контроль за звонками сотрудников и автоматическое управление вызовами</p>
          </div>
          <div className="feature-item">
            <i className="icon icon-phone"></i>
            <img src={Icon6} alt="Feature 5" />
            <p>Подключить любое количество городских телефонных номеров</p>
          </div>
          <div className="feature-item">
            <i className="icon icon-direct-number"></i>
            <img src={Icon7} alt="Feature 6" />
            <p>Единый номер телефона каждому абоненту внутри компании для бесплатных звонков</p>
          </div>
        </div>
      </div>
    );
  }
}

export default IpTelephonySection;
