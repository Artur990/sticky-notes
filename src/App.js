import NavColor from "./components/navColor/NavColor";
import NavMenu from "./components/navMenu/NavMenu";
import AddTodo from "./components/addToDo/AddToDo";
import "./App.css";
function App() {
  return (
    <div className="app">
      <NavColor />
      <NavMenu />
      {/* <h1>Notes</h1> */}
      {/* <AddTodo /> */}
    </div>
  );
}

export default App;
