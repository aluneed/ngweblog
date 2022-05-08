import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { PannelComponent } from './pannel/pannel.component';
import { TagsFilterComponent } from './tags-filter/tags-filter.component';
import { ContentNavComponent } from './content-nav/content-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidenavComponent,
    ContentListComponent,
    FooterComponent,
    MainContainerComponent,
    ContentContainerComponent,
    PannelComponent,
    TagsFilterComponent,
    ContentNavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
