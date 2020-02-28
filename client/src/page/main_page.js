import React, { Fragment } from 'react';

//Components
import CardSection from '../components/card_section';
//data
import Data from '../data_section';
//styles
import './styles/main_page.css';

const MainPage = () => {
    const data = Data;
    const sections = data.map((item) => {
        return(
            <div key={item.id} className='cardSection-container'>
                <CardSection 
                img={item.img}
                section={item.section}
                description={item.description}
                buttonIn={item.button_in}
                to={item.to}/>
            </div>
        )
    })

    return (
        <div className='mainPage-container'>
            <div className='section-container'>{sections}</div>
        </div>
    )
}

export default MainPage;