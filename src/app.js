import React from 'react';

import ToDo from './components/todo/todo.js';
import Sittings from '../src/context/settings'

export default class App extends React.Component {
  render() {
    return (
      <Sittings>
      <ToDo />
      </Sittings>
    );
  }
}
