import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { WeatherForecast } from '../models/weather-forecast';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {

	@Input() weatherForecast: WeatherForecast;
  constructor() {
  }

  ngOnInit() {
  }

}
