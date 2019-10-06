import { async, TestBed } from '@angular/core/testing';
import { DataTestingModule } from './data-testing.module';

describe('DataTestingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataTestingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataTestingModule).toBeDefined();
  });
});
