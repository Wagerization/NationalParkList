"use strict";

function getParks() {
  let userValue = $("#parkValue").val();
  fetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=${userValue}&api_key=ugQP2Zmj80Rp0eobwIE0QKWhUqk95p44B6q3ZFJ1`
  )
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson.data))
    .catch(error => console.log(`Didn't log it `));
}

function displayResults(data) {
  $(".results").empty();
  let valueLength = $('.js-query').val();
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].fullName);
    // console.log(data[i].description);
    $(".results").append(
      `<ol><li>Name: ${data[i].fullName} ${total[valueLength]}</li></ol>`
    );
  }
}

function clickForm() {
  $(".js-form").submit(event => {
    event.preventDefault();
    getParks();
  });
}

$(function() {
  clickForm();
});



//<li>Description: ${data[i].description}</li><li>WebSite: <a href="${data[i].url}">URL</a></li>