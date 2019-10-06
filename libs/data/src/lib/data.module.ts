import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    DataService
  ]
})
export class DataModule {}
