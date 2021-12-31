import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ComponentInput from "./Scheduler/ComponentInput";
import TimeInput from "./Scheduler/TimeInput";
import TaskList from "./Scheduler/TaskList";
import Header from "./Scheduler/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ComponentInput />
        <TimeInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
