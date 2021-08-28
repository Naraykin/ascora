import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Index from './Index';
import News from './News';
import Projects from './Projects';
import MediaRouter from './MediaRouter';
import AdminRouter from './admin/AdminRouter';
import About from './About';
import NoMatch from './NoMatch';

function AppRouter() {
    return (
        <Fragment>
            <Switch>
                <Route path='/edit'>
                    <AdminRouter />
                </Route>
                <Route path='/'>
                    <Header />
                    <div className='main-wrapper'>
                        <Switch>
                            <Route exact path='/'>
                                <Index />
                            </Route>
                            <Route path='/News'>
                                <News />
                            </Route>
                            <Route path='/projects'>
                                <Projects />
                            </Route>
                            <Route path='/media'>
                                <MediaRouter />
                            </Route>
                            <Route path='/about'>
                                <About />
                            </Route>

                            <Route path='*'>
                                <NoMatch />
                            </Route>
                        </Switch>
                    </div>
                    <Footer />
                </Route>
            </Switch>
            
        </Fragment>
    )
}

export default AppRouter;