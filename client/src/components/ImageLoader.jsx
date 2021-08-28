import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getImage } from '../actions/imagesActions';

function ImageLoader({ image, getImage, imageId, className, onClick, children }) {
    const [imageLink, setImageLink] = useState("");

    useEffect(() => {
        if(imageId) getImage(imageId);
    }, [imageId, getImage]);
    
    useEffect(() => {
        if(image) 
        {
            if(image.image._id === imageId) setImageLink(image.image.link);
        }
    }, [image]);

    return (
            <div className={ className } onClick={ onClick } style={{ backgroundImage: `url('${ imageLink }')`}}>
                { children }
            </div>
    )
}

ImageLoader.propTypes = {
    getImage: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    image: state.image
});

export default connect(mapStateToProps, { getImage })(ImageLoader);
// has getImage and image(single) in it's state
// props class, imageId, etc.