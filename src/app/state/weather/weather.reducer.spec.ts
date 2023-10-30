import {
    getCurrentWeatherMock,
    getForecastWeatherMock,
    getGeoLocationMock,
    getWeatherStateMock,
} from 'src/app/mock-api/mock-data';
import { LocationActions, WeatherActions } from './weather.actions';
import { weatherReducer, initialState } from './weather.reducer';

describe('Weather Reducer', () => {
    describe('an unknown action', () => {
        it('ignore this and should return the previous state', () => {
            const action = { type: 'Unknown' };

            const result = weatherReducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });

    /* Location  */
    describe('LocationActions searchRequested ', () => {
        it('should update the state', () => {
            const action = LocationActions.searchRequested({ name: 'Amsterdam' });
            const state = weatherReducer(initialState, action);

            expect(state).toEqual({
                ...initialState,
                locationSearch: 'Amsterdam',
                status: 'loading',
            });
            expect(state).not.toBe(initialState);
        });
    });

    describe('LocationActions searchRequestSuccess', () => {
        it('should update the state', () => {
            const action = LocationActions.searchRequestSuccess({ response: getGeoLocationMock });
            const state = weatherReducer(initialState, action);

            expect(state).toEqual({
                ...initialState,
                locationList: getGeoLocationMock,
                error: '',
                status: 'idle',
            });
            expect(state).not.toBe(initialState);
        });
    });

    describe('LocationActions searchRequestFailure', () => {
        it('should update the state', () => {
            const action = LocationActions.searchRequestFailure({ error: 'Something went wrong' });
            const state = weatherReducer(initialState, action);

            expect(state).toEqual({
                ...initialState,
                error: 'Something went wrong',
                status: 'error',
            });
            expect(state).not.toBe(initialState);
        });
    });

    describe('LocationActions selected', () => {
        it('should update the state', () => {
            const action = LocationActions.selected({
                selectedLocation: {
                    name: 'Amsterdam',
                    country: 'Netherlands',
                    lat: 52.374,
                    lon: 4.8897,
                },
            });
            const state = weatherReducer(initialState, action);

            expect(state).toEqual({
                ...initialState,
                selectedLocation: {
                    name: 'Amsterdam',
                    country: 'Netherlands',
                    lat: 52.374,
                    lon: 4.8897,
                },
            });
            expect(state).not.toBe(initialState);
        });
    });

    /* Current Weather */
    describe('WeatherActions currentWeatherRequested', () => {
        it('should update the state', () => {
            const action = WeatherActions.currentWeatherRequested({
                location: { lat: 52.374, lon: 4.8897 },
            });
            const state = weatherReducer(initialState, action);

            expect(state).toEqual({
                ...initialState,
                status: 'loading',
            });
        });
    });

    describe('WeatherActions currentWeatherRequestSuccess', () => {
        it('should update the state', () => {
            const action = WeatherActions.currentWeatherRequestSuccess({
                response: getCurrentWeatherMock,
            });
            const state = weatherReducer(initialState, action);

            expect(state).toEqual({
                ...initialState,
                weather: {
                    ...initialState.weather,
                    current: getWeatherStateMock.weather.current,
                },
                error: '',
                status: 'idle',
            });
        });
    });

    describe('WeatherActions currentWeatherRequestFailure', () => {
        it('should update the state', () => {
            const action = WeatherActions.currentWeatherRequestFailure({
                error: 'Something went wrong',
            });
            const state = weatherReducer(initialState, action);

            expect(state).toEqual({
                ...initialState,
                error: 'Something went wrong',
                status: 'error',
            });
        });
    });

    /* Forecast Weather */
    describe('WeatherActions forecastWeatherRequested', () => {
        it('should update the state', () => {
            const action = WeatherActions.forecastWeatherRequested({
                location: { lat: 52.374, lon: 4.8897 },
            });
            const state = weatherReducer(initialState, action);

            expect(state).toEqual({
                ...initialState,
                status: 'loading',
            });
        });
    });

    describe('WeatherActions forecastWeatherRequestSuccess', () => {
        it('should update the state', () => {
            const action = WeatherActions.forecastWeatherRequestSuccess({
                response: getForecastWeatherMock,
            });
            const state = weatherReducer(initialState, action);

            expect(state).toEqual({
                ...initialState,
                weather: {
                    ...initialState.weather,
                    forecast: getWeatherStateMock.weather.forecast,
                },
                error: '',
                status: 'idle',
            });
        });
    });

    describe('WeatherActions forecastWeatherRequestFailure', () => {
        it('should update the state', () => {
            const action = WeatherActions.forecastWeatherRequestFailure({
                error: 'Something went wrong',
            });
            const state = weatherReducer(initialState, action);

            expect(state).toEqual({
                ...initialState,
                error: 'Something went wrong',
                status: 'error',
            });
        });
    });
});
