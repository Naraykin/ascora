import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import MediaIcon from '../../components/Icons/MediaIcon';


function Arts() {
    return (
        <Fragment>
            <Helmet>
                <title>Ascora | Арты</title>
            </Helmet>
            <div className="media">
                <div className="media-top">
                    <div className="page-heading">
                        <MediaIcon />
                        <h1 className="title media__title">Арты</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Arts;