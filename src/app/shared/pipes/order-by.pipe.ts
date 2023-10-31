import { Pipe, PipeTransform } from '@angular/core';
import { WeatherDataForecast, SortOrderType } from 'src/app/models';

@Pipe({
    name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
    transform(value: WeatherDataForecast[], { sortOrder: sortOrder = SortOrderType.ASC } ): WeatherDataForecast[] {
        return value.slice().sort((a, b) => {
            if (sortOrder === SortOrderType.ASC) {
                return a.dt - b.dt;
            } else if (sortOrder === SortOrderType.DESC) {
                return b.dt - a.dt;
            }
            return 1;
        });
    }
}
