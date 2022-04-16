import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { GroupDTO } from '../../models/group.dto';
import * as GroupAction from '../../actions';
import { GroupDeleteDialogComponent } from '../group-delete-dialog/group-delete-dialog.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  create: boolean;

  group: GroupDTO;
  name: FormControl;
  description: FormControl;
  coin: FormControl;
  groupForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

    let group_id = this.activatedRoute.snapshot.paramMap.get('group_id');

    this.create = (group_id === null);

    this.group = new GroupDTO('', '', '', '', new Date(), new Date());

    this.name = new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]);

    this.description = new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]);

    this.coin = new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]);

    this.groupForm = this.formBuilder.group({
      name: this.name,
      description: this.description,
      coin: this.coin,
    });

    if(!this.create) {
      this.store.select(state => state.group.group).subscribe(group => {
        this.group = group;

        this.name.setValue(group.name);
        this.description.setValue(group.description);
        this.coin.setValue(group.coin);
      });
    }

    this.store.select(state => state.group.payload).subscribe(payload => {
      if(payload && payload.action){
        if(payload.action === 'createGroupSuccess'){
          this.router.navigate(['/group/'+payload.group_id]);
        }
        if(payload.action === 'updateGroupSuccess'){
          this._snackBar.open('Grup actualitzat', 'tancar');
        }
        if(payload.action === 'deleteGroupSuccess'){
          this.router.navigate(['/']);
        }
      }
    });

  }

  ngOnInit(): void {
  }

  saveGroup(): void {

    if (this.groupForm.invalid) {
      return;
    }
    
    if(this.create) {
      this.group = this.groupForm.value;
      this.store.dispatch(GroupAction.createGroup({ group: this.group }));
    } else {
      this.group = new GroupDTO(this.group.id, this.name.value, this.description.value, this.coin.value, this.group.created_at, this.group.updated_at);
      this.store.dispatch(GroupAction.updateGroup({ group: this.group }));
    } 
        
  }

  deleteGroupDialog(): void {
    const dialogRef = this.dialog.open(GroupDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result){
        this.store.dispatch(GroupAction.deleteGroup({ group_id: this.group.id }));
      } 
    });
    
  }

}
