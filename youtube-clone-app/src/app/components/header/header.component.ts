import { Component, OnInit } from '@angular/core';
import { IconCategory } from '../../utils/icons/icons';

@Component({
  selector: 'ytc-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public iconCategory = IconCategory;

  constructor() { }

  ngOnInit(): void {
  }

}
