import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {UserService} from '../../service/user.service';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  users: Observable<User[]>;
  // @ts-ignore
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();
    // this.users.subscribe(
    //   data => {
    //     if (data.length > 0) {
    //       this.router.navigate(['contactmanager', data[0].id]);
    //     }
    //   }
    // );

    this.router.events.subscribe(
      () => {
        if (this.isScreenSmall()) {
          this.sidenav.close();
        }
      }
    );
  }

  isScreenSmall(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 720px)');
  }
}

