import React from "react";
import { render } from "react-dom";

let key = 0;

const Todo = props => (
  <li>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
    <button onClick={props.onDelete}>delete</button>
    <span>
      {props.todo.key} {props.todo.text}
    </span>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("TODO text please: ");
    this.setState({
      // When updating state, we should create a new one and reference to it instead
      // Spread into a new array
      todos: [...this.state.todos, { key: key++, text: text, checked: false }]
    });
  }

  removeToDo(key) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.key !== key)
    });
  }

  toggleToDo(key) {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.key === key ? { ...todo, checked: !todo.checked } : todo;
      })
    });
  }

  render() {
    // Using arrow fn syntax to bind 'this' to the App instance
    return (
      <div>
        <div>Todo count: {this.state.todos.length}</div>
        <div>Unchecked todo count: {this.state.todos.filter(todo => todo.checked === false).length}</div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              key={todo.key}
              todo={todo}
              onDelete={() => this.removeToDo(todo.key)} 
              onToggle={() => this.toggleToDo(todo.key)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
