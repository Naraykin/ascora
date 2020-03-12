import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import './scss/main.scss';
import AppRouter from './pages/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Fragment>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap&subset=cyrillic" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic" rel="stylesheet" />
      </Helmet>
      <Provider store={ store }>
        <div className="App">
          <Router>
            <AppRouter />
          </Router>
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;
