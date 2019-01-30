import React, { Component } from "react";
import Auth0Lock from "auth0-lock";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Github from "./Component/postLogin/Github";
import Navigation from "./Component/Navigation/Navigation";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idToken: "",
      profile: {}
    };
    this.setProfile = this.setProfile.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }
  static defaultProps = {
    clientID: "p8fltKbNicAb2OQTNOjlO4xI10SrD3M6",
    domain: "crimsonheart.auth0.com"
  };
  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on("authenticated", authResult => {
      console.log(authResult);
      this.lock.getProfile(authResult.accessToken, (error, profile) => {
        if (error) {
          console.log(error);
          return;
        }
        this.setProfile(authResult.accessToken, profile);
      });
    });
    this.getProfile();
  }
  getProfile() {
    if (localStorage.getItem("idToken") != null) {
      const AuthId = localStorage.getItem("idToken");
      const profileData = JSON.parse(localStorage.getItem("profile"));
      this.setState({ profile: profileData });
      this.setState({ idToken: AuthId });
    }
  }

  setProfile(idToken, profile) {
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("profile", JSON.stringify(profile));

    const AuthId = localStorage.getItem("idToken");
    const profileData = JSON.parse(localStorage.getItem("profile"));
    this.setState({ profile: profileData });
    this.setState({ idToken: AuthId });
  }
  showLock() {
    this.lock.show();
  }

  onLogout() {
    this.setState({
      idToken: "",
      profile: {}
    });
    localStorage.removeItem("idToken");
    localStorage.removeItem("profile");
  }

  render() {
    let gitty;
    if (this.state.idToken === "") {
      gitty = <p>login to access the data</p>;
    } else {
      gitty = <Github />;
    }
    return (
      <div className="App">
        <Navigation
          idToken={this.state.idToken}
          profile={this.state.profile}
          onLogout={this.onLogout.bind(this)}
          onLogin={this.showLock.bind(this)}
        />
        {gitty}
      </div>
    );
  }
}

export default App;
