import React from 'react'

function AdminButton({ classMod, label, onClick }) {
    return (
        <button
            className={`admin-button ${classMod ? 'admin-button_' + classMod : ''}`}
            onClick={ onClick } >
            { label }
        </button>
    )
}

export default AdminButton;