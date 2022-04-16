import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { GroupDTO } from '../../models/group.dto';
import * as GroupAction from '../../actions';
import { MemberDTO } from 'src/app/member/models/member.dto';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  group_id: string | null;
  group: GroupDTO;
  members: MemberDTO[];
  authMember: MemberDTO;
  user_id: string;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
  ) {

    this.group_id = this.activatedRoute.snapshot.paramMap.get('group_id');
    this.group = new GroupDTO('','','','',new Date(), new Date());

    this.members = [];
    this.authMember = new MemberDTO('','','',false,0,new Date(), new Date());

    this.user_id = '';

    this.store.select(state => state.group.group).subscribe(group => {
      this.group = group;
    });

    this.store.select(state => state.group.members).subscribe(members => {
      this.members = members;
      this.setAuthMember();
    });

    this.store.select('auth').subscribe((auth) => {
      if (auth.auth.user_id) {
        this.user_id = auth.auth.user_id;
        this.setAuthMember();
      }
    });

    this.store.select(state => state.group.group).subscribe(group => {
      this.group = group;
    });
  }

  ngOnInit(): void {
    if(this.group_id) {
      this.store.dispatch(GroupAction.getGroup({group_id: this.group_id}));

      this.store.dispatch(GroupAction.getMembers({group_id: this.group_id}));
    } else {
      throw new Error('No group_id');
    }
  }

  setAuthMember(){
    if(this.members.length != 0 && this.user_id != ''){
      this.authMember = this.members.find(member => member.user_id == this.user_id)!;
      this.store.dispatch(GroupAction.pushAuthMember({authMember: this.authMember}));
    }
  }

}
