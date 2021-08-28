import React, { useEffect, useState } from 'react';
import { CHANGE_STATE_INLINE, CHANGE_STATE_BLOCK, CHANGE_STATE_FALSE, LANG_RU, LANG_EN } from '../AConstants/AConstants';
//import { RichUtils } from 'draft-js';
import PersonBlockInput from '../../about/PersonBlockInput';

export default function AEditPersonModal({ isShown, setIsShown, savePerson, setPersonUpdates, personToEdit }) {
    const [showClassName, setShowClassName] = useState("edit-overlay_hidden");
    const [changeState, setChangeState] = useState(CHANGE_STATE_FALSE);
    const [newState, setNewState] = useState('');

    const [editLang, setEditLang] = useState(LANG_RU);

    const [id, setId] = useState("");
    const [nameRU, setNameRU] = useState("");
    const [descRU, setDescRU] = useState("");
    const [nameEN, setNameEN] = useState("");
    const [descEN, setDescEN] = useState("");
    const [image, setImage] = useState("");
    const [isLeft, setIsLeft] = useState(false);
    const [number, setNumber] = useState("");

    const [newNameRU, setNewNameRU] = useState("");
    const [newDescRU, setNewDescRU] = useState("");
    const [newNameEN, setNewNameEN] = useState("");
    const [newDescEN, setNewDescEN] = useState("");
    const [newImage, setNewImage] = useState("");

    useEffect(() => {
        setId(personToEdit._id);
        setIsLeft(personToEdit.isLeft);
        setNumber(personToEdit.number)
        setImage(personToEdit.image_id);
        setNameRU(personToEdit.RU.name);
        setDescRU(personToEdit.RU.description);
        setNameEN(personToEdit.EN.name);
        setDescEN(personToEdit.EN.description);
        setNewImage(personToEdit.image_id);
        setNewNameRU(personToEdit.RU.name);
        setNewDescRU(personToEdit.RU.description);
        setNewNameEN(personToEdit.EN.name);
        setNewDescEN(personToEdit.EN.description);
    }, [personToEdit]);

    useEffect(() => {
        if(isShown) setShowClassName("edit-overlay");
        else setShowClassName("edit-overlay_hidden");
    }, [isShown]);

    useEffect(() => {
        setPersonUpdates({
            _id: id,
            image_id: newImage,
            RU: {
                name: newNameRU,
                description: newDescRU
            },
            EN: {
                name: newNameEN,
                description: newDescEN
            }
        });
    }, [id, setPersonUpdates, newNameRU, newNameEN, newDescRU, newDescEN, newImage]);

    function ApplyState(state, kind) {
        setChangeState(kind);
        setNewState(state);
    }

    function close() {
        setIsShown(false)
    }

    function save() {
        savePerson();
        close();
    }

    return (
        <div className={ showClassName }>
            <div className="edit-person-modal">
                <div className="edit-person-modal__wrapper">
                    <div className="modal__top-menu">
                        <span className="modal-top-menu__item modal-top-menu__item_close" onClick={ close }>Закрыть</span>
                        <span className="modal-top-menu__item modal-top-menu__item_save"onClick={ save }>Сохранить</span>
                    </div>
                    <div className="modal__tools">
                        <div className="modal-tools-row">
                            <span className="modal-tools__hint">Стили слов:</span>
                            <span onClick={ () => ApplyState('BOLD', CHANGE_STATE_INLINE) } className="modal-tools__item modal-tools__item_bold">Жирный</span>
                            <span onClick={ () => ApplyState('ITALIC', CHANGE_STATE_INLINE) } className="modal-tools__item modal-tools__item_italic">Курсив</span>
                            <span onClick={ () => ApplyState('UNDERLINE', CHANGE_STATE_INLINE) } className="modal-tools__item modal-tools__item_underline">Подчеркивание</span>
                            <span onClick={ () => ApplyState('STRIKETHROUGH', CHANGE_STATE_INLINE) } className="modal-tools__item modal-tools__item_strikethrough">Зачёркнутый</span>
                        </div>
                        <div className="modal-tools-row">
                            <span className="modal-tools__hint">Стили блоков:</span>
                            <span onClick={ () => ApplyState('header-one', CHANGE_STATE_BLOCK) } className="modal-tools__item">H1</span>
                            <span onClick={ () => ApplyState('header-two', CHANGE_STATE_BLOCK) } className="modal-tools__item">H2</span>
                            <span onClick={ () => ApplyState('header-three', CHANGE_STATE_BLOCK) } className="modal-tools__item">H3</span>
                            <span onClick={ () => ApplyState('header-four', CHANGE_STATE_BLOCK) } className="modal-tools__item">H4</span>
                            <span onClick={ () => ApplyState('header-five', CHANGE_STATE_BLOCK) } className="modal-tools__item">H5</span>
                            <span onClick={ () => ApplyState('header-six', CHANGE_STATE_BLOCK) } className="modal-tools__item">H6</span>
                            <span onClick={ () => ApplyState('unstyled', CHANGE_STATE_BLOCK) } className="modal-tools__item">Сброс</span>
                            <span onClick={ () => ApplyState('paragraph', CHANGE_STATE_BLOCK) } className="modal-tools__item">Параграф</span>
                            <span onClick={ () => ApplyState('blockquote', CHANGE_STATE_BLOCK) } className="modal-tools__item">Цитата</span>
                            <span onClick={ () => ApplyState('code-block', CHANGE_STATE_BLOCK) } className="modal-tools__item">Код</span>
                            <span onClick={ () => ApplyState('unordered-list-item', CHANGE_STATE_BLOCK) } className="modal-tools__item">Список</span>
                            <span onClick={ () => ApplyState('ordered-list-item', CHANGE_STATE_BLOCK) } className="modal-tools__item">Пронумерованный</span>
                        </div>
                    </div>
                    <div className="modal__content">
                        <PersonBlockInput
                            changeState={ changeState }
                            setChangeState={ setChangeState }
                            newState={ newState }
                            isLeft={ isLeft }
                            number={ number }
                            nameRU={ nameRU }
                            nameEN={ nameEN }
                            descRU={ descRU } 
                            descEN={ descEN } 
                            imageId={ image }
                            lang={ editLang }
                            setNewNameRU={ setNewNameRU } 
                            setNewNameEN={ setNewNameEN } 
                            setNewDescRU={ setNewDescRU } 
                            setNewDescEN={ setNewDescEN } 
                            setNewImage={ setNewImage } 
                            />
                    </div>
                    <div>
                        <span onClick={ () => setEditLang(LANG_RU) }>RU</span>
                        <span onClick={ () => setEditLang(LANG_EN) }>EN</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
