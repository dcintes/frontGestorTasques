import { Component, Input, OnInit } from '@angular/core';
import { TemplateTaskDTO } from '../../models/template-task.dto';

@Component({
  selector: 'app-template-task-card',
  templateUrl: './template-task-card.component.html',
  styleUrls: ['./template-task-card.component.scss']
})
export class TemplateTaskCardComponent implements OnInit {

  @Input() template!: TemplateTaskDTO;

  constructor() {}

  ngOnInit(): void {
  }

}
