import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as MemberActions from '../../actions';
import { MemberDTO } from '../../models/member.dto';
import { MemberDeleteDialogComponent } from '../member-delete-dialog/member-delete-dialog.component';
import { MemberInviteDialogComponent } from '../member-invite-dialog/member-invite-dialog.component';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  group_id!: string;

  members: MemberDTO[];
  authMember: MemberDTO;
  
  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) {

    const group_id = this.activatedRoute.snapshot.paramMap.get('group_id');

    if(!group_id) {
      // Si no te group_id, url incorrecte
      this.router.navigate(['/']);
    } else {
      this.group_id = group_id;
    }

    this.members = [];

    this.authMember = new MemberDTO('','', false, 0);

    this.store.select(state => state.member.members).subscribe(members => {
      this.members = members;
    });

    this.store.select(state => state.group.authMember).subscribe((authMember) => {
      this.authMember = authMember;
    });
  }

  ngOnInit(): void {
    if(this.group_id != null) {
      this.store.dispatch(MemberActions.listMembers({group_id: this.group_id}));
    }
  }

  delete(member: MemberDTO): void {
    const dialogRef = this.dialog.open(MemberDeleteDialogComponent, {
      data: { name: member.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.store.dispatch(MemberActions.deleteMember({group_id: this.group_id, member_id: member.id}));
      }
    });
  }

  invite(): void {
    this.dialog.open(MemberInviteDialogComponent, {
      data: { group_id: this.group_id }
    });
  }
}