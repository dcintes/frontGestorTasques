export class RewardDTO {

  id: string
  group_id: string;
  claimer_id!: string;
  name: string;
  description: string;
  cost: number;
  color: string;
  icon: string;
  claimed_date!: Date;
  created_at!: Date;
  updated_at!: Date;

  constructor(id: string, group_id: string, name: string, description: string, cost: number, color: string, icon: string) {
    this.id = id;
    this.group_id = group_id;
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.color = color;
    this.icon = icon;
  }

}