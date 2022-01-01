import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ComponentInput from "./pages/scheduler/containers/ComponentInput";
import TimeInput from "./pages/scheduler/containers/TimeInput";
import TaskList from "./pages/scheduler/containers/TaskList";
import Header from "./pages/scheduler/containers/Header";

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
