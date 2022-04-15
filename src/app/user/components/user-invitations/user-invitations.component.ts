import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { InvitationDTO } from '../../models/invitation.dto';
import * as UserAction from '../../actions';
import { MatDialog } from '@angular/material/dialog';
import { InvitationDialogComponent } from '../invitation-dialog/invitation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-invitations',
  templateUrl: './user-invitations.component.html',
  styleUrls: ['./user-invitations.component.scss']
})
export class UserInvitationsComponent implements OnInit {

  invitations: InvitationDTO[];

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
    private router: Router,
  ) {
    this.invitations = [];

    this.store.select(state => state.user.invitations).subscribe(invitations => {
      this.invitations = invitations;
    });

    this.store.select(state => state.user.payload).subscribe(payload => {
      // aceptació d'invitació -> redirigim al nou grup
      if(payload && payload.action && payload.action === 'acceptInvitationSuccess'){
        this.router.navigate(['/group/' + payload.invitation.group_id]);
      }
    });
  }

  ngOnInit(): void {
    this.store.select('auth').subscribe((auth) => {
      if (auth.auth.user_id) {
        this.store.dispatch(UserAction.getInvitations({user_id: auth.auth.user_id}));
      }
    });
  }

  openDialog(invitation_id: string): void {
    const dialogRef = this.dialog.open(InvitationDialogComponent, {
      "data": this.invitations.find(invitation => invitation.id === invitation_id)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.debug(invitation_id + ' ' + result);
      // undefined es que tanca el popup sense fer res
      if(result != undefined){
        if(result) {
          this.store.dispatch(UserAction.acceptInvitation({invitation_id: invitation_id}));
        } else {
          this.store.dispatch(UserAction.deleteInvitation({invitation_id: invitation_id}));
        }
      } 
    });
  }

}
