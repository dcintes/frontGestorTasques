import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import * as AuthAction from 'src/app/auth/actions';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import * as UserAction from 'src/app/user/actions';
import { UserDTO } from '../../models/user.dto';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  user:  UserDTO;

  constructor(private store: Store<AppState>,
    private router: Router) {

      this.user = new UserDTO('','','',new Date(), new Date());

      this.store.select(state => state.user.user).subscribe(user => {
        this.user = user;
      });
    
    }

  ngOnInit(): void {
    
    this.store.select('auth').subscribe((auth) => {
      if (auth.auth.user_id) {
        this.store.dispatch(UserAction.getUser({id: auth.auth.user_id}));
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  logout(): void {
    console.log('logout');
    this.store.dispatch(AuthAction.logout());
    this.router.navigate(['/login']);
  }

}
