import React from "react";

function WeatherDetail(props) {
  const { data, temperatureScale } = props;
  return data && data.getWeather ? (
    <>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12">
            <div
              className="card"
              style={{ color: "#4B515D", borderRadius: "35px" }}
            >
              <div className="card-body p-4">
                <div className="d-flex">
                  <h3 className="flex-grow-1">
                    {data.getWeather.location.name}
                    {", "}
                    {data.getWeather.location.country}
                  </h3>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <h6
                    className="display-4 mb-0 font-weight-bold"
                    style={{ color: "#1C2331" }}
                  >
                    {temperatureScale === "celcius"
                      ? data.getWeather.current.tempC + "°C"
                      : data.getWeather.current.tempF + "°F"}
                  </h6>
                  <span className="small" style={{ color: "#868B94" }}>
                    {data.getWeather.current.condition.text}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <div
                    className="flex-grow-1"
                    style={{ fontSize: "1rem", textAlign: "left" }}
                  >
                    <div>
                      <strong>Feels like: </strong>
                      <span className="ms-1">
                        {temperatureScale === "celcius"
                          ? data.getWeather.current.feelslikeC + "°C"
                          : data.getWeather.current.feelslikeF + "°F"}
                      </span>
                    </div>
                    <div>
                      <strong>Wind: </strong>
                      <span className="ms-1">
                        {data.getWeather.current.windKph} km/h
                      </span>
                    </div>
                    <div>
                      <strong>Humidity: </strong>
                      <span className="ms-1">
                        {data.getWeather.current.humidity}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src={data.getWeather.current.condition.icon}
                      alt="weather-icon"
                      width="100px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default WeatherDetail;
