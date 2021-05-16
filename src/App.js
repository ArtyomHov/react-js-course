import React, { Component } from 'react';
import Todo from './components/Todo'

function App() {
    return (
      <div>
        <h1>My Todos</h1>
        <Todo text="Learn react"/>
        <Todo text="on real"/>
        <Todo text="application"/>
      </div>
    )
}

export default App;
