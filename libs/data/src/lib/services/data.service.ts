import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Data } from '../models';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get<Data>('/api');
  }
}
