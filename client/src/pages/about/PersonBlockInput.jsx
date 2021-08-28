import React, { useState, useEffect } from 'react';
import { Editor, EditorState, ContentState, RichUtils, convertFromHTML } from 'draft-js';
import { CHANGE_STATE_BLOCK, CHANGE_STATE_INLINE, CHANGE_STATE_FALSE, LANG_RU } from '../admin/AConstants/AConstants';
import 'draft-js/dist/Draft.css';
import { stateToHTML } from 'draft-js-export-html';
import AImageHandler from '../../components/admin/AImageHandler';
import ImageLoader from '../../components/ImageLoader';

function PersonBlockInput({ changeState, setChangeState, newState, isLeft, number, imageId, lang, nameRU, nameEN, descRU, descEN, setNewNameRU, setNewNameEN, setNewDescRU, setNewDescEN, setNewImage }) {
    const [personNameRU, setPersonNameRU] = useState("");
    const [personNameEN, setPersonNameEN] = useState("");
    const [personDescRU, setPersonDescRU] = useState("");
    const [personDescEN, setPersonDescEN] = useState("");
    const [personImageId, setPersonImageId] = useState("");
    const [editorStateRU, setEditorStateRU] = useState(() => EditorState.createEmpty());
    const [editorStateEN, setEditorStateEN] = useState(() => EditorState.createEmpty());
    //const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [showImageHandler, setShowImageHandler] = useState(false);
    //const [html, setHtml] = useState("");

    function onChange(state) {
        if(lang === LANG_RU) {
            setEditorStateRU(state)
        } else {
            setEditorStateEN(state)
        }
    }

    function nameRUOnChange(e) {
        setPersonNameRU(e.target.value);
    }

    function nameENOnChange(e) {
        setPersonNameEN(e.target.value);
    }

    useEffect(() => {
        setPersonImageId(imageId);
        setPersonNameRU(nameRU);
        setPersonNameEN(nameEN);
        setPersonDescRU(descRU);
        setPersonDescEN(descEN);
        setNewImage(imageId);
        setNewNameRU(nameRU);
        setNewNameEN(nameEN);
        setNewDescRU(descRU);
        setNewDescEN(descEN);
        console.log("An image id " + imageId);
    }, [imageId, nameEN, descRU, descEN]);

    useEffect(() => {
        if(personDescEN && personDescRU){
            if (lang === LANG_RU) {
                setPersonDescEN(stateToHTML(editorStateEN.getCurrentContent()));
            } else {
                setPersonDescRU(stateToHTML(editorStateRU.getCurrentContent()));
            }
        }
    }, [lang]);

    useEffect(() => {
        if(lang === LANG_RU){
            if(personDescRU) {
                const blocksFromHtml = convertFromHTML(personDescRU);
                const personDescState = ContentState.createFromBlockArray(blocksFromHtml.contentBlocks, blocksFromHtml.entityMap); 
                setEditorStateRU(() => EditorState.createWithContent(personDescState));
            } 
        } else {
            if(personDescEN) {
                const blocksFromHtml = convertFromHTML(personDescEN);
                const personDescState = ContentState.createFromBlockArray(blocksFromHtml.contentBlocks, blocksFromHtml.entityMap); 
                setEditorStateEN(() => EditorState.createWithContent(personDescState));
            } 
        }
    }, [personDescRU, personDescEN, lang])

    useEffect(() => {
        if(changeState !== CHANGE_STATE_FALSE){
            setChangeState(CHANGE_STATE_FALSE);
            if(lang === LANG_RU) {
                if(changeState === CHANGE_STATE_INLINE)
                    onChange(RichUtils.toggleInlineStyle(editorStateRU, newState));
                else if(changeState === CHANGE_STATE_BLOCK)
                    onChange(RichUtils.toggleBlockType(editorStateRU, newState))
            } else {
                if(changeState === CHANGE_STATE_INLINE)
                    onChange(RichUtils.toggleInlineStyle(editorStateEN, newState));
                else if(changeState === CHANGE_STATE_BLOCK)
                    onChange(RichUtils.toggleBlockType(editorStateEN, newState))
            }
        }
    }, [changeState]);

    useEffect(() => {
        if(lang === LANG_RU) setNewNameRU(personNameRU);
        else setNewNameEN(personNameEN);
    }, [personNameRU, personNameEN]);

    useEffect(() => {
        setNewDescRU(stateToHTML(editorStateRU.getCurrentContent()));
    }, [editorStateRU]);

    useEffect(() => {
        setNewDescEN(stateToHTML(editorStateEN.getCurrentContent()));
    }, [editorStateEN])

    useEffect(() => {
        setNewImage(personImageId);
    }, [personImageId]);

    let mod = isLeft ? "about__person-block_left" : "about__person-block_right";



    function imageClick() {
        setShowImageHandler(true);
        console.log("select image");
    };

    return (
        <div className={"about__person-block " + mod + " about__person-block_input" }>
            <span className="person-block__number" >{ number }</span>
            <div className="person-block__photo">
                <ImageLoader className="photo__image" onClick={ imageClick } imageId={ personImageId }/>
                <div className="photo__corner photo__corner_top-left" />
                <div className="photo__corner photo__corner_bottom-right" />
            </div>
            <div className="person-block__content-wrapper">
                <input type="text" value={ lang === LANG_RU ? personNameRU : personNameEN } placeholder="Имя, фамилия" onChange={ lang === LANG_RU ? nameRUOnChange : nameENOnChange } className="content-wrapper__heading content-wrapper__heading_input" />
                {
                    lang === LANG_RU ?
                        <Editor className="content-wrapper__content content-wrapper__content_input" editorState={ editorStateRU } onChange={ onChange } />
                    :
                        <Editor className="content-wrapper__content content-wrapper__content_input" editorState={ editorStateEN } onChange={ onChange } />
                }
            </div>
            <AImageHandler showState={ showImageHandler } setShowState={ setShowImageHandler } imageId={ personImageId } setImageId={ setPersonImageId } />
        </div>
    )
}

export default PersonBlockInput;