import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MemberDTO } from 'src/app/member/models/member.dto';
import { TaskDTO } from '../../models/task.dto';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task!: TaskDTO;
  assigned!: MemberDTO | undefined;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.group).subscribe(group => {
      this.assigned = group.members.find(member => member.id === this.task.assigned_id);
    });
  }

}
