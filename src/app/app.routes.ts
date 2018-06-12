import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent }  from './404/notfound.component';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'people', 
    pathMatch: 'full' 
  },
  { 
    path: 'people',
    component: PeopleComponent,
    pathMatch: 'full',
    data: {title: `Search Users`},
  },
  {
    path: 'profile', 
    component: ProfileComponent,
    pathMatch: 'full',
    data: {title: `Github User Profile`},
  },
  { 
    path: '**', 
    component: NotFoundComponent,
    data: {title: `We've got some trouble`},
  }
];

