import ggl from 'graphql-tag';

export default ggl `
mutation {
  logout{
    id
    email
  }
}
`;