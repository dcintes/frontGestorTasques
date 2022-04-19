export class TemplateTaskDTO {

  id: string
  group_id: string;
  name: string;
  description: string;
  value: number;
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