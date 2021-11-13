import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import camelCaseKeys from "camelcase-keys";
export class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.params.set("key", process.env.API_KEY);
  }

  async getWeather(search: string) {
    const data = await this.get(this.baseURL + "current.json", { q: search });
    return camelCaseKeys(data, { deep: true });
  }
}

export const dataSources = () => ({ weatherAPI: new WeatherAPI() });
