import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpParams} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sing-in-component',
  standalone: false,
  templateUrl: './sing-in-component.html',
  styleUrl: './sing-in-component.css'
})
export class SingInComponent {
  passwordVisible = false;
  password?: string;
  hidePassword = true;

  loginForm!: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]] });

  }

  public onSubmit(): void {

    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      console.log("invalid form");
      return;
    }

  }

  singInWithGoogle() {

    const authBaseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

    const params = new HttpParams()
      .set('scope', 'openid email profile')
      .set('access_type', 'offline')
      .set('include_granted_scopes', 'true')
      .set('response_type', 'code')
      .set('redirect_uri', `${environment.host}/users/oauth`)
      .set('client_id', '559402979834-mc1c66eku5aqt1igakm418852tfe20bn.apps.googleusercontent.com');
    const fullUrl = `${authBaseUrl}?${params.toString()}`;

    window.location.href = fullUrl;

  }

}
