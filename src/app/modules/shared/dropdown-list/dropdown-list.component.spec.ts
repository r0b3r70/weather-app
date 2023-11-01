import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownListComponent } from './dropdown-list.component';

describe('DropdownListComponent', () => {
    let component: DropdownListComponent;
    let fixture: ComponentFixture<DropdownListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DropdownListComponent],
        });
        fixture = TestBed.createComponent(DropdownListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });


    it(`should have a selected output`, () => {
        expect(component.selected).toBeDefined();
    });

    it('should render a list of locations based on the input', () => {
        component.list = [
            {
                name: 'Amsterdam',
                country: 'NL',
                lat: 51.5074,
                lon: 0.1278,
            },
            {
                name: 'Amsterdam',
                country: 'US',
                lat: 53.4808,
                lon: 2.2426,
            },
        ];
        fixture.detectChanges();
        const list = fixture.nativeElement.querySelectorAll('.select-list-option');
        expect(list.length).toEqual(2);
    });


});
