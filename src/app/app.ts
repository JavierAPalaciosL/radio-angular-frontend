import { Component, signal } from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angulartailwindtheme');

  private icanShowMenuBar: boolean = false;

  constructor(private router: Router) { }


  showDivBar() {
    if(localStorage.getItem('token') !== null){
      this.icanShowMenuBar = !this.icanShowMenuBar;
    }
  }

  getIcanShowMenuBar(): boolean{
    return this.icanShowMenuBar;
  }

  protected readonly localStorage = localStorage;

  navigateSingIn() {
    this.router.navigate(['/sing-in']).then(
      success => {},
      error => console.log(error)
    );

  }
}
