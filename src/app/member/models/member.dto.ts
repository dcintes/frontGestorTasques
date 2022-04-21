
export class MemberDTO {

  id: string
  name: string;
  user_id!: string;
  group_id!: string;
  admin: boolean;
  balance: number;
  created_at!: Date;
  updated_at!: Date;

  constructor(id: string, name: string, admin: boolean, balance: number) {
    this.id = id;
    this.name = name;
    this.admin = admin;
    this.balance = balance;
  }
}