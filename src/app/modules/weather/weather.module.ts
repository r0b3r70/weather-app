import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [WeatherComponent, WeatherTodayComponent, WeatherForecastComponent],
    imports: [CommonModule, FormsModule, WeatherRoutingModule, SharedModule],
    providers: [WeatherService],
})
export class WeatherModule {}
