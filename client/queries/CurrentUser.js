import ggl from 'graphql-tag';

export default ggl `
query User{
  user{
    email,
    id
  }
}
`;