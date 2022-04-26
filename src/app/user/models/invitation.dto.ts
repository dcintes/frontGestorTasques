export class InvitationDTO {

  id!: string
  group_id: string;
  email: string;
  created_at!: Date;
  updated_at!: Date;
  group_name!: string;

  constructor(group_id: string, email: string) {
    this.group_id = group_id;
    this.email = email;
  }

}