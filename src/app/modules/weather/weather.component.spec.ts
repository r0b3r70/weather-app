import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { getGeoLocationMock } from 'src/app/mock-api/mock-data';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('WeatherComponent', () => {
    let component: WeatherComponent;
    let fixture: ComponentFixture<WeatherComponent>;
    let mockService: jasmine.SpyObj<WeatherService>;
    let store: MockStore;
    const initialState = {};

    beforeEach(() => {
        mockService = jasmine.createSpyObj('WeatherService', [
            'getGeoLocation$',
            'getCurrentWeatherByLocation$',
            'getForecastByLocation$',
        ]);

        mockService.getGeoLocation$.and.returnValue(of(getGeoLocationMock));

        TestBed.configureTestingModule({
            declarations: [WeatherComponent],
            imports: [FormsModule, HttpClientTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: WeatherService, useValue: mockService },
                provideMockStore({ initialState }),
            ],
        });

        store = TestBed.inject(MockStore);

        fixture = TestBed.createComponent(WeatherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        store.setState({ loggedIn: true });

        expect(component).toBeTruthy();
    });
});
