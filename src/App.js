import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ComponentInput from "./pages/scheduler/components/ComponentInput";
import TimeInput from "./pages/scheduler/components/TimeInput";
import TaskList from "./pages/scheduler/components/TaskList";
import Header from "./pages/scheduler/components/Header";

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
