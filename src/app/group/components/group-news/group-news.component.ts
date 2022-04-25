import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RewardService } from 'src/app/reward/services/reward.service';
import { TaskService } from 'src/app/task/services/task.service';
import { NewDTO } from '../../models/new.dto';

@Component({
  selector: 'app-group-news',
  templateUrl: './group-news.component.html',
  styleUrls: ['./group-news.component.scss']
})
export class GroupNewsComponent implements OnInit {

  group_id: string | null;

  news: NewDTO[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private rewardService: RewardService,
  ) {

    this.group_id = this.activatedRoute.snapshot.paramMap.get('group_id');

    this.news = [];

  }

  ngOnInit(): void {
    if(this.group_id) {
      this.taskService.listTasks(this.group_id).subscribe((tasks) => {
        this.mergeNews(tasks.map((task) => new NewDTO(task)));
      });

      this.rewardService.listRewards(this.group_id).subscribe((rewards) => {
        this.mergeNews(rewards.map((reward) => new NewDTO(reward)));
      });
    }
  }

  mergeNews(news: NewDTO[]): void {
    let array = Array.from(this.news).concat(news);
    array.sort((a, b) => { 
      return b.date.getTime() - a.date.getTime() 
    });

    this.news = [...new Set(array)];
  }

}
