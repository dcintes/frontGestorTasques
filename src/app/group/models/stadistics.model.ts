export class StadisticsDTO {
  tasksByUser: MemberCountDTO[];

  constructor() {
    this.tasksByUser = [];
  }
}

export class MemberCountDTO {
  member_id: string;
  total: number;

  constructor(member_id: string, total: number) {
    this.member_id = member_id;
    this.total = total;
  }
}

