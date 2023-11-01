import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeoLocation } from 'src/app/models';

@Component({
    selector: 'app-dropdown-list',
    templateUrl: './dropdown-list.component.html',
    styleUrls: ['./dropdown-list.component.scss'],
})
export class DropdownListComponent {
    @Input() list?: GeoLocation[] | null;

    @Output() selected = new EventEmitter<GeoLocation>();

    select(value: GeoLocation) {
        this.selected.emit(value);
    }
    
}
