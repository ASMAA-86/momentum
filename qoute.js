axios({
  method: "get",
  url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
})
  .then(response => {
    //Reveal the quoteText and quoteAuthor
    const quoteText = response.data.quoteText;
    const quoteAuthor = response.data.quoteAuthor;
    $("#qouteContainer").text("<p>${quoteText}</p>");
    $("#qouteContainer").text("<p>${quoteAuthor}</p>");
  })
  .catch(error => {
    console.log(error);
  });
