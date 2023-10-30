import { Component, Input } from '@angular/core';
import { WeatherDataForecast } from 'src/app/models';

@Component({
    selector: 'app-weather-forecast',
    templateUrl: './weather-forecast.component.html',
    styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent {
    @Input() weatherForecast?: WeatherDataForecast[] | null;
}
