/* eslint-disable vars-on-top */
function imageSuccess(response) {
  // Reveal random Background
  $("body").attr("background", response.data.urls.regular);
  $("body").css("background-repeat", "no-repeat");
  $("body").css("background-size", "cover");

  // Reveal the time
  $(".timeContainer").text(moment().format("h:mm A"));
}

function imageFail(error) {
  console.log(error);
}

axios({
  method: "get",
  url:
    "https://api.unsplash.com/photos/random?client_id=24fe501c5c24fc3e7491ec8c56e6bad600d44e6c4fbe71a8bd25f92647f0a382"
})
  .then(imageSuccess)
  .catch(imageFail);
