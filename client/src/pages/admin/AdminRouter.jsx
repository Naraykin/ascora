import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminIndex from './AdminIndex';

export default function AdminRouter() {
    return (
        <div className='admin-wrapper'>
            <AdminHeader />
            <div className='admin-container'>
                <Switch>
                    <Route exact path='/edit'>
                        <AdminIndex />
                    </Route>
                    <Route path='/edit/pages'>страницы</Route>
                    <Route path='/edit/news'>новости</Route>
                    <Route path='/edit/projects'>проекты</Route>
                    <Route path='/edit/materials'>материалы</Route>
                    <Route path='/edit/about'>о нас</Route>
                    <Route path='/edit/profile'>профиль</Route>
                </Switch>
            </div>
        </div>
    )
}
