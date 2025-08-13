import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SessionService} from '../../core/services/session-service';
import User from '../../core/models/User';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-locations-component',
  standalone: false,
  templateUrl: './dashboard-locations-component.html',
  styleUrl: './dashboard-locations-component.css'
})
export class DashboardLocationsComponent implements OnInit, OnDestroy{
  private icanShowMenuBar: boolean = false;
  private user!: User;
  private sub!: Subscription;
  protected readonly localStorage = localStorage;

  constructor(private router: Router, private sessionService: SessionService) { }

  showDivBar() {
    if(localStorage.getItem('token') !== null){
      this.icanShowMenuBar = !this.icanShowMenuBar;
    }
  }

  getIcanShowMenuBar(): boolean{
    return this.icanShowMenuBar;
  }

  navigateSingIn() {
    this.router.navigate(['/sing-in']).then(
      success => {},
      error => console.log(error)
    );
  }

  ngOnInit(): void {
    this.sub = this.sessionService.user$.subscribe(u => {
      this.user = u;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getUser() : User{
    return this.user;
  }

  logout() {
    this.localStorage.removeItem('token');
    this.icanShowMenuBar = false;
    this.router.navigate(['dashboard/countries']);

  }
}
