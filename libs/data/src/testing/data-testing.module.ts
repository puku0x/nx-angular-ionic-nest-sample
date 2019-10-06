import { NgModule } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataService } from '../lib/services';

@NgModule({
  imports: [
    HttpClientTestingModule
  ],
  providers: [
    DataService
  ]
})
export class DataTestingModule {}
