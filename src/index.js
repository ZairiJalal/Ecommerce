import { Preloader } from './components/common';
import 'normalize.css/normalize.css';
import React from 'react';
import { render } from 'react-dom';
import 'react-phone-input-2/lib/style.css';
import { onAuthStateFail, onAuthStateSuccess } from './redux/actions/authActions';
import configureStore from './redux/store/store';
import './styles/style.scss';
import WebFont from 'webfontloader';
import App from './App';
import firebase from './services/firebase';

import ReactDOM from 'react-dom';

const { store, persistor } = configureStore();
const root = document.getElementById('app');

render(<Preloader />, root);
render(<App store={store} persistor={persistor} />, root);

