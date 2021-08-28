import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AIndex from './AIndex';
import ANews from './ANews';
import AEditPost from './AEditPost';
import AProjects from './AProjects';
import AProfiles from './AProfiles';
import APages from './APages';
import APagesIndex from './APages/APagesIndex'
import APagesNews from './APages/APagesNews'
import APagesProjects from './APages/APagesProjects'
import APagesMedia from './APages/APagesMedia'
import APagesAbout from './APages/APagesAbout';
import APagesSupport from './APages/APagesSupport'
import APagesDonate from './APages/APagesDonate'
import APagesFooter from './APages/APagesFooter'

import AMainSide from '../../components/admin/AMainSide';

export default function AdminRouter() {
    return (
        <div className='admin-wrapper'>
            <AMainSide />
            <div className='admin-container'>
                <div className='admin-page'>
                    <Switch>
                        <Route exact path='/edit'>
                            <AIndex />
                        </Route>
                        <Route exact path='/edit/pages'>
                            <APages />
                        </Route>
                        <Route exact path={'/edit/pages/index'}>
                            <APagesIndex />
                        </Route>
                        <Route exact path={'/edit/pages/news'}>
                            <APagesNews />
                        </Route>
                        <Route exact path={'/edit/pages/projects'}>
                            <APagesProjects />
                        </Route>
                        <Route exact path={'/edit/pages/media'}>
                            <APagesMedia />
                        </Route>
                        <Route exact path={'/edit/pages/about'}>
                            <APagesAbout />
                        </Route>
                        <Route exact path={'/edit/pages/support'}>
                            <APagesSupport />
                        </Route>
                        <Route exact path={'/edit/pages/donate'}>
                            <APagesDonate />
                        </Route>
                        <Route exact path={'/edit/pages/footer'}>
                            <APagesFooter />
                        </Route>
                        <Route exact path='/edit/news'>
                            <ANews />
                        </Route>
                        <Route path={`/edit/news/new-post`}>
                            <AEditPost isNewPost={ true } />
                        </Route>  
                        <Route path={`/edit/news/:id`}>
                            <AEditPost isNewPost={ false } />
                        </Route>                    
                        <Route path='/edit/projects'>
                            <AProjects />
                        </Route>
                        <Route path='/edit/materials'>материалы</Route>
                        <Route path='/edit/profile'>профиль</Route>
                        <Route path='/edit/profiles'>
                            <AProfiles />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
