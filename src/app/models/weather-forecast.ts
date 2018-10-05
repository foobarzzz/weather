import {    shiftInitState } from '@angular/core/src/view';
export class WeatherForecast {
	dateTime:string;
	temperature: number;
	maxTemp: number;
	minTemp: number;
	weatherDescription: string;
	windDirectionFull: string;
	windSpeed: number;

    constructor() {
    this.dateTime = '';
    this.temperature = 0;
    this.maxTemp = 0;
    this.minTemp = 0;
    this.weatherDescription = '';
    this.windDirectionFull = '';
    this.windSpeed = 0;
    }
}
