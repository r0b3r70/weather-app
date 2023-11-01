import { SortOrderType } from 'src/app/models';
import { OrderByPipe } from './order-by.pipe';

const mockForecast = [
    {
        dt: 1698231600,
        temp: 11.16,
        temp_min: 8.07,
        temp_max: 11.27,
        description: 'light rain',
        wind: 4.37,
        icon: '10d',
    },
    {
        dt: 1698318000,
        temp: 11.7,
        temp_min: 7.84,
        temp_max: 12.2,
        description: 'moderate rain',
        wind: 4.04,
        icon: '10d',
    },
    {
        dt: 1698404400,
        temp: 10.94,
        temp_min: 9.47,
        temp_max: 11.07,
        description: 'heavy intensity rain',
        wind: 4.81,
        icon: '10d',
    },
];

const mockForecastDESC = [
    {
        dt: 1698404400,
        temp: 10.94,
        temp_min: 9.47,
        temp_max: 11.07,
        description: 'heavy intensity rain',
        wind: 4.81,
        icon: '10d',
    },
    {
        dt: 1698318000,
        temp: 11.7,
        temp_min: 7.84,
        temp_max: 12.2,
        description: 'moderate rain',
        wind: 4.04,
        icon: '10d',
    },
    {
        dt: 1698231600,
        temp: 11.16,
        temp_min: 8.07,
        temp_max: 11.27,
        description: 'light rain',
        wind: 4.37,
        icon: '10d',
    },
];

describe('OrderByPipe', () => {
    it('should sort the array in ascending order', () => {
        const pipe = new OrderByPipe();
        const result = pipe.transform(mockForecast, SortOrderType.ASC);
        expect(result).toEqual(mockForecast);
    });

    it('should sort the array in descending order', () => {
        const pipe = new OrderByPipe();
        const result = pipe.transform(mockForecast, SortOrderType.DESC);
        expect(result).toEqual(mockForecastDESC);
    });

    it('should sort the array in ascending order by default', () => {
        const pipe = new OrderByPipe();
        const result = pipe.transform(mockForecastDESC);
        expect(result).toEqual(mockForecast);
    });
});
