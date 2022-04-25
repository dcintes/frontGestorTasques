import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MemberDTO } from 'src/app/member/models/member.dto';
import { RewardDTO } from '../../models/reward.dto';

@Component({
  selector: 'app-reward-card',
  templateUrl: './reward-card.component.html',
  styleUrls: ['./reward-card.component.scss']
})
export class RewardCardComponent implements OnInit {

  @Input() reward!: RewardDTO;
  claimer!: MemberDTO;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.group.members).subscribe(members => {
      const claimer = members.find(member => member.id === this.reward.claimer_id);0
      if(claimer) {
        this.claimer = claimer;
      }
    });
  }

  goMember(){
    this.router.navigate(['/group',this.reward.group_id,'member', this.claimer.id, 'view']);
  }

}
