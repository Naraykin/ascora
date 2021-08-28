import React, { Fragment } from 'react'
import Helmet from 'react-helmet';
import ProjectsIcon from '../components/Icons/ProjectsIcon';

function Projects() {
    return (
        <Fragment>
            <Helmet>
                <title>Ascora | Проекты</title>
            </Helmet>
            <div className='projects'>
                <div className="page-heading">
                    <ProjectsIcon />
                    <h1 className='projects__title'>Проекты нашей команды</h1>
                </div>
                <p className='projects__subtitle'>Проекция — механизм психологической защиты, в результате которого внутреннее ошибочно воспринимается как приходящее извне.</p>
            </div>
        </Fragment>
    )
}

export default Projects;