import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  assigned!: MemberDTO;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.group).subscribe(group => {
      const assigned = group.members.find(member => member.id === this.task.assigned_id);
      if(assigned) {
        this.assigned = assigned;
      }
    });
  }

  goMember(){
    this.router.navigate(['/group',this.task.group_id,'member', this.assigned.id, 'view']);
  }

}
