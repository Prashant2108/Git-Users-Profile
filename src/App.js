import React, { Component } from "react";

import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gitUsers: [],
      searchField: "",
      searchField1: "",
    };
  }

  componentDidMount(user = "") {
    if (!user) {
      fetch(`https://api.github.com/users`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((users) => this.setState({ gitUsers: users }));
    } else {
      fetch(`https://api.github.com/users/${user}`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((users) => this.setState({ gitUsers: [users] }));
    }
  }

  render() {
    //const {gitUsers, searchField1 } = this.state;
    // const filteredUsers = gitUsers.filter(user =>
    //    user.login.toLowerCase().includes(searchField1.toLowerCase())
    //   );
    this.setState.gitUsers = this.componentDidMount(this.state.searchField1);
    return (
      <div className="App">
        <h1>
          <i className="fa fa-github"></i> Github Users
        </h1>
        <SearchBox
          placeholder="search users"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <button
          onClick={(e) =>
            this.setState({ searchField1: this.state.searchField })
          }
        >
          Search
        </button>
        <CardList gitUsers={this.state.gitUsers} />
      </div>
    );
  }
}

export default App;
