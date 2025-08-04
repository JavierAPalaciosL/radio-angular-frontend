import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {FeaturesModule} from './features/features-module';
import {HttpClientModule, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { SingInWithGoogleComponent } from './shared/components/singgoogle/sing-in-with-google-component';
import {SingInComponent} from './features/sing-in/sing-in-component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    App,
    SingInWithGoogleComponent,
    SingInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
