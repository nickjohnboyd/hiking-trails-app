export interface DailyWeather {
  clouds: number
  dew_point: number
  dt: number
  feels_like: {
    day: number
    night: number
    eve: number
    morn: number
  }
  humidity: number
  pressure: number
  rain:number
  sunrise: number
  sunset: number
  temp: {
    day: number
    eve: number
    max: number
    min: number
    morn: number
    night: number
  }
  uvi: number
  weather: [
    {
      description: string
      icon: string
      id: number
      main: string
    }
  ]
  wind_deg: number
  wind_speed: number
}