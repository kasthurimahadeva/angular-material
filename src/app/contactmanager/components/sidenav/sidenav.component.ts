import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.breakpointObserver.isMatched([Breakpoints.Small, Breakpoints.XSmall]);
  }
}

