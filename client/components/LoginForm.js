import React, { Component } from 'react';
import mutation from '../mutations/Login';
import { graphql } from 'react-apollo';
import {hashHistory} from "react-router";
import query from '../queries/CurrentUser';

import AuthForm from './AuthForm';



class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: []}
  };

  componentWillUpdate(nextProps) {
    if(!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard')
    }
  }

  onSubmit({ email, password}) {
      this.props.mutate({
      variables: { email, password },
      refetchQueries: ['User'],
    }).catch(err => {
      const errors = err.graphQLErrors.map( err => err.message)
      this.setState({errors})
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)}/>
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(LoginForm));