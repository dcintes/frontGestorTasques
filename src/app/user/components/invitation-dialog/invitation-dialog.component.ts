import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InvitationDTO } from '../../models/invitation.dto';

@Component({
  selector: 'app-invitation-dialog',
  templateUrl: './invitation-dialog.component.html',
  styleUrls: ['./invitation-dialog.component.scss']
})
export class InvitationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: InvitationDTO) { }

  ngOnInit(): void {
  }

}
