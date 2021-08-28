import React from 'react'

export default function APageEditItem({ title, changedCondition, wrapperClass, children }) {

    return (
        <div className="page-edit-item">
            <div className="page-edit-item__top-wrapper">
                <span className="page-edit-item__title">{ title + (changedCondition ? "*" : "") }</span>
                <div className="page-edit-item__tools">
                    <span className="page-edit-item-tools__item">RU</span>
                    <span className="page-edit-item-tools__item">EN</span>
                    <span className="page-edit-item-tools__item">R</span>
                </div>
            </div>
            <div className={ wrapperClass }>
                { children }
            </div>
        </div>
    )
}
