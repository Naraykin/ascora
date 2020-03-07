import React, { useState, useEffect } from 'react';

function ProjectPreview({ project, setBackground, activeProject }) {

    const ACTIVE_CLASS = 'project-preview_active';

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(activeProject === project._id) setIsActive(true);
        else setIsActive(false)
    }, [activeProject]);

    return (
        <div className={ `project-preview ${isActive ? ACTIVE_CLASS : ''}` }>
            <div className="project-preview__image-container">
                <img className="project-preview__image" src={ project.image } alt={ project.title } />
            </div>
        </div>
    )
}

export default ProjectPreview;