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

    this.tasksChart = { size: 0 };

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

      const tags = this.stadistics.tasksByUser.map(member => this.getMemberName(member.member_id,'Sense Assignar'));
      const values = this.stadistics.tasksByUser.map(member => member.total);

      this.tasksChart = {
        size: tags.length*30,
        grid: {
          top:0,
          left:0,
          right:0,
          bottom:0,
        },
        yAxis: {
          type: 'category',
          data: tags,
        },
        xAxis: {
          type: 'value'
        },
        series: [
          {
            data: values,
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
    }
  }

  getMemberName(member_id: string, buit: string = ''): string {
    const member = this.members.find(member => member.id === member_id);
    return member ? member.name : buit;
  }

}
