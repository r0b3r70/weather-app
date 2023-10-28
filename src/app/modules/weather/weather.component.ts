import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable, combineLatest, map, mergeMap } from 'rxjs';
import { CurrentWeatherAPIResponse, ForecastWeatherAPIResponse, GeoAPIResponse } from '../../models/api.models';
import { Store } from '@ngrx/store';
import { LocationActions } from 'src/app/state/weather/weather.actions';
import { selectLocationList, selectWeather, selectWeatherToday } from 'src/app/state/weather/weather.selectors';
import { GeoLocation } from 'src/app/models/weather.models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  public locationInput = '';
  public weatherStore$ = this.store.select(selectWeather);
  public locationList$ = this.store.select(selectLocationList);
  public weatherToday$ = this.store.select(selectWeatherToday);

  constructor(private readonly weatherService: WeatherService, private readonly store: Store) {}

  searchLocation() {
    if(this.locationInput !== '') {
      this.store.dispatch(LocationActions.searchRequested({ name: this.locationInput }));
    }
  }

  setLocation(location: GeoLocation = { lat: 90.0000, lon: 0.0000 }) {
    this.store.dispatch(LocationActions.selected({ selectedLocation: location} )); 
  }

  clearLocation() {
    this.store.dispatch(LocationActions.clear());
  }
  

  // tslint:disable-next-line: no-any
  public weather$: Observable<any> = this.weatherService.getGeoLocation$(this.locationInput).pipe(
    mergeMap((location: GeoAPIResponse[]) => {
        const setLocation = location[0];
        return combineLatest([
            this.weatherService.getCurrentWeatherByLocation$(setLocation),
            this.weatherService.getForecastByLocation$(setLocation),
        ]).pipe(
            map(([current, forecast]: [CurrentWeatherAPIResponse, ForecastWeatherAPIResponse]) => {
                return { current, forecast };
            }),
        );
    }
  ));

}
