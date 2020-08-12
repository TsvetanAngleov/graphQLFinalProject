import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/CurrentUser";
import mutation from '../mutations/Logout';


class Header extends Component {
  onLogoutHandler() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons(){
    const { lodaing, user} =this.props.data;

    if(lodaing) { return <div/>; }
    if(user) { return (
      <li>
        <a onClick={this.onLogoutHandler.bind(this)}>Logout</a>
      </li>
    ); }
    return (
      <div>
        <li>
          <Link to="/signup">
            Signup
          </Link>
        </li>
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
      </div>
    );

  }
  render() {

    return (

      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}



export default graphql(mutation)(graphql(query)(Header));
