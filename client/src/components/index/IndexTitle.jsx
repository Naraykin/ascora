import React from 'react'

function IndexTitle({ children, title, light }) {
    return (
        <div className={`index-title ${ light ? 'index-title_light' : '' }`}>
            { children }
            <h2 className='index-title__text'>{ title }</h2>
        </div>
    )
}

export default IndexTitle;