import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({email,password});
}

  render() {
    return (
      <div className="row">
        <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
          <input
            onChange={(event) => this.setState({ email: event.target.value })}
            value={this.state.email}
            placeholder="Email"
          />
          </div>
          <div className="input-field">
          <input
            onChange={(event) => this.setState({ password: event.target.value })}
            value={this.state.password}
            placeholder="Password"
            type="password"
          />
          </div>
          <div className="errors">
            {this.props.errors.map(err =><div key={err}>{err}</div>)}
          </div>
          <button className="btn">SUBMIT</button>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation addLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default Auth;
