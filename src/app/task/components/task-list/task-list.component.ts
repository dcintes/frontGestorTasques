import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TaskDTO } from '../../models/task.dto';
import * as TaskActions from '../../actions';
import { MemberDTO } from 'src/app/member/models/member.dto';
import { MatDialog } from '@angular/material/dialog';
import { TaskCreateDialogComponent } from '../task-create-dialog/task-create-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  group_id: string | null;

  tasks: TaskDTO[];
  myTasks: TaskDTO[];
  todo: TaskDTO[];
  
  authMember!: MemberDTO;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
  ) {
    this.group_id = this.activatedRoute.snapshot.paramMap.get('group_id');

    this.tasks = [];
    this.myTasks = [];
    this.todo = [];

    this.store.select(state => state.group.authMember).subscribe(authMember => {
      this.authMember = authMember;

      this.orderTasks();
    });

    this.store.select(state => state.task.tasks).subscribe(tasks => {
      this.tasks = tasks;

      this.orderTasks();
    });

  }

  ngOnInit(): void {
    if(this.group_id != null) {
      this.store.dispatch(TaskActions.listTasks({group_id: this.group_id}));
    }
  }

  orderTasks(){
    if(this.tasks.length > 0 && this.authMember) {
      this.myTasks = this.tasks.filter(task => task.assigned_id === this.authMember.id);

      this.todo = this.tasks.filter(task => task.assigned_id != this.authMember.id);
    } else {
      this.myTasks = [];
      this.todo = [];
    }
  }

  createDialog(): void {
    this.dialog.open(TaskCreateDialogComponent, { 
      data: {group_id: this.group_id},
    });
  }

}
