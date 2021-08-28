import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getImages } from '../../actions/imagesActions';

function AImageHandler({ image, getImages, showState, imageId, setShowState, setImageId}) {
    const [file, setFile] = useState();
    const [newImageTitle, setNewImageTitle] = useState("");
    const [selected, setSelected] = useState();

    const [images, setImages] = useState([]);

    useEffect(() => {
        setSelected(imageId);
    }, [imageId]);

    useEffect(() => {
        getImages();
    }, [getImages]);

    useEffect(() => {
        if(image) {
            setImages(image.images);
            console.log("Images count: " + image.images.length)
        }
    }, [image]);

    function upload() {

        if(file && newImageTitle) {
            console.log(JSON.stringify(file));
            const data = new FormData();
            data.append("image_title", newImageTitle)
            data.append("image", file);
            console.log("GOT_IMAGE: " + data.get('image'));
            axios.post('http://localhost:5000/api/files', data, { })
                .then(res => {
                    console.log("res: " + JSON.stringify(res));
                    if(res.data) {
                        if(res.data.location) {
                            console.log("location: " + res.data.location);
                            getImages();
                        } else {
                            console.log("no location");
                        }
                    }
                });
        } else {
            console.log("no file or title");
        }
    }

    function close() {
        setShowState(false);
    }

    function save() {
        setImageId(selected);
        close();
    }

    function ImagePreview({ link, title, isSelected, onClick }) {
        return <figure className={`image-handler__preview  ${ isSelected ? "image-handler__preview_selected" : "" }`} onClick={ onClick }>
            <img className="image-handler-preview__image" src={`${ link }`} alt={ title } style={{backgroundImage: `url()`}} />
            <figcaption className="image-handler-preview__title">{ title }</figcaption>
        </figure>
    }

    function checkImages() {
        return images.length ? true : false;
    }

    function listImages() {
        if(checkImages()) {

            const columnCount = Math.round(images.length / 5);
            let currentColumn = 1;
            for(let i = 1; i <= 5; i++) {
                for(let j = 1; j <= columnCount; j++) {
                            
                }
            }
            return images.map(img => <ImagePreview key={ img._id }
                isSelected={ img._id === selected }
                onClick={ () => setSelected(img._id) }
                link={img.link}
                title={ img.title } />);
        }
    }

    const COLUMN_DELTA = 4;

    function listFirstColumn(items) {
        if(checkImages()) {
            let column = Math.round(items.length / 4);
            //const out = items.slice(0, column);
            let out = [];
            for (let i = 0; i < items.length; i = i + COLUMN_DELTA) {
                out.push(items[i]);
            }
            return out.map(img => <ImagePreview key={ img._id }
                isSelected={ img._id === selected }
                onClick={ () => setSelected(img._id) }
                link={img.link}
                title={ img.title } />);
        }
    }
    
    function listSecondColumn(items) {
        if(checkImages()) {
            //const out = items.slice(column, 2*column);
            let out = [];
            for (let i = 1; i < items.length; i = i + COLUMN_DELTA) {
                out.push(items[i]);
            }
            return out.map(img => <ImagePreview key={ img._id }
                isSelected={ img._id === selected }
                onClick={ () => setSelected(img._id) }
                link={img.link}
                title={ img.title } />);
        }
    }
    
    function listThirdColumn(items) {
        if(checkImages()) {
            //const out = items.slice(2*column, 3*column);
            let out = [];
            for (let i = 2; i < items.length; i = i + COLUMN_DELTA) {
                out.push(items[i]);
            }
            return out.map(img => <ImagePreview key={ img._id }
                isSelected={ img._id === selected }
                onClick={ () => setSelected(img._id) }
                link={img.link}
                title={ img.title } />);
        }
    }

    function listFourthColumn(items) {
        if(checkImages()) {
            let out = [];
            for (let i = 3; i < items.length; i = i + COLUMN_DELTA) {
                out.push(items[i]);
            }
            return out.map(img => <ImagePreview key={ img._id }
                isSelected={ img._id === selected }
                onClick={ () => setSelected(img._id) }
                link={img.link}
                title={ img.title } />);
        }
    }



    return (
        <div className={`image-handler-overlay ${ showState ? "" : 'image-handler-overlay_hidden'}`}>
            <div className="image-handler">
                <div className="image-handler__top-menu">
                    <span onClick={ close }>Close</span>
                    <span onClick={ save }>Save</span>
                </div>
                <span className="image-handler__label">Изображения</span>
                <div className="image-hadler__selector">
                    <div className="image-hadler-selector__column">
                        { listFirstColumn(images) }
                    </div>
                    <div className="image-hadler-selector__column">
                        { listSecondColumn(images) }
                    </div>
                    <div className="image-hadler-selector__column">
                        { listThirdColumn(images) }
                    </div>
                    <div className="image-hadler-selector__column">
                        { listFourthColumn(images) }
                    </div>
                    {/*  */}
                </div>
                <div className="image-handler__upload">
                    <span>Загрузить изображение</span>
                    <input type='text' name='title' className="image-handler__input-text" value={ newImageTitle } onChange={ e => setNewImageTitle(e.target.value) } />
                    <input type='file' name="image" accept="image/*" className="image-handler__input-file" onChange={ e => setFile(e.target.files[0]) } />
                    <div onClick={ upload } className="image-handler__upload-button">UPLOAD</div>
                </div>
            </div>
        </div>
    )
}

AImageHandler.propTypes = {
    getImages: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    image: state.image
});

export default connect(mapStateToProps, { getImages })(AImageHandler);