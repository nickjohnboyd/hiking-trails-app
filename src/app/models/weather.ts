export interface Weather {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  wind_speed: number
  wind_deg: number
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
}
