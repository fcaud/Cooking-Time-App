import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ComponentInput from "./pages/scheduler/containers/ComponentInput";
import TaskList from "./pages/scheduler/containers/TaskList";
import Header from "./pages/scheduler/containers/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ComponentInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
