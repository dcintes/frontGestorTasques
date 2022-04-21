import { Component, Input, OnInit } from '@angular/core';
import { Forms } from '../../models/forms';

@Component({
  selector: 'app-reward-icon',
  templateUrl: './reward-icon.component.html',
  styleUrls: ['./reward-icon.component.scss']
})
export class RewardIconComponent implements OnInit {

  @Input() public icon!: string;
  @Input() public color!: string;
  @Input() public size!: string;
  @Input() public cost!: number;
  public textColor: string;

  forms: Forms;

  constructor() {
    this.forms= new Forms();

    this.textColor = '#000000';
  }

  ngOnInit(): void {
    this.textColor = this.contrastColor(this.color);
  }

  contrastColor(color: string) {
    const rgb = this.hexToRgb(color);

    if (rgb) {
      const yiq = ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;
      return (yiq >= 128) ? '#000000' : '#ffffff';
    }

    return '#000000';
  }

  hexToRgb(hex: string): { r: number, g: number, b: number } | null{
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
}
