import { Component, OnInit } from '@angular/core';
import { ErrorService } from './shared/services/error.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from './shared/services/local-storage.service';
import { AppState } from './app.reducer';
import { Store } from '@ngrx/store';
import { AuthDTO } from './auth/models/auth.dto';
import * as AuthAction from 'src/app/auth/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'frontGestorTasques';

  constructor(
    private errorService: ErrorService,
    private _snackBar: MatSnackBar,
    private localstorageService: LocalStorageService,
    private store: Store<AppState>,
  ) {
    this.errorService.errors().subscribe(error => {
      this._snackBar.open(error, 'tancar');
    });

  }

  ngOnInit(): void {
    this.checkAutenticacio();
  }

  private checkAutenticacio() {
    let user_id = this.localstorageService.get('user_id');
    let token = this.localstorageService.get('access_token');

    if (user_id && token) {
      let auth = new AuthDTO('', '', user_id!, token!);
      this.store.dispatch(AuthAction.pushAuth({ auth: auth }));
    }
  }
}
