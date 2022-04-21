import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MemberDTO } from 'src/app/member/models/member.dto';
import * as TmeplateRewardActions from '../../actions';
import { TemplateRewardDTO } from '../../models/template-reward.dto';

@Component({
  selector: 'app-template-reward-list',
  templateUrl: './template-reward-list.component.html',
  styleUrls: ['./template-reward-list.component.scss']
})
export class TemplateRewardListComponent implements OnInit {

  group_id!: string | null;

  templates: TemplateRewardDTO[];

  authMember!: MemberDTO;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
  ) {

    this.group_id = this.activatedRoute.snapshot.paramMap.get('group_id');

    this.templates = [];

    this.store.select(state => state.group.authMember).subscribe(authMember => {
      this.authMember = authMember;
    });

    this.store.select(state => state.templateReward.templateRewards).subscribe(templates => {
      var temp = [...templates];
      this.templates = temp.sort((a, b) => a.cost - b.cost);
    });
  }

  ngOnInit(): void {
    if(this.group_id != null) {
      this.store.dispatch(TmeplateRewardActions.listTemplateRewards({group_id: this.group_id}));
    }
  }

}
