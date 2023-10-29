import * as fromWeather from './weather.reducer';
import { selectWeather, selectWeatherCurrent, selectWeatherForecast } from './weather.selectors';
import { getWeatherStateMock } from 'src/app/mock-api/mock-data';
 
describe('Weather Selectors', () => {
  it('should select the initial state', () => {

    const result = selectWeather({
      [fromWeather.weatherFeatureKey]: {
        ...fromWeather.initialState,
      }
    });

    expect(result).toEqual(fromWeather.initialState);
  });

  it('should select current weather', () => {

    const stateMock = getWeatherStateMock;
    const result = selectWeatherCurrent.projector(stateMock);

    expect(result?.description).toEqual('light rain');
    expect(result?.temp).toEqual(10.11);
        
  });

  it('should select forecast weather', () => {

    const stateMock = getWeatherStateMock;
    const result = selectWeatherForecast.projector(stateMock);

    expect(result?.length).toEqual(5);
    expect(result?.[1].description).toEqual('moderate rain');        
  });
 

});
