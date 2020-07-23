import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

//Components
import CardSection from '../components/card_section';
//data
import Data from '../data_section';
//styles
import './styles/main_page.css';

const MainPage = ({sessionStudent, sessionTeacher}) => {
    const { getUserStudentAuth } = sessionStudent;
    const { getUserTeacherAuth } = sessionTeacher;
    const isStudentAuth = getUserStudentAuth ? <Redirect to='/student_panel'/> : null;
    const isTeacherAuth = getUserTeacherAuth ? <Redirect to='/teacher_panel'/> : null;

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
        <Fragment>
            {isStudentAuth || isTeacherAuth}
            <div className='mainPage-container'>
                <div className='section-container'>{sections}</div>
            </div>
        </Fragment>
    )
}

export default MainPage;