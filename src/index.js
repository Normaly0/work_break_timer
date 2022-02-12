import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import style from './index.scss';
import Container from './container/container';
import reducers from './reducers/reducers';
import {update} from  './actions/actions';

let store = createStore(reducers, applyMiddleware(thunk));

window.addEventListener('load', () => {
  let el = document.querySelector('.preload');
  el.classList.remove('preload')
})

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50);

class App extends React.Component {
  render() {
    return (
        <div>
          <Container />
        </div>
    )
  }
}

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById('root'));