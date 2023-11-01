import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ErrorComponent } from './error/error.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';

@NgModule({
    declarations: [LoaderComponent, ErrorComponent, DropdownListComponent],
    imports: [CommonModule],
    exports: [LoaderComponent, ErrorComponent, DropdownListComponent],
})
export class SharedModule {}
