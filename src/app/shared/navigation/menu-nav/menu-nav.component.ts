import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit() { }

  menuIconClicked() {
    this.sidenavToggle.emit();
  }
}
