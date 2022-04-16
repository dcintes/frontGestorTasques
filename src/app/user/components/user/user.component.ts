import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { match } from 'src/app/shared/validators/match';
import { UserDTO } from '../../models/user.dto';
import * as UserAction from '../../actions';
import * as AuthAction from 'src/app/auth/actions';
import { MatDialog } from '@angular/material/dialog';
import { UserDeleteDialogComponent } from '../user-delete-dialog/user-delete-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: UserDTO;
  name: FormControl;
  email: FormControl;
  password: FormControl;
  password_conf: FormControl;
  userForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
  ) {
      this.user = new UserDTO('','','',new Date(), new Date());

      this.name = new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]);

      this.email = new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]);
  
      this.password = new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]);

      this.password_conf = new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]);

      const formOptions: AbstractControlOptions = { 
        validators: match('password', 'password_conf')
      }
      this.userForm = this.formBuilder.group({
        name: this.name,
        email: this.email,
        password: this.password,
        password_conf: this.password_conf,
      }, formOptions);

      this.store.select(state => state.user.user).subscribe(user => {
        this.user = user;

        this.name.setValue(user.name);
        this.email.setValue(user.email);
        
      });

      this.store.select(state => state.user.payload).subscribe(payload => {
        if(payload && payload.action){
          if(payload.action === 'updateUserSuccess'){
            this._snackBar.open('Perfil actualitzat', 'tancar');
          }
          if(payload.action === 'deleteUserSuccess'){
            this.store.dispatch(AuthAction.logout());
            this.router.navigate(['/login']);
          }
        }
      });
  }

  ngOnInit(): void {
  }

  saveUser(): void {

    if (this.userForm.invalid) {
      return;
    }

    this.user = new UserDTO(this.user.id, this.name.value, this.email.value, this.user.created_at, this.user.updated_at);
    this.user.password = this.password.value;
    this.user.password_confirmation = this.password_conf.value;

    this.store.dispatch(UserAction.updateUser({ user: this.user }));
  }

  deleteUserDialog(): void {
    const dialogRef = this.dialog.open(UserDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result){
        this.store.dispatch(UserAction.deleteUser({ user_id: this.user.id }));
      } 
    });
    
  }

}
