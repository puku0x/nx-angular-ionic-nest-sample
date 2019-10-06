import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataTestingModule } from '@workspace/data/testing';
import { Data, DataService } from '@workspace/data';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataTestingModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: DataService,
          useValue: {
            fetch: jest.fn(() => of<Data>({ message: 'Welcome to nx!' }))
          }
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to nx!'
    );
  });
});
