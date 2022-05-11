import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MemberDTO } from 'src/app/member/models/member.dto';
import * as TaskActions from '../../actions';
import { TaskDTO } from '../../models/task.dto';
import { TaskAssignDialogComponent } from '../task-assign-dialog/task-assign-dialog.component';
import { TaskDeleteDialogComponent } from '../task-delete-dialog/task-delete-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  group_id!: string;
  task_id: string | null;
  action: string | null;

  task: TaskDTO;
  completed: boolean;

  name!: FormControl;
  description!: FormControl;
  value!: FormControl;
  taskForm!: FormGroup;

  assigned!: MemberDTO | undefined;
  isMyTask: boolean;
  isAdmin: boolean;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private dialog: MatDialog,
  ) {
    const group_id = this.activatedRoute.snapshot.paramMap.get('group_id');
    this.task_id = this.activatedRoute.snapshot.paramMap.get('task_id');
    this.action = this.activatedRoute.snapshot.paramMap.get('action');

    this.task = new TaskDTO('','','','',0);
    this.completed = true;
    this.isMyTask = false;
    this.isAdmin = false;

    if(group_id) {
      this.group_id = group_id;
    } else {
      // Si no te group_id, url incorrecte
      this.router.navigate(['/']);
    }

    if(this.task_id == null) {
      // Si no te task_id, es que estem a la pàgina de creació de tasca
      this.action = 'create';
    }

    if(this.action === 'create' || this.action === 'edit') {
      this.initForm();
    }
    
    if(this.action != 'create') {
      // Obtenim dades de la tasca
      this.store.select(state => state.task.task).subscribe(task => {
        this.task = task;

        this.completed = task.completed_date != null;

        if(this.taskForm) {
          this.name.setValue(task.name);
          this.description.setValue(task.description);
          this.value.setValue(task.value);
        }

        this.getAssigned();
      });
      
    }

    this.store.select(state => state.task.payload).subscribe(payload => {
      if(payload && payload.action){
        if(payload.action === 'createTaskSuccess'){
          this.router.navigate(['/group/'+payload.group_id+'/task/'+payload.task_id+'/view']);
        }
        if(payload.action === 'updateTaskSuccess'){
          this.router.navigate(['/group/'+payload.group_id+'/task/'+payload.task_id+'/view']);
        }
        if(payload.action === 'deleteTaskSuccess'){
          this.router.navigate(['/group/'+payload.group_id]);
        }

        this.store.dispatch(TaskActions.cleanPayload());
      }
    });
  }
  getAssigned() {
    this.store.select(state => state.group).subscribe(group => {
      this.isMyTask = group.authMember.id === this.task.assigned_id;
      this.assigned = group.members.find(member => member.id === this.task.assigned_id);
      this.isAdmin = group.authMember.admin;
    });
  }
  
  ngOnInit(): void {
    if(this.task_id){
      this.store.dispatch(TaskActions.getTask({group_id: this.group_id, task_id: this.task_id}));
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

    this.taskForm = this.formBuilder.group({
      name: this.name,
      description: this.description,
      value: this.value,
    });
    
  }

  back(): void {
    this.location.back();
  }

  save(): void {

    if(this.taskForm.invalid){
      return
    }

    this.task = new TaskDTO(this.task_id == null ? '' : this.task_id, this.group_id, this.taskForm.value.name, this.taskForm.value.description, this.taskForm.value.value);

    if(this.action === 'create') {
      this.store.dispatch(TaskActions.createTask({group_id: this.group_id, task: this.task}));
    } else if(this.action === 'edit') {
      this.store.dispatch(TaskActions.updateTask({group_id: this.group_id, task: this.task}));
    }

  }

  deleteDialog(): void {
    const dialogRef = this.dialog.open(TaskDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result && this.task_id) {
        this.store.dispatch(TaskActions.deleteTask({ group_id: this.group_id, task_id: this.task_id }));
      } 
    });
  }

  assignDialog(): void {
    const dialogRef = this.dialog.open(TaskAssignDialogComponent, {
      data: { assigned_id: this.task.assigned_id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && this.task_id){
        this.store.dispatch(TaskActions.assignTask({ group_id: this.group_id, task_id: this.task_id, member_id: result }));
      } 
    });
  }

  edit(): void{
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/group/'+this.group_id+'/task/'+this.task_id+'/edit']);
  }

  complete(): void {
    if(this.task_id){
      this.store.dispatch(TaskActions.completeTask({ group_id: this.group_id, task_id: this.task_id }));
    }
  }

}
