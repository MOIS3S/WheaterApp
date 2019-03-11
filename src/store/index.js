import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {
    city: 'Madrid,es'
};

// esta linea es para utilizar la herramienta del navegador con middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux le pasamos la action y el estado inicial
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)))
    
// esta linea es para usar la herramienta del navegador sin middleware    
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())