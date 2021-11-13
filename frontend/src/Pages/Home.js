import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Query";
import WeatherDetail from "./WeatherDetail";

function Home() {
  const [searchKey, setSearchKey] = useState("");
  const [temperatureScale, setTemeratureScale] = useState("celcius");
  const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: {
      search: searchKey,
    },
  });

  if (error) {
    console.log("error", error);
  }

  const handleChange = (e) => {
    console.log("bharat");
    setTemeratureScale(e.target.value);
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>

            <div className="form-row mb-4">
              <div className="col-10">
                <input
                  type="text"
                  className="form-control form-control-lg rounded"
                  placeholder="City"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  value={searchKey}
                  onChange={(event) => {
                    setSearchKey(event.target.value);
                  }}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-primary m-0"
                  onClick={() => getWeather()}
                >
                  Search
                </button>
              </div>
            </div>

            <div className="mb-4 pb-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="temperatureScale"
                  id="celcius"
                  value="celcius"
                  onChange={handleChange}
                  checked={temperatureScale === "celcius" ? true : false}
                />
                <label className="form-check-label" htmlFor="celcius">
                  Celsius
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="temperatureScale"
                  id="farenheit"
                  value="farenheit"
                  onChange={handleChange}
                  checked={temperatureScale === "farenheit" ? true : false}
                />
                <label className="form-check-label" htmlFor="farenheit">
                  Farenheit
                </label>
              </div>
            </div>
            <WeatherDetail data={data} temperatureScale={temperatureScale} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
