import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromEventPattern } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { TemplateTaskDTO } from '../../models/template-task.dto';
import * as TemplateTaskActions from '../../actions';

@Component({
  selector: 'app-template-task-list',
  templateUrl: './template-task-list.component.html',
  styleUrls: ['./template-task-list.component.scss']
})
export class TemplateTaskListComponent implements OnInit {

  group_id!: string;

  templates: TemplateTaskDTO[];

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

    const group_id = this.activatedRoute.snapshot.paramMap.get('group_id');

    if(!group_id) {
      // Si no te group_id, url incorrecte
      this.router.navigate(['/']);
    } else {
      this.group_id = group_id;
    }

    this.templates = [];

    this.store.select(state => state.templateTask.templateTasks).subscribe(templateTasks => {
      this.templates = templateTasks;
    });
  }

  ngOnInit(): void {
    if(this.group_id != null) {
      this.store.dispatch(TemplateTaskActions.listTemplateTasks({group_id: this.group_id}));
    }
  }

}
