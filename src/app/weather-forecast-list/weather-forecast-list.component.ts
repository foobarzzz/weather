import { Component, OnInit, Input } from '@angular/core';
import { weatherBit } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { CityDetails } from '../models/city-details';
import { WeatherForecast } from '../models/weather-forecast';



@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {

  

  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  @Input() searchText: string;
  cityDetails: CityDetails;

  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
    this.cityDetails = null;
  }

  getWeather() {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    //subscribe to weatherbit forecase results here
    
    this.http.get(this.weatherBitUrl).subscribe((results: any[]) => {

    console.log('WEATHER RESULTS ....');
    console.log(results);
    console.log('WEATHER RESULTS ....');


    
    this.cityDetails = new CityDetails();

    this.cityDetails.cityName = results['city_name'];
    this.cityDetails.stateCode = results['state_code'];
    this.cityDetails.countryCode = results['country_code'];
    
    var weatherData = results['data']; //take results and store in the data which has all weather data

    this.weatherForecasts = [];

    weatherData.forEach(weatherData => {
      var weatherForecast = new weatherForecast();
      weatherForecast.dateTime = weatherData['dateTime'];
      weatherForecast.temperature = weatherData['temperature'];
      weatherForecast.maxTemp = weatherData['max_temp'];
      weatherForecast.minTemp = weatherData['min_temp'];
      
      this.weatherForecasts.push(weatherForecast);

    });
  });


  }

  ngOnInit() {
  }

}
