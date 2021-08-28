import React from 'react';

function ParashaIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={ className } viewBox="0 0 24 32">
            <polygon points="22 32 2 32 2 9 4 9 4 30 20 30 20 9 22 9 22 32"/>
            <path  d="M17,5V0H7V5H0V7H24V5ZM9,5V2h6V5Z"/>
            <rect x="8" y="12" width="2" height="14"/>
            <rect x="14" y="12" width="2" height="14"/>
        </svg>
    )
}

export default ParashaIcon;