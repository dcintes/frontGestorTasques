export class GroupDTO {

  id: string
  name: string;
  description: string;
  coin: string;
  created_at: Date;
  updated_at: Date;

  constructor(id: string, name: string, description: string, coin: string, created_at: Date, updated_at: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.coin = coin;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}