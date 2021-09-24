import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VtFormComponent } from './components/vt-form/vt-form.component';

@NgModule({
  declarations: [AppComponent, VtFormComponent],
  imports: [BrowserModule, StoreModule.forRoot({}, {}), ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
