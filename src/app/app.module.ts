import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiButtonDirective } from './ui-button.directive';
import { WhenDirective } from './when.directive';
import { ReversePipe } from './reverse.pipe';
import { BlogService } from './blog.service';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { routes } from './route';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UiButtonDirective,
    WhenDirective,
    ReversePipe,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
