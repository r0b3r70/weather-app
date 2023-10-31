import { Component, Input } from '@angular/core';
import { SortOrderType, WeatherDataForecast } from 'src/app/models';

@Component({
    selector: 'app-weather-forecast',
    templateUrl: './weather-forecast.component.html',
    styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent {
    @Input() weatherForecast?: WeatherDataForecast[] | null;
    public sortOrder: SortOrderType = SortOrderType.ASC;

    public toggleSortOrder(): void {
        this.sortOrder = this.sortOrder === SortOrderType.ASC ? SortOrderType.DESC : SortOrderType.ASC;
    }
}
