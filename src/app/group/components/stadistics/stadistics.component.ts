import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MemberDTO } from 'src/app/member/models/member.dto';
import * as GroupAction from '../../actions';
import { StadisticsDTO } from '../../models/stadistics.model';


@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.scss']
})
export class StadisticsComponent implements OnInit {

  group_id: string | null;
  members: MemberDTO[];
  stadistics: StadisticsDTO;

  tasksChart: any;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
  ) {

    this.group_id = this.activatedRoute.snapshot.paramMap.get('group_id');

    this.members = [];
    this.stadistics = new StadisticsDTO();

    this.store.select(state => state.group.members).subscribe(members => {
      this.members = members;
    });

    this.store.select(state => state.group.stadistics).subscribe(stadistics => {
      this.stadistics = stadistics;

      this.initCharts();
    });
  }

  ngOnInit(): void {
    if(this.group_id) {
      this.store.dispatch(GroupAction.stadisticsGroup({group_id: this.group_id}));
    }
  }

  initCharts(): void{
    if(this.stadistics.tasksByUser.length > 0) {

      const data = [...this.stadistics.tasksByUser]
        .sort((a, b) => a.total - b.total)
        .map(member => {
          return [ this.getMemberName(member.member_id,'Sense Assignar'), member.total ]
        }
      );

      this.tasksChart = {
        size: data.length*30,
        grid: {
          top:0,
          left:0,
          right:0,
          bottom:0,
        },
        yAxis: {
          type: 'category',
        },
        xAxis: {
          type: 'value'
        },
        dataset: {
          source: data,
        },
        series: [
          {
            type: 'bar',
            label: {
              show: true,
              formatter: '{b}'
            },
            itemStyle: {
              color: '#8021f3'
            }
          }
        ]
      };
    } else {
      this.tasksChart = null;
    }
  }

  getMemberName(member_id: string, buit: string = ''): string {
    const member = this.members.find(member => member.id === member_id);
    return member ? member.name : buit;
  }

}
