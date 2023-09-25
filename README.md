# Weather App

This is weather checking website which uses OpenWeatherMap API to display variour weather data about any city you serach for! It offers a clean and smooth user interface.

## Demo

https://ds-weather-app.netlify.app/

## Features

- Clean and Simple UI
- Responsive Design
- Interactive Elements
- Accurate Weather details
- Theme toggle option

## Tech Stack

**Client:** React, HTML, CSS

**Server:** Node, OpenWeatherMap API, Netlify

## Installation

Install Weather app with npm.
Copy this repository link from github and open the folder where you want to install this project.\
Double click on the folder's path and type in cmd to open terminal.\
Then write these commands in terminal:

```bash
  git clone repo-url
  code .
```

Replace the "repo-url" with this repository's url that you copied.\
The code . is used to open this folder in vs code\
(you may any othe ide as well).
Then, execute these commands in vs code terminal:

```bash
  cd .\weatherApp\
  npm install
```

Once the modules are installed, create a ".env" file in the weather-app folder and set up your environment variables for OpenWeatherMap API.

## Environment Variables

To run this project, you will need to add the following environment variable to your .env file

`REACT_APP_WEATHER_API`

##

Enter you API data as :

`REACT_APP_WEATHER_API = "enterhere"`

replace "enterhere" with your OpenWeatherMap API Key in .env file.

##

After setting up your API keys execute this start command in vs code terminal.

`npm start`

##

**Note:** If your API is not working, make sure to restart the local host server if you started if before putting in the Environment Variables in .env file.

## Feedback

If you have any feedback, please reach out to me at devashishsoni926@gmail.com
