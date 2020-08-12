import ggl from 'graphql-tag';

export default ggl `
mutation Signup($email: String,$password: String) {
  signup(email: $email, password: $password){
    id
    email
  }
}
`;