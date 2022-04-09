import { Component } from '@angular/core';
import { ErrorService } from './shared/services/error.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontGestorTasques';

  constructor(
    private errorService: ErrorService,
    private _snackBar: MatSnackBar
  ) {
    this.errorService.errors().subscribe(error => {
      this._snackBar.open(error, 'tancar');
    });
  }
}
