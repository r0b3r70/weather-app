import { Component, Input } from '@angular/core';
import { WeatherDataCurrent } from 'src/app/models';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent {

  @Input() weather?: WeatherDataCurrent | null;
  

}
