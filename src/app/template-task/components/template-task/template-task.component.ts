import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as TemplateTaskActions from '../../actions';
import { TemplateTaskDTO } from '../../models/template-task.dto';
import { TemplateTaskDeleteDialogComponent } from '../template-task-delete-dialog/template-task-delete-dialog.component';

@Component({
  selector: 'app-template-task',
  templateUrl: './template-task.component.html',
  styleUrls: ['./template-task.component.scss']
})
export class TemplateTaskComponent implements OnInit {

  group_id!: string;
  templateTask_id: string | null;
  action: string | null;

  template: TemplateTaskDTO;

  name!: FormControl;
  description!: FormControl;
  value!: FormControl;
  templateTaskForm!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) {

    const group_id = this.activatedRoute.snapshot.paramMap.get('group_id');
    this.templateTask_id = this.activatedRoute.snapshot.paramMap.get('templateTask_id');
    this.action = this.activatedRoute.snapshot.paramMap.get('action');

    this.template = new TemplateTaskDTO('','','','',0);

    if(group_id == null) {
      // Si no te group_id, url incorrecte
      this.router.navigate(['/']);
    } else {
      this.group_id = group_id;
    }

    if(this.templateTask_id == null) {
      // Si no te templateTask_id, es que estem a la pàgina de creació de tasca
      this.action = 'create';
    }

    if(this.action === 'create' || this.action === 'edit') {
      this.initForm();
    }

    if(this.action != 'create') {
      // Obtenim dades de la tasca
      this.store.select(state => state.templateTask.templateTask).subscribe(templateTask => {
        this.template = templateTask;

        if(this.templateTaskForm) {
          this.name.setValue(templateTask.name);
          this.description.setValue(templateTask.description);
          this.value.setValue(templateTask.value);
        }

      });
      
    }

    this.store.select(state => state.templateTask.payload).subscribe(payload => {
      if(payload && payload.action){
        if(payload.action === 'createTemplateTaskSuccess'){
          this.router.navigate(['/group/'+payload.group_id+'/template/task/'+payload.templateTask_id+'/view']);
        }
        if(payload.action === 'updateTemplateTaskSuccess'){
          this.router.navigate(['/group/'+payload.group_id+'/template/task/'+payload.templateTask_id+'/view']);
        }
        if(payload.action === 'deleteTemplateTaskSuccess'){
          this.router.navigate(['/group/'+payload.group_id+'/template/tasks']);
        }
      }
    });
  }

  ngOnInit(): void {
    if(this.templateTask_id){
      this.store.dispatch(TemplateTaskActions.getTemplateTask({group_id: this.group_id, templateTask_id: this.templateTask_id}));
    }
  }

  initForm() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]);

    this.description = new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]);

    this.value = new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]);

    this.templateTaskForm = this.formBuilder.group({
      name: this.name,
      description: this.description,
      value: this.value,
    });
  }

  save(): void {
    if(this.templateTaskForm.invalid){
      return
    }

    this.template = new TemplateTaskDTO(
      this.templateTask_id == null ? '' : this.templateTask_id, 
      this.group_id, 
      this.templateTaskForm.value.name, 
      this.templateTaskForm.value.description, 
      this.templateTaskForm.value.value
    );

    if(this.action === 'create') {
      this.store.dispatch(TemplateTaskActions.createTemplateTask({group_id: this.group_id, templateTask: this.template}));
    } else if(this.action === 'edit') {
      this.store.dispatch(TemplateTaskActions.updateTemplateTask({group_id: this.group_id, templateTask: this.template}));
    }
  }

  edit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/group/'+this.group_id+'/template/task/'+this.templateTask_id+'/edit']);
  }

  back(): void {
    this.router.navigate(['/group/'+this.group_id+'/template/tasks']);
  }

  deleteDialog(): void {
    const dialogRef = this.dialog.open(TemplateTaskDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result && this.templateTask_id) {
        this.store.dispatch(TemplateTaskActions.deleteTemplateTask({ group_id: this.group_id, templateTask_id: this.templateTask_id }));
      } 
    });
  }

}
