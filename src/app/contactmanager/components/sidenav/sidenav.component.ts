import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {UserService} from '../../service/user.service';
import {Observable} from 'rxjs';
import {User} from '../../models/user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  users: Observable<User[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();
    this.users.subscribe(
      data => console.log(data)
    );
  }

  isScreenSmall(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 720px)');
  }
}

