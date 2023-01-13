


function getRealWeatherDAta(){

const apiKey = "b1fe8043eb814c2592d134620231301"
const API_URL = 'https://api.weatherapi.com/v1/current.json?key=b1fe8043eb814c2592d134620231301&q=39.88792,16.328977'
const lat = 39.88792
const lon = 16.328977

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data)
  })
  .catch(error => {
    console.error('Error:', error);
  });

}

getRealWeatherDAta();
