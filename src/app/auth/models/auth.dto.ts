export class AuthDTO {
  user_id: string;
  token: string;

  constructor(
    user_id: string,
    token: string,
  ) {
    this.user_id = user_id;
    this.token = token;
  }
}
