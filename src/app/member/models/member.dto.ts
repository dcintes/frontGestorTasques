export class MamberDTO {

  id: string
  name: string;
  admin: boolean;
  balance: number;
  created_at: Date;
  updated_at: Date;

  constructor(id: string, name: string, admin: boolean, balance: number, created_at: Date, updated_at: Date) {
    this.id = id;
    this.name = name;
    this.admin = admin;
    this.balance = balance;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}