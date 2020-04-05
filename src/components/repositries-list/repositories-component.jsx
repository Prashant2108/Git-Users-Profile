import React from "react";

import "./repositories.style.css";

class Repositories extends React.Component {
  state = {
    repos: [],
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.login}/repos`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((repos) =>
        this.setState({ repos: repos }, console.log(this.props.login))
      );
  }

  render() {
    return (
      <div className="Repositories">
        <h2>Repositories</h2>
        {this.state.repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <span>
              {repo.stargazers_count} <i class="fa fa-star"></i>
            </span>
          </li>
        ))}
      </div>
    );
  }
}

export default Repositories;
