import React                 from 'react';
import ReactDOM              from 'react-dom';
import App                   from './App';
import {IntlProvider}        from 'react-intl';
import {translation}         from './translations/en';
import {Provider}            from 'react-redux';
import {createStore}         from 'redux';
import chatbotApp            from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


let store = createStore(chatbotApp);


ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale='en' messages={translation}>
      <App/>
    </IntlProvider>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
