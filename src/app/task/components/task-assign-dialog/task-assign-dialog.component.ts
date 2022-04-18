import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MemberDTO } from 'src/app/member/models/member.dto';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-assign-dialog',
  templateUrl: './task-assign-dialog.component.html',
  styleUrls: ['./task-assign-dialog.component.scss']
})
export class TaskAssignDialogComponent implements OnInit {

  assigned: FormControl;
  members: MemberDTO[];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {assigned_id: string},
    private store: Store<AppState>,
  ) {
    this.members = [];   
    this.assigned = new FormControl(data.assigned_id);
  }

  ngOnInit(): void {
    this.store.select(state => state.group.members).subscribe(members => {
      this.members = members;
    });
  }

}
