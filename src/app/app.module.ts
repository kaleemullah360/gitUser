import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent }  from './404/notfound.component';
import { CoreService } from './core.service';
import { APP_CONFIG, AppConfig } from './app.config'; // provides system level custome configurations
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ProfileComponent,
    NotFoundComponent
  ],
  imports: [
  	HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    NgbModule.forRoot()
  ],
  providers: [CoreService,
  { provide: APP_CONFIG, useValue: AppConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
