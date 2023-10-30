import { WeatherState, CurrentWeatherAPIResponse, ForecastWeatherAPIResponse, GeoAPIResponse } from "../models";

export const getGeoLocationMock: GeoAPIResponse[] = [
    {
        name: 'Amsterdam',
        local_names: {
            hi: 'ऐम्स्टर्डैम',
            bo: 'ཨེམ་སི་ཊར་ཌམ།',
            so: 'Amistardam',
            yi: 'אמסטערדאם',
            gl: 'Ámsterdam',
            de: 'Amsterdam',
            sk: 'Amsterdam',
            he: 'אמסטרדם',
            kn: 'ಆಂಸ್ಟರ್ಡ್ಯಾಮ್',
            la: 'Amstelodamum',
            bg: 'Амстердам',
            ja: 'アムステルダム',
            es: 'Ámsterdam',
            ru: 'Амстердам',
            ur: 'ایمسٹرڈیم',
            mk: 'Амстердам',
            uk: 'Амстердам',
            ht: 'Amstèdam',
            si: 'ඈම්ස්ටර්ඩෑම්',
            ml: 'ആംസ്റ്റർഡാം',
            fr: 'Amsterdam',
            ga: 'Amstardam',
            ta: 'ஆம்ஸ்டர்டம்',
            kk: 'Амстердам',
            pt: 'Amsterdão',
            tg: 'Амстердам',
            en: 'Amsterdam',
            mn: 'Амстердам',
            hu: 'Amszterdam',
            hy: 'Ամստերդամ',
            nl: 'Amsterdam',
            ps: 'امسټرډام',
            ko: '암스테르담',
            sr: 'Амстердам',
            ug: 'ئامستېردام',
            eo: 'Amsterdamo',
            pl: 'Amsterdam',
            zh: '阿姆斯特丹',
            be: 'Амстэрдам',
            lv: 'Amsterdama',
            kv: 'Амстердам',
            th: 'อัมสเตอร์ดัม',
            ku: 'Amsterdam',
            el: 'Αμστελόδαμο',
            it: 'Amsterdam',
            sq: 'Amsterdami',
            no: 'Amsterdam',
            sv: 'Amsterdam',
            is: 'Amsterdam',
            cv: 'Амстердам',
            os: 'Амстердам',
            oc: 'Amsterdam',
            ka: 'ამსტერდამი',
            ar: 'أمستردام',
            ba: 'Амстердам',
            fa: 'آمستردام',
            bn: 'আমস্টারডাম',
            my: 'အမ်စတာဒမ်မြို့',
            am: 'አምስተርዳም',
            ne: 'आम्स्टर्डम',
            mr: 'अ‍ॅम्स्टरडॅम',
            tt: 'Амстердам',
            lt: 'Amsterdamas',
            zu: 'I-Amsterdami',
        },
        lat: 52.3727598,
        lon: 4.8936041,
        country: 'NL',
        state: 'North Holland',
    },
    {
        name: 'New Amsterdam Island',
        local_names: {
            en: 'New Amsterdam Island',
            nl: 'Nieuw-Amsterdam',
            pt: 'Ilha de Nova Amesterdão',
            fr: 'Île de la Nouvelle-Amsterdam',
            zh: '阿姆斯特丹岛',
            it: 'Isola Nuova Amsterdam',
            es: 'Isla Nueva Ámsterdam',
            ca: 'Ille Nova Amsterdam',
            lt: 'Sala Naujasis Amsterdamas',
        },
        lat: -37.8364908,
        lon: 77.5541729591024,
        country: 'FR',
        state: 'French Southern and Antarctic Lands',
    },
    {
        name: 'Amsterdam',
        local_names: {
            nl: 'Amsterdam',
            pt: 'Amsterdão',
            ca: 'Amsterdam',
            en: 'Amsterdam',
            hi: 'एम्स्टर्डम',
            ko: '암스테르담',
        },
        lat: 52.37454030000001,
        lon: 4.897975505617977,
        country: 'NL',
        state: 'North Holland',
    },
    {
        name: 'City of Amsterdam',
        local_names: {
            en: 'City of Amsterdam',
        },
        lat: 42.943367,
        lon: -74.1850436,
        country: 'US',
        state: 'New York',
    },
    {
        name: 'Amsterdam',
        lat: 38.3497423,
        lon: -94.5891216,
        country: 'US',
        state: 'Missouri',
    },
];

export const getForecastWeatherMock: ForecastWeatherAPIResponse = {
    city: {
        id: 2759794,
        name: "Amsterdam",
        coord: {
            lon: 4.8936,
            lat: 52.3728
        },
        country: "NL",
        population: 2122311,
        timezone: 7200
    },
    cod: "200",
    message: 8.102604,
    cnt: 5,
    list: [
        {
            dt: 1698231600,
            sunrise: 1698214955,
            sunset: 1698251175,
            temp: {
                day: 11.16,
                min: 8.07,
                max: 11.27,
                night: 10.25,
                eve: 10.23,
                morn: 8.09
            },
            feels_like: {
                day: 10.55,
                night: 9.73,
                eve: 9.68,
                morn: 6.28
            },
            pressure: 995,
            humidity: 85,
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d"
                }
            ],
            speed: 4.37,
            deg: 217,
            gust: 10.89,
            clouds: 76,
            pop: 0.94,
            rain: 2.78
        },
        {
            dt: 1698318000,
            sunrise: 1698301464,
            sunset: 1698337453,
            temp: {
                day: 11.7,
                min: 7.84,
                max: 12.2,
                night: 9.76,
                eve: 9.82,
                morn: 8.16
            },
            feels_like: {
                day: 10.91,
                night: 8.45,
                eve: 8.31,
                morn: 7.62
            },
            pressure: 997,
            humidity: 76,
            weather: [
                {
                    id: 501,
                    main: "Rain",
                    description: "moderate rain",
                    icon: "10d"
                }
            ],
            speed: 4.04,
            deg: 126,
            gust: 7.42,
            clouds: 99,
            pop: 0.88,
            rain: 3.99
        },
        {
            dt: 1698404400,
            sunrise: 1698387973,
            sunset: 1698423732,
            temp: {
                day: 10.94,
                min: 9.47,
                max: 11.07,
                night: 10.34,
                eve: 10.78,
                morn: 9.87
            },
            feels_like: {
                day: 10.44,
                night: 9.83,
                eve: 10.39,
                morn: 7.96
            },
            pressure: 992,
            humidity: 90,
            weather: [
                {
                    id: 502,
                    main: "Rain",
                    description: "heavy intensity rain",
                    icon: "10d"
                }
            ],
            speed: 4.81,
            deg: 212,
            gust: 11.47,
            clouds: 99,
            pop: 1,
            rain: 15.56
        },
        {
            dt: 1698490800,
            sunrise: 1698474483,
            sunset: 1698510013,
            temp: {
                day: 11.35,
                min: 8.96,
                max: 11.64,
                night: 10.45,
                eve: 11.06,
                morn: 10.08
            },
            feels_like: {
                day: 10.79,
                night: 9.98,
                eve: 10.44,
                morn: 9.6
            },
            pressure: 995,
            humidity: 86,
            weather: [
                {
                    id: 501,
                    main: "Rain",
                    description: "moderate rain",
                    icon: "10d"
                }
            ],
            speed: 7.67,
            deg: 205,
            gust: 14.8,
            clouds: 99,
            pop: 0.97,
            rain: 12.68
        },
        {
            dt: 1698577200,
            sunrise: 1698560993,
            sunset: 1698596295,
            temp: {
                day: 13.42,
                min: 9.89,
                max: 13.42,
                night: 12.63,
                eve: 12.22,
                morn: 9.89
            },
            feels_like: {
                day: 13.04,
                night: 12.35,
                eve: 11.95,
                morn: 7.89
            },
            pressure: 994,
            humidity: 85,
            weather: [
                {
                    id: 501,
                    main: "Rain",
                    description: "moderate rain",
                    icon: "10d"
                }
            ],
            speed: 7.14,
            deg: 164,
            gust: 16.26,
            clouds: 89,
            pop: 1,
            rain: 8.09
        }
    ]
};

export const getCurrentWeatherMock: CurrentWeatherAPIResponse = {
    coord: {
        lon: 4.8936,
        lat: 52.3728
    },
    weather: [
        {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
        }
    ],
    base: "stations",
    main: {
        temp: 10.11,
        feels_like: 9.55,
        temp_min: 9.38,
        temp_max: 10.6,
        pressure: 992,
        humidity: 91
    },
    visibility: 10000,
    wind: {
        speed: 5.14,
        deg: 30
    },
    rain: {
        '1h': 0.19
    },
    clouds: {
        all: 20
    },
    dt: 1698251536,
    sys: {
        type: 2,
        id: 2012552,
        country: "NL",
        sunrise: 1698214955,
        sunset: 1698251175
    },
    timezone: 7200,
    id: 2759794,
    name: "Amsterdam",
    cod: 200
};

export const getWeatherStateMock: WeatherState = {
    locationSearch: '',
    selectedLocation: {},
    locationList: [],
    weather: {
        current: {
            description: 'light rain',
            temp: 10.11,
            temp_min: 9.38,
            temp_max: 10.6,
            wind: 5.14,
            icon: '10d',
        },
        forecast: [
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
            {
                dt: 1698490800,
                temp: 11.35,
                temp_min: 8.96,
                temp_max: 11.64,
                description: 'moderate rain',
                wind: 7.67,
                icon: '10d',
            },
            {
                dt: 1698577200,
                temp: 13.42,
                temp_min: 9.89,
                temp_max: 13.42,
                description: 'moderate rain',
                wind: 7.14,
                icon: '10d',
            },
        ],
    },
    error: '',
    status: 'idle'
};