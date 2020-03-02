import React, { Fragment } from 'react'
import Helmet from 'react-helmet';

function Projects() {
    return (
        <Fragment>
            <Helmet>
                <title>Ascora | Проекты</title>
            </Helmet>
            <div className='projects'>
                <h1 className='projects__title'>Проекты нашей команды</h1>
            </div>
        </Fragment>
    )
}

export default Projects;