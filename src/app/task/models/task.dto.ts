export class TaskDTO {

  id: string
  template_id!: string;
  group_id: string;
  assigned_id!: string;
  name: string;
  description: string;
  value: number;
  completed_date!: Date;
  created_at!: Date;
  updated_at!: Date;

  constructor(id: string, group_id: string, name: string, description: string, value: number) {
    this.id = id;
    this.group_id = group_id;
    this.name = name;
    this.description = description;
    this.value = value;
  }

}