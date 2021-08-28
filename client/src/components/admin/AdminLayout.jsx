import React from 'react';
import AdminSecondaryHeader from './AdminSecondaryHeader';

function AdminLayout({ children, withFooter, title, backLabel, backLink, hasBack, hasSave, onSave, isSaveAvailable }) {


    return (
        <div className={ `admin-layout ${ withFooter ? 'admin-layout_footered' : '' }` } >
            <AdminSecondaryHeader
                title={ title }
                backLabel={ backLabel }
                backLink={ backLink }
                hasBack={ hasBack }
                hasSave={ hasSave }
                onSave={ onSave }
                isSaveAvailabe={ isSaveAvailable } />
            <div className='admin-layout__wrapper'>
                { children }
            </div>    
        </div>
    )
}

export default AdminLayout;