import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // tslint:disable-next-line:variable-name
  private _users: BehaviorSubject<User[]>;
  private dataStore: {
    users: User[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = {
      users: []
    };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(usersUrl)
      .subscribe( data => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      }, error1 => {
        console.log('Failed to fetch users');
      });
  }

  userById(id: number) {
    return this.dataStore.users.find(user => user.id === id);
  }
}
