import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTodayComponent } from './weather-today.component';

describe('WeatherTodayComponent', () => {
  let component: WeatherTodayComponent;
  let fixture: ComponentFixture<WeatherTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherTodayComponent]
    });
    fixture = TestBed.createComponent(WeatherTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
