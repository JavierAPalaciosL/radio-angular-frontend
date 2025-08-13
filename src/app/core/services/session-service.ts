import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import User from '../models/User';
import {HttpClient} from '@angular/common/http';
import {API} from '../API';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private userSubject = new BehaviorSubject<User>({email: "", name: "", firstName: "", password: ""});
  public user$: Observable<User> = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    const token: string | null = localStorage.getItem('token');
    if(token !== null){
      this.setToken(token);
    }
  }

  setToken(token: string) {
    this.httpClient.get<User>(API.getUserWithJWT(), {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).subscribe({
      next: (user: User) => {
        this.setUser(user);
      },
      error: (err) => {
        console.error('Error al obtener usuario:', err);
      }
    });
  }

  setUser(user: User) {
    this.userSubject.next(user);
  }

  clearUser() {
    this.userSubject.next({email: "", name: "", firstName: "", password: ""});
  }

}
