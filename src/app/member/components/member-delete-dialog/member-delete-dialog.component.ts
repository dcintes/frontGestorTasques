import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-member-delete-dialog',
  templateUrl: './member-delete-dialog.component.html',
  styleUrls: ['./member-delete-dialog.component.scss']
})
export class MemberDeleteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {name: string},
  ) { }

  ngOnInit(): void {
  }

}
