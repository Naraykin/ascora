import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPerson, getPersons, deletePerson, editPerson } from '../../../actions/personActions';
import { LANG_RU, LANG_EN } from '../AConstants/AConstants';
import AdminLayout from '../../../components/admin/AdminLayout';
import APageEditItem from '../AComponents/APageEditItem';
import PersonBlock from '../../about/PersonBlock';
import twoDigit from '../../../commonFunctions/twoDigit';
import AEditPersonModal from '../AComponents/AEditPersonModal';

import ParashaIcon from '../../../components/Icons/Admin/ParashaIcon';
import KarandashaIcon from '../../../components/Icons/Admin/KarandashaIcon';

function APagesAbout({ person, addPerson, getPersons, deletePerson, editPerson }) {
    const pageNameInitial = 'О команде Ascora Games';
    const [pageName, setPageName] = useState(pageNameInitial);
    const [pageNameChanged, setPageNameChanged] = useState(false);
    const backLink = '/edit/pages/';
    const subtitleInitial = 'Ascora - это объединение людей, любящих игры, и тех, кто создает новые шедевры.';
    const [subtitle, setSubtitle] = useState(subtitleInitial);
    const [subtitleChanged, setSubtitleChanged] = useState(false);
    const [isModalShown, setIsModalShown] = useState(false);
    const [isSaveAvailable, setIsSaveAvailable] = useState(false);
    const [aboutPersons, setAboutPersons] = useState([]);
    const [personToEdit, setPersonToEdit] = useState({
        _id: "-1",
        number: "",
        isLeft: false,
        image_id: "",
        RU: {
            name: "",
            description: ""
        },
        EN: {
            name: "",
            description: ""
        }
    });
    const [personUpdates, setPersonUpdates] = useState({
        _id: "-1",
        image_id: "",
        RU: {
            name: "",
            description: "",
        },
        EN: {
            name: "",
            description: "",
        }
    });
    const [newPersonsIds, setNewPersonsIds] = useState([]);
    const bottomTextInitial = 'Будем знакомы';
    const [bottomText, setBottomText] = useState(bottomTextInitial);
    const [bottomTextChanged, setBottomTextChanged] = useState(false);
    const [updatePersons, setUpdatePersons] = useState(false);

    useEffect(() => {
        getPersons();
    }, [getPersons]);

    useEffect(() => {
        if(person) {
            if(person.persons.length) {
                setAboutPersons(person.persons);
                console.log("done");
            }
        }
    }, [person]);

    useEffect(() => {
        if (pageName === pageNameInitial) {
            setPageNameChanged(false)
        } else {
            setPageNameChanged(true)
        }
    }, [pageName]);

    useEffect(() => {
        if (subtitle === subtitleInitial) {
            setSubtitleChanged(false)
        } else {
            setSubtitleChanged(true)
        }
    }, [subtitle]);

    useEffect(() => {
        if (bottomText === bottomTextInitial) {
            setBottomTextChanged(false)
        } else {
            setBottomTextChanged(true)
        }
    }, [bottomText]);

    function changeOrder(initOrder, newOrder) {
        setAboutPersons(() => aboutPersons.map(pers => {
            if (pers.order === initOrder) {
                pers.order = newOrder;
            }  else if(pers.order === newOrder){
                pers.order = initOrder;
            }
            return pers;
        }));
    }

    function orderUp(order) {
        if(order - 1 > 0) changeOrder(order, order - 1)
    }

    function orderDown(order) {
        if(order + 1 <= aboutPersons.length) changeOrder(order, order + 1)
    }

    function savePerson() {
        setAboutPersons(aboutPersons.map(pers => {
            if(pers._id === personUpdates._id) {
                return {
                    _id: pers._id,
                    order: pers.order,
                    image_id: personUpdates.image_id,
                    is_shown: pers.is_shown,
                    RU: {
                        name: personUpdates.RU.name,
                        description: personUpdates.RU.description
                    },
                    EN: {
                        name: personUpdates.EN.name,
                        description: personUpdates.EN.description
                    }
                }
            }
            else {
                return pers;
            }
        }));
    }

    function removePerson(id) {
        let counter = 1;
        let result = aboutPersons.filter(pers => { 
                if(pers._id !== id) return pers;
            })
            .sort((a, b) => a.order - b.order);
        result = result.map(pers => {
            const order = counter;
            counter++;
            return {
                _id: pers._id,
                order: order,
                image_id: pers.image_id,
                is_shown: pers.is_shown,
                RU: {
                    name: pers.RU.name,
                    description: pers.RU.description,
                },
                EN: {
                    name: pers.EN.name,
                    description: pers.EN.description,
                }
            }
        });
        deletePerson(id);
        setAboutPersons(result);
    }

    function newPerson() {
        console.log("adding a newbie");
        const newOrder = aboutPersons.length + 1;
        const newId = newOrder + "";
        //let newIdsList = newPersonsIds;
        //let newPersons = aboutPersons;
        addPerson({
            order: newOrder,
            image_id: "",
            is_shown: false,
            RU: {
                name: "НОВЕНЬКИЙ " + newId,
                description: "Мы пока даже не знаем его имени, но без него у нас бы ничего не получилось."
            },
            EN: {
                name: "NEWBIE " + newId,
                description: "We don't even know his name yet, but we couldn't make it without him."
            }
        });
        //newIdsList.push(newId);
        //newPersons.push({
        //    _id: newId,
        //    order: newOrder,
        //    image_link: "",
        //    RU: {
        //        name: "НОВЕНЬКИЙ " + newId,
        //        description: "Мы пока даже не знаем его имени, но без него у нас бы ничего не получилось."
        //    },
        //    EN: {
        //        name: "NEWBIE " + newId,
        //        description: "We don't even know his name yet, but we couldn't make it without him."
        //    }
        //});
        //setNewPersonsIds(newIdsList);
        //setAboutPersons(newPersons);
        //setUpdatePersons(true);
    }

    function uploadPersonsUpdates() {
        aboutPersons.map(member => {
            editPerson(member);
            return member;
        });
    }

    function showTeam(newOnes) {
        if(newOnes) {
            setUpdatePersons(false);
        }
        let counter = 1
        if(aboutPersons) {
            return aboutPersons.sort((a, b) => a.order - b.order).map(member => {
                let num = twoDigit(counter);
                let isLeft = counter % 2 > 0;
                let firstArrowMod = counter === 1 ? "person-blcok-input-side-tools__arrow_inactive" : "";
                let secondArrowMod = counter === aboutPersons.length ? "person-blcok-input-side-tools__arrow_inactive" : "";
                counter++;
                return <div key={member._id} className="about__person-block-input-wrapper">
                            <div className="about__person-block-input__side-tools">
                                <div className={ `person-blcok-input-side-tools__arrow ${ firstArrowMod }` } onClick={ () => orderUp(member.order) }>{"<"}</div>
                                <div className={ `person-blcok-input-side-tools__arrow ${ secondArrowMod }` } onClick={ () => orderDown(member.order) }>{">"}</div>
                                <div className="person-blcok-input-side-tools__item person-blcok-input-side-tools__item_edit" onClick={ () => modifyPerson({ 
                                    _id: member._id,
                                    number: num,
                                    isLeft: isLeft,
                                    image_id: member.image_id,
                                    is_shown: member.is_shown,
                                    RU: {
                                        name: member.RU.name,
                                        description: member.RU.description
                                    },
                                    EN: {
                                        name: member.EN.name,
                                        description: member.EN.description
                                    }
                                })}>
                                        <KarandashaIcon />
                                </div>
                                <div className="person-blcok-input-side-tools__item person-blcok-input-side-tools__item_delete" onClick={ () => removePerson(member._id) }><ParashaIcon /></div>
                            </div> 
                            <PersonBlock  number={ num } isLeft={ isLeft } person={ member } />
                        </div>
            });
        }
    }

    function modifyPerson(toEdit) {
        setPersonToEdit(toEdit);
        setIsModalShown(true);
    }

    return (
        <AdminLayout title={ 'Редактирование страницы "' + pageName + '"' } backLink={ backLink } hasBack={ true } hasSave={ true } onSave={ uploadPersonsUpdates } isSaveAvailable={ isSaveAvailable } >
            <div className="page-edit-wrapper">
                <APageEditItem key="PAGENAME" title="Название страницы" changedCondition={ pageNameChanged } wrapperClass="edit-about__wrapper">
                    <input className="about__title about__title_input" type="text" value={ pageName } onChange={ e => setPageName(e.target.value) }></input>
                </APageEditItem>
                <APageEditItem key="SUBTITLE" title="Подзаголовок" changedCondition={ subtitleChanged } wrapperClass="edit-about__wrapper">
                    <input className="about__subtitle about__subtitle_input" type="text" value={ subtitle } onChange={ e => setSubtitle(e.target.value) }></input>
                </APageEditItem>
                <APageEditItem key="TEAM INFO" title="Информация о команде" wrapperClass="edit-about__wrapper">
                    { showTeam(updatePersons) }
                    <div key="NEW_PERSON" className="about__person-block-input-wrapper">
                        <div className="person-block-input__add-new" onClick={ newPerson }>
                            <span>Добавить</span>
                        </div>
                    </div>
                </APageEditItem> 
                <APageEditItem key="BOTTOM_TEXT" title="Нижняя надпись" changedCondition={ bottomTextChanged } wrapperClass="edit-about__wrapper">
                    <input className="about__bottom about__bottom_input" type="text" value={bottomText} onChange={ e => setBottomText(e.target.value) }></input>
                </APageEditItem>
                <AEditPersonModal key="EDIT_PERSON" isShown={ isModalShown } setIsShown={ setIsModalShown } savePerson={ savePerson } setPersonUpdates={ setPersonUpdates } personToEdit={ personToEdit } />
            </div>
        </AdminLayout>
    )
}

APagesAbout.propTypes = {
    getPersons: PropTypes.func.isRequired,
    addPerson: PropTypes.func.isRequired,
    editPerson: PropTypes.func.isRequired,
    deletePerson: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    person: state.person
});

export default connect(mapStateToProps, { getPersons, addPerson, editPerson, deletePerson })(APagesAbout);
