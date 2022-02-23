import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import { rootReducer } from '.';

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
  name: 'TODOIT',
});

const initStore = (initialState: any) => createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export const wrapper = createWrapper(initStore, { debug: true });
