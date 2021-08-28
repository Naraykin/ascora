import React from 'react'

export default function AdminMetaRow({ title, children }) {
    return (
        <div className='admin-meta-row'>
            <label className='admin-meta-row__label'>{ title }</label>
            { children }
        </div>
    )
}
