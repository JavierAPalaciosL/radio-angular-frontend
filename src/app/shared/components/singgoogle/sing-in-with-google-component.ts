import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sing-in-with-google-component',
  standalone: false,
  template: '<p class="text-3xl font-semibold">Processing request ...</p>',
  styleUrl: './sing-in-with-google-component.css'
})
export class SingInWithGoogleComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token') || this.route.snapshot.fragment?.split('=')[1];
    if(token !== undefined){
      localStorage.setItem('token', token);



      this.router.navigate(['/countries']);
    }
  }

}
