import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { CovalentCoreModule } from '@covalent/core';
import { CovalentChartsModule } from '@covalent/charts';
import { CovalentDataTableModule } from '@covalent/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { appRoutes, appRoutingProviders } from './app.routes';

import { ChartComponent } from '../components/chart/chart.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DemoComponent } from './components/demo/demo.component';
import { DemosComponent } from './components/demos/demos.component';
import { DemoService } from './shared/demo/demo.service';

export const fireConfig = {
    apiKey: "AIzaSyBruRP2pFrk0dfCE3Su0irHtITdQgXimwk",
    authDomain: "cpm-app.firebaseapp.com",
    databaseURL: "https://cpm-app.firebaseio.com",
    storageBucket: "cpm-app.appspot.com",
    messagingSenderId: "779702431809"
  };

const myFirebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    LoginComponent,
    ChartComponent,
    DemoComponent,
    DemosComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentDataTableModule.forRoot(),
    appRoutes,
    NgxChartsModule,
    AngularFireModule.initializeApp(fireConfig, myFirebaseAuthConfig),
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    Title,
    DemoService,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
