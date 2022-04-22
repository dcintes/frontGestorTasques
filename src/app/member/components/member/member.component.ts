import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as MemberActions from '../../actions';
import { MemberDTO } from '../../models/member.dto';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  group_id!: string;
  member_id!: string;

  member: MemberDTO;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {

    const group_id = this.activatedRoute.snapshot.paramMap.get('group_id');
    const member_id = this.activatedRoute.snapshot.paramMap.get('member_id');

    if(group_id && member_id) {
      this.group_id = group_id;
      this.member_id = member_id;
    } else {
      // Si no te group_id, url incorrecte
      this.router.navigate(['/']);
    }

    this.member = new MemberDTO(this.member_id,'',false, 0);

    this.store.select(state => state.member.member).subscribe(member => {
      this.member = member;
    });

  }

  ngOnInit(): void {
    this.store.dispatch(MemberActions.getMember({group_id: this.group_id, member_id: this.member_id}));
  }

  back(): void {
    this.location.back();
  }

}
