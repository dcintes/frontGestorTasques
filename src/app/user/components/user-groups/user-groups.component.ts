import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { GroupDTO } from 'src/app/group/models/group.dto';
import * as UserAction from 'src/app/user/actions';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {

  groups: GroupDTO[];

  constructor(private store: Store<AppState>) {
    this.groups = [];

    this.store.select(state => state.user.groups).subscribe(groups => {
      this.groups = groups;
    });
  }

  ngOnInit(): void {
    this.store.select('auth').subscribe((auth) => {
      if (auth.auth.user_id) {
        this.store.dispatch(UserAction.getGroups({user_id: auth.auth.user_id}));
      }
    });
  }

}
