import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { weatherReducer, WeatherEffects } from './state/weather';
import { ErrorsHandler } from './core/errors-handler';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({ weather: weatherReducer }, {}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        connectInZone: true}),
        EffectsModule.forRoot([WeatherEffects]),
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        {
            provide: ErrorHandler,
            useClass: ErrorsHandler,
        },
    ],
})
export class AppModule {}
