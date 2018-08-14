import * as React from "react";
import Input from "./components/Input";
import List from "./components/List";

class App extends React.Component {
  public render() {
    return (
      <div className="App container-fluid">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">TS-TODO</h1>
            <p className="lead text-center">
              A todo list made of Typescript, React, Redux and Bootstrap.
            </p>
          </div>
        </div>
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
