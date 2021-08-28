import React from 'react'

function MediaIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={ className } viewBox="0 0 84.62 80.77" shapeRendering="crispEdges">
            <path d="M80.77,11.54V76.93H73.08V42.31H11.54V76.93H3.85V3.85H19.23V26.93H65.39V3.85h7.69V0H0V80.77H84.62V11.54Zm-19.23,0V23.08H50V7.69H61.54ZM19.23,69.23H65.39v3.85H19.23Zm0-7.69H65.39v3.85H19.23Zm0-7.69H65.39v3.84H19.23Zm3.85-7.69H65.39V50H19.23V46.16Z"/>
            <rect x="76.93" y="7.69" width="3.84" height="3.85"/>
            <rect x="73.08" y="3.85" width="3.85" height="3.84"/>
        </svg>
    )
}

export default MediaIcon;