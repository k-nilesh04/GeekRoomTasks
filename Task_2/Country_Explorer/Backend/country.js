import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();


fetch(
  'https://api.restcountries.com/countries/v5?q=canada',
  { headers: { 'Authorization': `Bearer ${process.env.COUNTRY_API_KEY}` } }
)
  .then(function (response) { return response.json(); })
  .then(function (data) { console.log(data); });