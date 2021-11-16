import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Output() showHideNavMenu = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  showHideMenu() {
    this.showHideNavMenu.emit();
  }

}
