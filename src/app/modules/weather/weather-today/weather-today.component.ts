import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent {

  @Input() weatherToday: any;
  

}
