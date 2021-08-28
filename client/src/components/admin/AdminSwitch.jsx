import React from 'react';

function AdminSwitch({ state, setState, onClick }) {

    function onSwitch() {
        setState(!state);
        onClick();
    }

    return (
        <div className={`admin-switch ${ state ? 'admin-switch_active' : '' }`}
            onClick={ onSwitch }>
            <div className='admin-switch__back'>
                <div className='admin-switch__toggle'/>
            </div>
        </div>
    )
}

export default AdminSwitch;