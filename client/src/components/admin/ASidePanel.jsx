import React from 'react'
import { useState } from 'react'

function ASidePanel({ children }) {
    return (
        <div className='a-side-panel'>
            { children }
        </div>
    )
}

export function ASideBlock({ children }) {
    return (
        <div className='a-side-panel-block'>
            { children }
        </div>
    )
}

export function ASideSearch({ label }) {
    const [value, setValue] = useState('');

    return (
        <div className='a-side-panel-search'>
            <label className='a-side-panel-search__label'>{ label }</label>
            <input className='a-side-panel-search__input' type='text' value={ value } onChange={ evt => setValue(evt.target.value) } />
        </div>
    )
}

export default ASidePanel;
