import React from 'react';
import { Link } from 'react-router-dom';

export default function AEditLink({ link, title, info, children }) {
    return (
        <Link className='admin-edit-link' to={ link }>
            { children }
            <h3 className='admin-edit-link__title'>{ title }</h3>
            <p className='admin-edit-link__info'>{ info }</p>
        </Link>
    )
}
