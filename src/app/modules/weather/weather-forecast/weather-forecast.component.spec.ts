import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastComponent } from './weather-forecast.component';
import { SortOrderType } from 'src/app/models';

describe('WeatherForecastComponent', () => {
    let component: WeatherForecastComponent;
    let fixture: ComponentFixture<WeatherForecastComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WeatherForecastComponent],
        });
        fixture = TestBed.createComponent(WeatherForecastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should toggle sort order', () => {
        component.sortOrder = SortOrderType.ASC;
        component.toggleSortOrder();
        expect(component.sortOrder).toEqual(SortOrderType.DESC);
        component.toggleSortOrder();
        expect(component.sortOrder).toEqual(SortOrderType.ASC);
    });
});
