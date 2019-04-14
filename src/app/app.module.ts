import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiButtonDirective } from './ui-button.directive';
import { WhenDirective } from './when.directive';
import { ReversePipe } from './reverse.pipe';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    UiButtonDirective,
    WhenDirective,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
