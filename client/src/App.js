import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import './scss/main.scss';
import AppRouter from './pages/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LangContext } from './components/LanguageContext';
import { LANG_RU } from './pages/admin/AConstants/AConstants';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import store from './store';


function App() {
  const [langContext, setLangContext] = useState(LANG_RU);
  Amplify.configure(aws_exports);
  return (
    <Fragment>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap&subset=cyrillic" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic" rel="stylesheet" />
      </Helmet>
      <Provider store={ store }>
        <LangContext.Provider value={[langContext, setLangContext]}>
          <div className="App">
            <Router>
              <AppRouter />
            </Router>
          </div>
        </LangContext.Provider>
      </Provider>
    </Fragment>
  );
}

export default App;
