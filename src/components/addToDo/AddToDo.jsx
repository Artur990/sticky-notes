// import ToDoItems from "../todos/ToDoList";
import { Component } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./AddToDo.scss";
// import Counter from "../../store/Counter";
import { connect } from "react-redux";
// import { INCREMENT } from "../../store/actions/counter";
// import { addTodo } from "../../store/actions";
// import { ADDNOTE } from "../../store/actions/counter";
import { addNote } from "../../store/action";

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
            {/* <input
            className="note__content"
            type="text"
            placeholder="Dodaj zadanie"
            onChange={this.handlerContent}
            // value={valueContent}
          ></input> */}
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
