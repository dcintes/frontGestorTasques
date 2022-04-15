export class InvitationDTO {

  id: string
  group_id: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  group_name: string;

  constructor(id: string, group_id: string, email: string, created_at: Date, updated_at: Date, group_name: string) {
    this.id = id;
    this.group_id = group_id;
    this.email = email;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.group_name = group_name;
  }

}