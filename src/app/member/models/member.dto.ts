import { SelectorFactoryConfig } from "@ngrx/store/src/selector";

export class MemberDTO {

  id: string
  name: string;
  user_id: string;
  admin: boolean;
  balance: number;
  created_at: Date;
  updated_at: Date;

  constructor(id: string, name: string, user_id: string, admin: boolean, balance: number, created_at: Date, updated_at: Date) {
    this.id = id;
    this.name = name;
    this.user_id = user_id;
    this.admin = admin;
    this.balance = balance;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}