import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { RegisterDTO } from '../../models/register.dto';
import * as AuthAction from '../../actions';
import { match } from 'src/app/shared/validators/match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register: RegisterDTO;
  name: FormControl;
  email: FormControl;
  password: FormControl;
  password_conf: FormControl;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>) {

      this.register = new RegisterDTO('', '', '', '');

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
      this.registerForm = this.formBuilder.group({
        name: this.name,
        email: this.email,
        password: this.password,
        password_conf: this.password_conf,
      }, formOptions);
      this.store.select('auth').subscribe(auth => {
        if(auth.loaded && auth.auth.token != '') {
          this.router.navigate(['/']);
        }
      });

    }

  ngOnInit(): void {
  }

  registerUser(): void {

    this.register.name = this.name.value;
    this.register.email = this.email.value;
    this.register.password = this.password.value;
    this.register.password_confirmation = this.password_conf.value;
    

    this.store.dispatch(AuthAction.register({ register: this.register }));
  }

}
