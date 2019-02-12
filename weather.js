/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
// eslint-disable-next-line no-undef

axios({
  method: "get",
  url:
    "http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=91594d769e7d2f532695033ccce168a7"
})
  .then(response => {
    const temp = response.data.main.temp; //To reveal Temp
    $(".timeContainer").text(`<h1>${temp}</h1>`);
    //To reveal weather status
    const weather = response.data.weather[0].main;
    if (weather === "Clouds") {
      $(".timeContainer").text("<h1>☁️</h1>");
    } else if (weather === "mist") {
      $(".timeContainer").text("<h1>🌫️</h1>");
    } else if (weather === "snow") {
      $(".timeContainer").text("<h1>☀️</h1>");
    } else if (weather === "storm") {
      $(".timeContainer").text("<h1>🌪️</h1>");
    } else if (weather === "rain") {
      $(".timeContainer").text("<h1>️🌧️</h1>");
    } else if (weather === "clear") {
      $(".timeContainer").text("<h1>️🏖️</h1>");
    }
  })
  .catch(error => {
    console.log(error);
  });
