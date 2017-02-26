import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DemosComponent } from './components/demos/demos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent, children: [{
      component: DashboardComponent,
      path: '',
    },
    {path: 'demos', component: DemosComponent},
  ]},
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
