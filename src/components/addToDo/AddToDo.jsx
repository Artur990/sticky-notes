import { connect } from "react-redux";
import { Component } from "react";

import { addNote } from "../../store/action";

import "./AddToDo.scss";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      valueDate: "",
      todos: [],
      valueTitle: "",
      valueCalendar: "",
    };
    console.log(this);
  }

  handlerTitle(e) {
    this.setState({ valueTitle: e.target.value });
  }

  onDeleteTask = (itemId) => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };
  onChangeDate(e) {
    console.log(new Date().toLocaleString());
    this.setState({ valueCalendar: e.toLocaleString() });
  }
  submitHandler(e) {
    e.preventDefault();

    // console.log(this.state.valueTitle);
    const obj = {
      name: this.state.valueTitle,
      id: Date.now(),
      date: this.state.valueCalendar,
      dateAdd: new Date().toLocaleString(),
    };
    this.props.addNote({ id: Date.now(), name: this.state.valueTitle });
    if (this.state.valueTitle !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ valueTitle: "" });
      this.setState({ valueDate: "" });
    }
  }
  onDelateTask = (event) => {
    this.setState({
      todos: [...this.state.todos].filter((e) => e.id !== event),
    });
  };

  render() {
    const mylist = this.props.todoss.map((todo) => (
      <li className="todo_item">
        {todo.name}

        <button>Edit</button>
        <button onClick={() => this.onDeleteTask(todo.id)}>Remove</button>
      </li>
    ));
    return (
      <>
        <div className="container__note">
          <div></div>
          <form onSubmit={this.submitHandler.bind(this)} className="note">
            <input
              className="note__title"
              placeholder="Dodaj tytuł"
              onChange={this.handlerTitle.bind(this)}
              value={this.state.valueTitle}
            />
            <button
              className="note__btn "
              onClick={this.submitHandler.bind(this)}
            >
              Dodaj Zadanie
            </button>
          </form>
          <ul className="todo_wrapper">{mylist}</ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ notesReducer: { count, todoss } }) => {
  return {
    count,
    todoss,
  };
};

const mapDispatchToProps = {
  addNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
