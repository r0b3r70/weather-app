import * as fromWeather from './weather.reducer';
import { selectWeatherCurrent } from './weather.selectors';

describe('Weather Selectors', () => {
  it('should select the feature state', () => {
    const result = selectWeatherCurrent({
      [fromWeather.weatherFeatureKey]: {
        ...fromWeather.initialState,
      }
    });

    expect(result).toEqual(undefined);
  });
});
