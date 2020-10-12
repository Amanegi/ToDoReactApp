import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(toDoValue) {
    if (toDoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: toDoValue,
        isDone: false,
      };

      // add all items of this.state.list to const list array using spread operator
      // or we can say a copy of list
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list, // js is smart enough to capture same name variable
        newItem: "",
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  updatedInput(input) {
    this.setState({
      newItem: input,
    });
  }

  render() {
    return (
      <div>
        <center>
          <img src={logo} alt="img" width="100" height="100" className="logo" />
        </center>
        <h1 className="app-title">To Do</h1>
        <div className="container">
          Add an Item....
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a ToDo"
            required
            value={this.state.newItem}
            onChange={(e) => this.updatedInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length} // for eg. 5 is true, then {!true} becomes false making disabled as false
          >
            Add ToDo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  // key is given to proove that the items are unique
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="idDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => {
                        this.deleteItem(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" />
                Record Youtube videos
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
