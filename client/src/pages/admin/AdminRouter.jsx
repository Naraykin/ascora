import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminIndex from './AdminIndex';

export default function AdminRouter() {
    return (
        <Fragment>
            <AdminHeader />
            <Switch>
                <Route exact path='/edit'>
                    <AdminIndex />
                </Route>
                <Route path='/edit/pages'></Route>
                <Route path='/edit/news'></Route>
                <Route path='/edit/projects'></Route>
                <Route path='/edit/materials'></Route>
                <Route path='/edit/about'></Route>
                <Route path='/edit/profile'></Route>
            </Switch>
        </Fragment>
    )
}
