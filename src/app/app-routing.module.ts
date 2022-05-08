import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ContentListComponent } from './content-list/content-list.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ContentListComponent
  }, {
    path: 'content',  //not "contnet/" <- it'll be matched with "content/:pathName" where pathName is an empty string
    component: ContentListComponent
  }, {
    path: 'content/:pathName',
    component: ContentContainerComponent
  }, {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
