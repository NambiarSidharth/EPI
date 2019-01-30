import React, { Component } from "react";
import "tachyons";
class Profile extends Component {
  render() {
    let userdata = this.props.userData;
    let followers = `${userdata.homeURL}/followers`;
    let following = `${userdata.homeURL}/following`;
    let repos = `${userdata.homeURL}/repositories`;

    let prof;

    console.log(userdata.notFound);
    if (userdata.notFound === "Not Found") {
      prof = (
        <div>
          <h2>Heyyy Bro</h2>
          <p>Are you sure, for whom </p>
        </div>
      );
    } else {
      prof = (
        <section className="w-50 ba center b--light-gray panel panel-default">
          <div className="panel-body">
            <a
              href={userdata.homeURL}
              target="_blank"
              title={userdata.name || userdata.username}
            >
              <img src={userdata.avatar} alt="Gravatar" />
            </a>
            <h2>
              <a
                href={userdata.homeURL}
                title={userdata.username}
                target="_blank"
              >
                {userdata.name || userdata.username}
              </a>
            </h2>
            <h3>{userdata.location}</h3>
          </div>
          <div className="panel-footer">
            <ul>
              <li>
                <a href={followers} target="_blank" title="Number Of Followers">
                  <i>{userdata.followers}</i>
                  <span>Followers</span>
                </a>
              </li>
              <li>
                <a href={following} target="_blank" title="Number Of Following">
                  <i>{userdata.following}</i>
                  <span>Following</span>
                </a>
              </li>
              <li>
                <a href={repos} target="_blank" title="Number Of repos">
                  <i>{userdata.repos}</i>
                  <span>Repos</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      );
    }
    return <div>{prof}</div>;
  }
}

export default Profile;
