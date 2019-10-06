import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataModule } from '@workspace/data';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
