import React from 'react';
import { Link } from 'react-router-dom';

function AdminSecondaryHeader({ title, backLabel, backLink, hasBack, hasSave, onSave, isSaveAvailabe }) {
    function defineLink() {
        if(hasBack) return <Link className='admin-secondary-header__link' to={ backLink }>{'<-'}{ backLabel }</Link>
        else return <></>
    }

    function defineSave() {
        if(hasSave) return <div onClick={ onSave } className={`admin-secodary-header__save ${ isSaveAvailabe ? "" : "admin-secodary-header__save_disabled"}` }>Сохранить изменения</div>;
    }

    return (
        <div className='admin-secondary-header'>
            { defineLink() }
            <h1 className={`admin-secondary-header__title ${hasBack ? '' : 'admin-secondary-header__title_no-back'}`}>{ title }</h1>
            { defineSave() }
        </div>
    )
}

export default AdminSecondaryHeader;