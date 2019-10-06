import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataService } from '@workspace/data';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message$: Observable<string>;

  constructor(private dataSeervice: DataService) {}

  ngOnInit() {
    this.message$ = this.dataSeervice.fetch().pipe(map(data => data.message));
  }
}
