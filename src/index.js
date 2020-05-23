import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import reduxThunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import './assets/stylesheets/index.scss';
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
