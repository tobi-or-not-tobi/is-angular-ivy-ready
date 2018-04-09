import { TestBed, async } from '@angular/core/testing';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppModule],
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    'should contain a navigation bar component',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const navBarElement = fixture.debugElement.nativeElement.querySelector(
        'app-navbar'
      );
      expect(navBarElement).toBeTruthy();
    })
  );
});
