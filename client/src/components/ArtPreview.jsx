import React from 'react';

function ArtPreview({ art }) {
    return (
        <div className='art-preview' style={{ backgroundImage: `url('${art.image}')`}}>
            <div className='art-preview__overlay'>
                <h4 className='art-preview__title'>{ art.title }</h4>
                <p className='art-preview__description'>{ art.description }</p>
            </div>
        </div>
    )
}

export default ArtPreview;