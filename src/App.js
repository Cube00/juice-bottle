import React from 'react'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
//redux
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
//reducers
import slideReducer from './components/functions/slideReducer'
import linkReducer from './components/functions/linkReducer'
//components
import Header from './components/UI/header'
//pages
import Main from './pages/main'
import About from './pages/about'
import Flavours from './pages/flavours'
import Contact from './pages/contact'
//style
import './assets/css/main.css'

const store = createStore(combineReducers({slideReducer: slideReducer, linkReducer: linkReducer}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return <>
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/flavours">
            <Flavours />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </>
}

export default App;
