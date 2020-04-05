import React from "react";

import "./modal.style.css";
import Repositories from "../repositries-list/repositories-component";
import Followers from "../followers-list/followers-list-component";

class Popup extends React.Component {
  state = {
    userinfo: {},
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.text}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((userinfo) => this.setState({ userinfo: userinfo }));
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popupbody">
            <div className="header">
              <div className="leftpannel">
                <img
                  alt="avatar"
                  src={this.state.userinfo.avatar_url}
                  width="110"
                  height="110"
                />
                <p>
                  <strong>{this.state.userinfo.name}</strong>
                  <br></br>
                  {this.state.userinfo.login}
                </p>
              </div>
              <div className="rightpannel">
                <div>
                  <p>
                    Repositories<br></br>
                    {this.state.userinfo.public_repos}
                  </p>
                </div>
                <div>
                  <p>
                    Followers<br></br>
                    {this.state.userinfo.followers}
                  </p>
                </div>
                <div>
                  <p>
                    Following<br></br>
                    {this.state.userinfo.following}
                  </p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="repositories">
                <Repositories login={this.props.text} />
              </div>
              <div className="followers">
                <Followers login={this.props.text} />
              </div>
            </div>
            <button className="closebutton" onClick={this.props.closePopup}>
              Close Me
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
