import { RewardDTO } from "src/app/reward/models/reward.dto";
import { DateAgoPipe } from "src/app/shared/pipes/date-ago.pipe";
import { TaskDTO } from "src/app/task/models/task.dto";

export class NewDTO {

  element: TaskDTO | RewardDTO;

  date: Date;
  dateFormat: string;

  isTask: boolean;
  isReward: boolean;

  constructor(element: TaskDTO|RewardDTO) {

    this.element = element;

    this.isTask = element.hasOwnProperty('value');
    this.isReward = element.hasOwnProperty('cost');

    this.date = new Date(element.updated_at);
    this.dateFormat = new DateAgoPipe().transform(this.date);
  }

  getTask(): TaskDTO {
    return this.element as TaskDTO;
  }

  getReward(): RewardDTO {
    return this.element as RewardDTO;
  }
}