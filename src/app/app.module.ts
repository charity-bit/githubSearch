import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ReposComponent } from './components/repos/repos.component';
import { NoUserComponent } from './components/no-user/no-user.component';
import { JoinPipe } from './pipes/join.pipe';
import { RouterModule } from '@angular/router';


 

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,
    NoUserComponent,
    JoinPipe,
   

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
     {path:'user',component: UserComponent},
     {path: 'repoes',component: ReposComponent},
     {path:'',redirectTo:'/user',pathMatch:'full'},
     {path:'**',component:NoUserComponent}
    ]),
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
