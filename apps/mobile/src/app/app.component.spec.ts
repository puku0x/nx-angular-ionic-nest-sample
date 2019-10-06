import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { of } from 'rxjs';
import { DataTestingModule } from '@workspace/data/testing';
import { Data, DataService } from '@workspace/data';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

  beforeEach(async(() => {
    statusBarSpy = {
      styleDefault: jest.fn()
    };
    splashScreenSpy = {
      hide: jest.fn()
    };
    platformReadySpy = Promise.resolve();
    platformSpy = {
      ready: jest.fn(() => platformReadySpy)
    }
    TestBed.configureTestingModule({
      imports: [DataTestingModule],
      declarations: [AppComponent],
      providers: [
        { provide: Platform, useValue: platformSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: StatusBar, useValue: statusBarSpy },
        {
          provide: DataService,
          useValue: {
            fetch: jest.fn(() => of<Data>({ message: 'Welcome to nx!' }))
          }
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ion-toolbar').textContent).toContain(
      'Welcome to nx!'
    );
  });
});
