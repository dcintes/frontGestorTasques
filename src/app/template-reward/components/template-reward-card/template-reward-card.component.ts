import { Component, Input, OnInit } from '@angular/core';
import { TemplateRewardDTO } from '../../models/template-reward.dto';

@Component({
  selector: 'app-template-reward-card',
  templateUrl: './template-reward-card.component.html',
  styleUrls: ['./template-reward-card.component.scss']
})
export class TemplateRewardCardComponent implements OnInit {

  @Input() template!: TemplateRewardDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
