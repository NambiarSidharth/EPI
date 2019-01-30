import React, { Component } from "react";
import "tachyons";
class Search extends Component {
  submit(event) {
    event.preventDefault();
    let value = this.refs.username.value;
    this.props.searchProfile(value);
    console.log(value);
    this.refs.username.value = "";
  }
  render() {
    return (
      <div className="w-50 center">
        <form onSubmit={this.submit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              ref="username"
              placeholder="Enter the username"
              className="form-control"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
