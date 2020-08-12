import React, { Component } from 'react';
import mutation from '../mutations/Signup';
import { graphql } from 'react-apollo';
import {hashHistory} from "react-router";
import query from '../queries/CurrentUser';

import AuthForm from './AuthForm';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: []}
  };

  componentWillUpdate(nextProps) {
    console.log(this.props.data.user );
    console.log(nextProps.data.user);
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
        <h3>Sign up</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)}/>
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(SignupForm));
