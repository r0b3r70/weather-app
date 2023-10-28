import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocationActions, selectLocationList, selectWeatherCurrent, selectWeatherForecast } from 'src/app/state/weather';
import { GeoLocation } from 'src/app/models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  public locationSearch = '';
  public locationList$ = this.store.select(selectLocationList);
  public weatherCurrent$ = this.store.select(selectWeatherCurrent);
  public weatherForecast$ = this.store.select(selectWeatherForecast);

  constructor(private readonly store: Store) {}

  searchLocation() {
    if(this.locationSearch !== '') {
      this.store.dispatch(LocationActions.searchRequested({ name: this.locationSearch }));
    }
  }

  setLocation(location: GeoLocation) {
    this.store.dispatch(LocationActions.selected({ selectedLocation: location} )); 
  }

}
