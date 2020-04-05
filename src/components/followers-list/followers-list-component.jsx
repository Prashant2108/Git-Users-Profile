import React from "react";

class Followers extends React.Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.login}/followers`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((followers) =>
        this.setState({ followers: followers }, console.log(followers))
      );
  }

  render() {
    return (
      <div className="Followers">
        <h2>Followers</h2>
        {this.state.followers.map((follower) => (
          <li key={follower.id}>
            <img
              src={follower.avatar_url}
              width="20"
              height="20"
              alt="follower"
            />
            <a
              href={follower.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {follower.login}
            </a>
          </li>
        ))}
      </div>
    );
  }
}

export default Followers;
