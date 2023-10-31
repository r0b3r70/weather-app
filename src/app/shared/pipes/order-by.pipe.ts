import { Pipe, PipeTransform } from '@angular/core';
import { WeatherDataForecast, SortOrderType } from 'src/app/models';

@Pipe({
    name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
    transform(value: WeatherDataForecast[], order?: SortOrderType): WeatherDataForecast[] {
        return value.slice().sort((a, b) => {
            if (order && order === SortOrderType.DESC) {
                return b.dt - a.dt;
            } else {
                return a.dt - b.dt;
            }
        });
    }
}
