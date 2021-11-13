# GraphQL Weather API

## Objective

---

Build an Apollo GraphQL application that exposes weather data.

You can use a free account from [https://www.weatherapi.com/](https://www.weatherapi.com/)

Please be sure to not spend more then 2-5 days on this.

## Project Goals

---

- Able to run locally with ease (hint: maybe dockerize your app?)
- Create instructions on how to run the application
- Demonstrate ability to think on the fly
- I am able to retrieve weather by zip code (postal code)
- I am able to retrieve weather by city

## How to run this application

---

To run the application with ease, I've dockerize your application

- Clone this repository and go to root directory

- Create `.env` file in `backend` folder

```
API_URL=http://api.weatherapi.com/v1/
API_KEY=___PUT_YOUR_API_KEY_HERE___
```

- Create free account on [https://www.weatherapi.com/](https://www.weatherapi.com/) and get API Key from there and update in .env

- Create `.env` file in `frontend` folder

```
REACT_APP_SERVER_URL=http://localhost:4000
```

- Then run following commands to build docker app

```
sudo docker build -t "react-app" ./frontend/

sudo docker build -t "api-server" ./backend/
```

- Now run application by running following command

```
sudo docker-compose up
```

- Open Browser and Visit http://localhost:3000

- You can search by passing US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name.
