import React from "react";
import "./App.css";
import ComponentInput from "./Scheduler/ComponentInput";
import TimeInput from "./Scheduler/TimeInput";
import TaskList from "./Scheduler/TaskList";
import Header from "./Scheduler/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ComponentInput />
      <TimeInput />
      <TaskList />
    </div>
  );
}

export default App;
