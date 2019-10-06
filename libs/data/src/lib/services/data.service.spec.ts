import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { Data } from '../models';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DataService
      ]
    });
    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request', () => {
    const response: Data = {
      message: 'Welcome to nx!'
    };
    service.fetch().subscribe(data => {
      expect(data).toBe(response);
    });
    const req = httpMock.expectOne(`/api`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
    expect(service).toBeTruthy();
  });
});
