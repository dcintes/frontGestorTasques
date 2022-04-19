import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TemplateTaskDTO } from 'src/app/template-task/models/template-task.dto';
import { TemplateTaskService } from 'src/app/template-task/services/template-task.service';

@Component({
  selector: 'app-task-create-dialog',
  templateUrl: './task-create-dialog.component.html',
  styleUrls: ['./task-create-dialog.component.scss']
})
export class TaskCreateDialogComponent implements OnInit {

  group_id!: string;
  admin: boolean;
  templates: TemplateTaskDTO[];

  template: FormControl;

  constructor(
    public dialogRef: MatDialogRef<TaskCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { group_id: string },
    private store: Store<AppState>,
    private templateTaskservice: TemplateTaskService,
    private router: Router,
  ) {

    this.group_id = data.group_id;

    this.admin = false;
    this.templates = [];

    this.template = new FormControl();

    this.store.select(state => state.group.authMember).subscribe(authMember => {
      this.admin = authMember.admin;
    });

    this.templateTaskservice.listTemplateTasks(this.group_id).subscribe(templates => {
      this.templates = templates;
    });
  }

  ngOnInit(): void {
  }

  createFromTemplate(): void {

    if(this.template.value) {
      this.templateTaskservice.instanceTemplateTask(this.group_id, this.template.value).subscribe((task) => {
        this.dialogRef.close();
        this.router.navigate(['/group', this.group_id, 'task', task.id, 'view']);
      });
    }
  }

}
