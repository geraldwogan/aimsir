#!/usr/bin/env node

console.log("Attempting to print weather")

const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const CITY = 'Dublin';
const UNITS = 'metric';
const DAYS = 5;

async function getWeatherForecast() {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=${UNITS}&appid=${API_KEY}`);
        const forecastData = response.data;

        console.log(forecastData);
    } catch (error) {
        console.log(error);
    }
}

getWeatherForecast();