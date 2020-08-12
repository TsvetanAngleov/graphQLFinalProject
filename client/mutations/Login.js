import ggl from 'graphql-tag';

export default ggl `
mutation Login($email: String,$password: String) {
  login(email: $email, password: $password){
    id
    email
  }
}
`;