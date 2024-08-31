import React, { Component } from 'react';
import FirstSection from './first-section';
import SecondSection from './second-section';
import BusinessPlansSlider from './third-section';
import FourSection from './four-section';
import FiveSection from './fife-section';

// import './Home.css';
// import './style/reset.css';
import './style/style.css';
// import { Container } from 'react-bootstrap';
// import Equipment from '../../Equipment/Equipment';
class TariffsBusiness extends Component {
    render() {
        return (
            <div>
                {/* <Container> */}
                    <FirstSection />
                    <SecondSection />
                    <BusinessPlansSlider />
                    <FourSection />
                    <div className='businessEquipment'>

                    {/* <Equipment/> */}
                    </div>
                    <FiveSection />
                    
                {/* </Container> */}
      

            </div>
        );
    }
}

export default TariffsBusiness;