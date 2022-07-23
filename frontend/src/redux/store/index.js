import { configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// const store = configureStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// export default store;

import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const store = configureStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
