import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
  query getWeather($search: String!) {
    getWeather(search: $search) {
      location {
        name
        region
        country
        lat
        lon
        tzId
        localtime
      }
      current {
        tempC
        tempF
        feelslikeC
        feelslikeF
        condition {
          icon
          text
        }
        windMph
        windKph
        windDegree
        windDir
        humidity
        cloud
        pressureMb
        pressureIn
      }
    }
  }
`;
