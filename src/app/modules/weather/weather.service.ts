import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CurrentWeatherAPIResponse, ForecastWeatherAPIResponse, GeoAPIResponse } from '../../models/api.models';
import { Observable } from 'rxjs';
import { GeoLocation } from 'src/app/models/weather.models';

enum Units {
    metric = 'metric',
    imperial = 'imperial'
}


@Injectable({providedIn: 'root'})
export class WeatherService {
    private units = Units.metric;
    private defaultQueryParams = `&appid=${environment.apiKey}&units=${this.units}`;
    
    // toDo - use caching for last location
    private defaultLocation: GeoLocation = {
        lat: 52.3727598,
        lon: 4.8936041
    }
    
    constructor(private http: HttpClient) { }

    public getGeoLocation$(locationName: string): Observable<GeoAPIResponse[]> {
        const url = `${environment.apiUrl}/geo/1.0/direct?q=${locationName}&limit=5&appid=${environment.apiKey}`;
        return this.http.get<GeoAPIResponse[]>(url);
    }

    public getCurrentWeatherByLocation$(location: GeoLocation = this.defaultLocation) {
        const url = `${environment.apiUrl}/data/2.5/weather?lat=${location.lat}&lon=${location.lon}${this.defaultQueryParams}`;
        return this.http.get<CurrentWeatherAPIResponse>(url);
    }

    public getForecastByLocation$(location: GeoLocation = this.defaultLocation) {
        const limit = 5;
        const url = `${environment.apiUrl}/data/2.5/forecast/daily?lat=${location.lat}&lon=${location.lon}&cnt=${limit}${this.defaultQueryParams}`;
        return this.http.get<ForecastWeatherAPIResponse[]>(url);
    }

    
}