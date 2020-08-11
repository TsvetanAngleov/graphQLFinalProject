// import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Route, Router, hashHistory, IndexRoute } from "react-router";



const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>AUTH</div>
       <Router history={hashHistory}>
        <Route path="/" component={App}>

        </Route>

      </Router> 
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
