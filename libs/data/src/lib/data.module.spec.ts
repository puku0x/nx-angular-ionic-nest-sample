import { async, TestBed } from '@angular/core/testing';
import { DataModule } from './data.module';

describe('DataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataModule).toBeDefined();
  });
});
