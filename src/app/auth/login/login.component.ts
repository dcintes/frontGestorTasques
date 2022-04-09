import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { AuthDTO } from '../models/auth.dto';
import * as AuthAction from '../actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth: AuthDTO;
  email: FormControl;
  password: FormControl;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
    ) {
    this.auth = new AuthDTO('', '','','');

    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]);

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });

    this.store.select('auth').subscribe(async (auth) => {
      if(auth.auth.token) {
        this.router.navigate(['/']);

      }
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    const auth: AuthDTO = {
      email: this.email.value,
      password: this.password.value,
      user_id: '',
      token: '',
    };

    this.store.dispatch(AuthAction.login({ auth }));
  }

}
