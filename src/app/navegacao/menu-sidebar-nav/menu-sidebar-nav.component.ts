import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-sidebar-nav',
  templateUrl: './menu-sidebar-nav.component.html',
  styleUrls: ['./menu-sidebar-nav.component.css']
})
export class MenuSidebarNavComponent implements OnInit {

  sidebarOpen = false;
  @ViewChild('sidebar') sidebar: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(event) {
    if (this.sidebarOpen && !this.sidebar.nativeElement.contains(event.target)) {
      this.sidebarOpen = false;
    }
  }

}