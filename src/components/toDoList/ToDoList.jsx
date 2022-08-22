import { Component } from "react";
import "./ToDoList.scss";
class ToDoList extends Component {
  render() {
    console.log(this.props.todos.name);
    console.log(this.props.todos.id);

    return (
      <div>
        <ul key={this.props.todos.id}>
          <li>{this.props.todos.name}</li>
          <li>{this.props.todos.date.toLocaleString()}</li>
        </ul>
        {/* <button
          onClick={() => this.props.todos.onDelateTask(this.props.todos.id)}
        >
          Usuń
        </button> */}
      </div>
    );
  }
}

export default ToDoList;
