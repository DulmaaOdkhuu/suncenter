import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './index.css';
import App from './App';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const rootReducer = combineReducers({
//   });

// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));

const app = (
  
        <BrowserRouter>
            <App />
        </BrowserRouter>

);

ReactDOM.render( app, document.getElementById( 'root' ) );


