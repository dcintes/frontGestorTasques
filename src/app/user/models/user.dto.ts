export class UserDTO {

  id: string
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(id: string, name: string, email: string, created_at: Date, updated_at: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
