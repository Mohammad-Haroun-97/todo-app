import React from 'react';
import Settings from './context/settingsContext.js';
import Auth from './context/authContext.js';
import ToDo from './components/todo/todo.js';
import Header from './components/header.js';
import SettingForm from '../src/components/todo/FormForSetting';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import Footer from './components/footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/todo/Login.js';
export default class App extends React.Component {
  render() {
    return (


     
      <Router>
         
        
        <Switch>
          <Auth>
          <Settings>
            <Route exact path="/">
              <Header />
              <Login/>
              <ToDo />
              <Footer />
            </Route>
            <Route path="/form">
              <Header />
              <SettingForm />
              <Footer />
            </Route>
          </Settings>
          </Auth>
        </Switch>
      </Router>
    );
  }
}