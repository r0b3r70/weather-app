import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

import { WeatherService } from './weather.service';
import { GeoAPIResponse } from 'src/app/models';
import { getCurrentWeatherMock, getForecastWeatherMock, getGeoLocationMock } from 'src/app/mock-api/mock-data';

describe('WeatherService GeoLocation ', () => {
    const arrange = () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [WeatherService],
        });
        const service: WeatherService = TestBed.inject(WeatherService);
        const httpTestingController = TestBed.inject(HttpTestingController);

        return { service, httpTestingController };
    };

    it('should return an Observable of GeoAPIResponse[]', () => {
        const locationName = 'London';
        const url = `${environment.apiUrl}/geo/1.0/direct?q=${locationName}&limit=5&appid=${environment.apiKey}`;

        const { service, httpTestingController } = arrange();

        service.getGeoLocation$(locationName).subscribe((response) => {
            expect(response).toEqual(getGeoLocationMock);
        });

        const req = httpTestingController.expectOne(url);
        req.flush(getGeoLocationMock);
        httpTestingController.verify();
    });

    it('should return empty', () => {
        const locationName = 'Amsterdam';
        const url = `${environment.apiUrl}/geo/1.0/direct?q=${locationName}&limit=5&appid=${environment.apiKey}`;

        const { service, httpTestingController } = arrange();
        const geoAPIResponse: GeoAPIResponse[] = [];

        service.getGeoLocation$(locationName).subscribe((response) => {
            expect(response).toEqual([]);
        });

        const req = httpTestingController.expectOne(url);
        req.flush(geoAPIResponse);
        httpTestingController.verify();
    });

    it('should return an observable of CurrentWeatherAPIResponse', () => {
        const location = {
            lon: 4.8936,
            lat: 52.3728,
        };
        const url = `${environment.apiUrl}/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${environment.apiKey}&units=metric`;

        const { service, httpTestingController } = arrange();

        service.getCurrentWeatherByLocation$(location).subscribe((response) => {
            expect(response).toEqual(getCurrentWeatherMock);
        });

        const req = httpTestingController.expectOne(url);
        req.flush(getCurrentWeatherMock);
        httpTestingController.verify();
    });

    it('should return an observable of ForecastWeatherAPIResponse', () => {

        const location = {
            lon: 4.8936,
            lat: 52.3728,
        };
        const url = `${environment.apiUrl}/data/2.5/forecast/daily?lat=${location.lat}&lon=${location.lon}&cnt=5&appid=${environment.apiKey}&units=metric`;

        const { service, httpTestingController } = arrange();

        service.getForecastByLocation$(location).subscribe((response) => {
            expect(response).toEqual(getForecastWeatherMock);
        });

        const req = httpTestingController.expectOne(url);
        req.flush(getForecastWeatherMock);
        httpTestingController.verify();
    });
});

