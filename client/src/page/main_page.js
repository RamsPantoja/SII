import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

//Components
import CardSection from '../components/card_section';
//data
import Data from '../data_section';
//styles
import './styles/main_page.css';

const MainPage = ({sessionStudent}) => {
    const { getUserStudentAuth } = sessionStudent;
    const isStudentAuth = getUserStudentAuth ? <Redirect to='/student'/> : null;

    const data = Data;
    const sections = data.map((item) => {
        return(
            <Fragment>
                {isStudentAuth}
                <div key={item.id} className='cardSection-container'>
                    <CardSection 
                    img={item.img}
                    section={item.section}
                    description={item.description}
                    buttonIn={item.button_in}
                    to={item.to}/>
                </div>
            </Fragment>
        )
    })

    return (
        <div className='mainPage-container'>
            <div className='section-container'>{sections}</div>
        </div>
    )
}

export default MainPage;