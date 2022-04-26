import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InvitationDTO } from 'src/app/user/models/invitation.dto';
import { InvitationService } from 'src/app/user/services/invitation.service';

@Component({
  selector: 'app-member-invite-dialog',
  templateUrl: './member-invite-dialog.component.html',
  styleUrls: ['./member-invite-dialog.component.scss']
})
export class MemberInviteDialogComponent implements OnInit {

  email: FormControl;

  constructor(
    public dialogRef: MatDialogRef<MemberInviteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { group_id: string },
    private invitationService: InvitationService,
    private _snackBar: MatSnackBar,
  ) {

    this.email = new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

  }

  ngOnInit(): void {
  }

  invite(): void {
    if(this.email.valid){

      let invitation = new InvitationDTO(this.data.group_id, this.email.value);

      this.invitationService.createInvitation(invitation).subscribe(
        (response) => {
          this.dialogRef.close(response);
          this._snackBar.open("Invitació enviada", 'tancar');
        }
      );
    }
  }
}
