import {Component, Input, OnInit} from '@angular/core';
import {IconCategory} from '../../../utils/icons/icons';

@Component({
  selector: 'ytc-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.scss']
})
export class AppIconComponent implements OnInit {

  @Input() iconCategory!: IconCategory;

  constructor() { }

  ngOnInit(): void {
    if (!this.iconCategory) {
      throw Error('icon category is not set in app icon component.');
    }
  }

  onClick(): void {
    console.log('hi');
  }

}
