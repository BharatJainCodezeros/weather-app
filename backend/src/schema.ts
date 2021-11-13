import { gql, IResolvers, makeExecutableSchema } from "apollo-server";

const typeDefs = gql`
  type Location {
    name: String!
    region: String
    country: String
    lat: Float
    lon: Float
    tzId: String
    localtime: String
  }

  type Condition {
    text: String
    icon: String
  }

  type Weather {
    tempC: Float
    tempF: Float
    feelslikeC: Float
    feelslikeF: Float
    condition: Condition
    windMph: Float
    windKph: Float
    windDegree: Float
    windDir: String
    humidity: Int
    cloud: Int
    pressureMb: Float
    pressureIn: Float
  }

  type WeatherResponse {
    location: Location
    current: Weather
  }

  type Query {
    getWeather(search: String!): WeatherResponse
  }
`;

const resolvers: IResolvers = {
  Query: {
    getWeather(_, { search }, { dataSources }) {
      return dataSources.weatherAPI.getWeather(search);
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
