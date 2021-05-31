import React from 'react'
//redux
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
//reducers
import slideReducer from './components/functions/slideReducer'
//components
import Header from './components/UI/header'
//pages
import Main from './pages/main'
//style
import './assets/css/main.css'

const store = createStore(combineReducers({slideReducer: slideReducer}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return <>
    <Header />
    <Provider store={store}>
      <Main />
    </Provider>
  </>
}

export default App;
