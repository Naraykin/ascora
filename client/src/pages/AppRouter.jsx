import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Index from './Index';
import News from './News';
import Projects from './Projects';
import Media from './Media';
import About from './About';
import NoMatch from './NoMatch';

function AppRouter() {
    return (
        <Fragment>
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
                        <Media />
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
        </Fragment>
    )
}

export default AppRouter;