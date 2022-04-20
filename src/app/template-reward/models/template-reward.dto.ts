export class TemplateRewardDTO {

  id: string
  group_id: string;
  name: string;
  description: string;
  cost: number;
  color: string;
  icon: string;
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