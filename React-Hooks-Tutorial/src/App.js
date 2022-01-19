import React, { useState } from "react";
import EventsComponent from "./components/Events/EventsComponent";
import UseStateComponent from "./components/States/UseStateComponent";
import TodosComponent from "./components/Todos/TodosComponent";
import PropsComponent from "./components/Props/PropsComponent";
import UseEffectComponent from "./components/UseEffect/UseEffectComponent";
import Covid19Component from "./components/CallAPI/Covid19Component";
import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import Hook from "./components/Countdown/Hook";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Cong viec 1", author: "trandung" },
    { id: 2, title: "Cong viec 2", author: "quachdung" },
  ]);

  const [todo, setTodo] = useState({
    title: "",
  });

  const changeTodo = (e) => {
    setTodo({
      id: Math.floor(Math.random() * 1000),
      title: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.title !== "") setTodos([...todos, todo]);
    setTodo({
      title: "",
    });
  };
  const deleteTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };
  const timesUp = () => {
    alert("Time up!!!");
  };
  return (
    <div className="App">
      {/* <EventsComponent/> */}
      {/* <UseStateComponent/> */}
      {/* <PropsComponent todos={todos}  title="All todos" deleteTodo={deleteTodo}/> */}
      {/* <PropsComponent todos={todos.filter(item => item.author === "trandung")}  title="TranDung with todos"/> */}
      {/* <form onSubmit={(e) => onSubmit(e)}>
          <input type="text" name="todo" placeholder="Enter todo" value={todo.title} onChange={(e)=>changeTodo(e)}/>
          <button type="submit">Submit</button>
      </form> */}
      {/* <UseEffectComponent/> */}
      <Router>
        <ul>
          <li>
            <NavLink exact={true} to="/" activeClassName="selected">Covid-19</NavLink >
          </li>
          <li>
            <NavLink to="/countdown" activeClassName="selected">Countdown</NavLink >
          </li>
          <li>
            <NavLink to="/todos" activeClassName="selected">Todos</NavLink >
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Covid19Component title="Số liệu Covid-19" />
          </Route>
          <Route path="/countdown" exact>
            <Countdown timesUp={timesUp} />
          </Route>
          <Route path="/hook" exact>
            <Hook />
          </Route>
          <Route path="/todos" exact>
            <TodosComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
