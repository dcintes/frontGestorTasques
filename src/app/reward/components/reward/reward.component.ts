import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MemberDTO } from 'src/app/member/models/member.dto';
import * as RewardActions from '../../actions';
import { RewardDTO } from '../../models/reward.dto';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {

  group_id!: string;
  reward_id: string | null;

  reward: RewardDTO;

  claimer!: MemberDTO | undefined;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {

    const group_id = this.activatedRoute.snapshot.paramMap.get('group_id');
    this.reward_id = this.activatedRoute.snapshot.paramMap.get('reward_id');

    this.reward = new RewardDTO('','','','',0, '', '');

    if(group_id) {
      this.group_id = group_id;
    } else {
      // Si no te group_id, url incorrecte
      this.router.navigate(['/']);
    }

    this.store.select(state => state.reward.reward).subscribe(reward => {
      this.reward = reward;

      this.store.select(state => state.group).subscribe(group => {
        this.claimer = group.members.find(member => member.id === this.reward.claimer_id);
      });
    });

  }

  ngOnInit(): void {
    if(this.reward_id){
      this.store.dispatch(RewardActions.getReward({group_id: this.group_id, reward_id: this.reward_id}));
    }
  }

  back(): void {
    this.location.back();
  }

}
