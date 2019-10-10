"use strict";

function getParks() {
  let userValue = $("#parkValue").val();
  fetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=${userValue}&api_key=ugQP2Zmj80Rp0eobwIE0QKWhUqk95p44B6q3ZFJ1`
  )
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log(`Didn't log it `));
}

function displayResults(data){
  $('.results').empty();
  for( let i = 0; i < data.length; i++){
  console.log(data[i].fullName)
  console.log(data[i].description)
  }
}
//Full name, Description, Website URL

function clickForm() {
  $(".js-form").submit(event => {
    event.preventDefault();
    getParks();
  });
}

$(function() {
  clickForm();
});