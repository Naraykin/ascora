import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getProjects, } from '../../actions/projectsActions';
import PropTypes from 'prop-types';

import ProjectPreview from '../ProjectPreview';

function ProjectsSection({ getProjects, project }) {
    const PROJECTS_TITLE = 'Проекты';

    const [projects, setProjects] = useState([]);
    const [activeProjectID, setActiveProjectID] = useState(0);
    const [projectsBackground, setProjectsBackground] = useState();
    const [projectsCurrentTitle, setProjectsCurrentTitle] = useState('...');
    const [projectsCurrentContent, setProjectsCurrentContent] = useState('...');
    const [currentBackgroundList, setCurrentBackgroundList] = useState([]);

    const [changed, setChanged] = useState(false);

    const [backgroundSliding, setBackgroundSliding] = useState(false);

    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
    const [currentMax, setCurrentMax] = useState(0);

    let interval= null;

    useEffect(() => {
        getProjects();
        setBackgroundSliding(true);

        return () => {
            setBackgroundSliding(false);
            clearInterval(interval);

        }
    }, []);

    useEffect(() => {
        if(project) setProjects(project.projects);
    }, [project])

    useEffect(() => {
        if(projects.length) {
            const currentProject = projects.find(proj => proj._id === activeProjectID); 
            setProjectsCurrentTitle(currentProject.title);
            setProjectsCurrentContent(currentProject.content);
            setCurrentBackgroundList(currentProject.backgrounds);
            setCurrentBackgroundIndex(0);
            setCurrentMax(currentProject.backgrounds.length - 1);
        }
    }, [activeProjectID, projects]);


    useEffect(() => {
        if (backgroundSliding) interval = setInterval(() => {
            nextBg();
            setChanged(!changed);
        }, 5000);

        return () => clearInterval(interval);
      }, [backgroundSliding, changed]);

    useEffect(() => {
        if(currentBackgroundList.length) setProjectsBackground(currentBackgroundList[0]);
        else setProjectsBackground(null);
    }, [currentBackgroundList])

    function nextBg() {
        if(currentBackgroundIndex + 1 <= currentMax) {
            setCurrentBackgroundIndex(currentBackgroundIndex + 1);
        } else {
            setCurrentBackgroundIndex(0);
        }
    }

    function showProjects() {
        return (
            <TransitionGroup>
                { projects.map(project => (
                    <CSSTransition key={ project._id } timeout={ 500 }>
                        <ProjectPreview project={ project } activeProject={ activeProjectID } setActiveProject={ () => setActiveProjectID(project._id) } onClick={ () => setActiveProjectID(project._id) }  />
                    </CSSTransition>
                )) }
            </TransitionGroup>
        );
    }

    function showBackgroundDots() {
        let count = 0;
        if(projects.length) {
            const currentProject = projects.find(proj => proj._id === activeProjectID); 
            return currentProject.backgrounds.map(bg => <div key={ count } className={ `index-project__slider-dot ${ currentBackgroundIndex === count++ ? 'index-project__slider-dot_active' : ''}` } />)
        }
    }

    return (
        <section className='index-projects' style={{ backgroundImage: `url('${ currentBackgroundList[currentBackgroundIndex] }')` }}>
            <div className='index-projects__overlay'>
                <h2 className='index-projects__title'>{ PROJECTS_TITLE }</h2>
                <div className='index-projects__info-wrapper'>
                    <h3 className='index-projects-current__title'>{ projectsCurrentTitle }</h3>
                    <p className='index-projects-current__content'>{ projectsCurrentContent }</p>
                </div>
                <div className="index-projects__wrapper">
                    { showProjects() }
                </div>
                <div className='index-project__slider-row'>
                    { showBackgroundDots() }
                </div>
            </div>
        </section>
    )
}

ProjectsSection.propTypes = {
    getProjects: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    project: state.project
});

export default connect(mapStateToProps, { getProjects })(ProjectsSection);