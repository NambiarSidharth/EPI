import React, { Component } from "react";
import axios from "axios";

class Apicall extends Component {
  componentWillMount() {
    this.getReddit();
  }

  getReddit() {
    axios.get(`https://www.reddit.com/r/${this.state.subr}.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
      console.log(this.state.posts);
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      subr: "space"
    };
    this.getReddit = this.getReddit.bind(this);
  }

  render() {
    return (
      <div>
        <div>{`/r/${this.state.subr}`}</div>
        <ul>
          {this.state.posts.map(obj => (
            <li key={obj.id}>{obj.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Apicall;
