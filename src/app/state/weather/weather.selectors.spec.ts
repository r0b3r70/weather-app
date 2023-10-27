import * as fromWeather from './weather.reducer';
import { selectWeather } from './weather.selectors';

describe('Weather Selectors', () => {
  it('should select the feature state', () => {
    const result = selectWeather({
      [fromWeather.weatherFeatureKey]: {
        ...fromWeather.initialState,
      }
    });

    expect(result).toEqual({
        location: '',
        selectedLocation: {},
        locationList: [],
        weather: {},
        error: '',
        status: 'idle',        
    });
  });
});
