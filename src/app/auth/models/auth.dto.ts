export class AuthDTO {
  email: string;
  password: string;
  user_id: string;
  token: string;

  constructor(
    email: string,
    password: string,
    user_id: string,
    token: string,
  ) {
    this.email = email;
    this.password = password;
    this.user_id = user_id;
    this.token = token;
  }
}
