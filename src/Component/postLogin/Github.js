import React, { Component } from "react";
import Search from "./Components/Search";
import Profile from "./Components/Profile";
import "tachyons";

const API = "https://api.github.com/users";

class Github extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "NambiarSidharth",
      name: "",
      avatar: "",
      repos: "",
      followers: "",
      following: "",
      homeURL: "",
      notFound: ""
    };
  }

  getProfile(username) {
    let finalURL = `${API}/${username}`;
    fetch(finalURL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeURL: data.html_url,
          notFound: data.message
        });
      })
      .catch(err => this.setState({ notFound: "Not Found" }));
  }

  componentDidMount() {
    this.getProfile(this.state.username);
  }

  render() {
    return (
      <div>
        <section className="br2 ba dark-gray b--black-10 mv4 w-80 center">
          <Search searchProfile={this.getProfile.bind(this)} />
          <Profile userData={this.state} />
        </section>
      </div>
    );
  }
}

export default Github;
