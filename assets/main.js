"use strict";

function getParks() {
let userValue = $("#parkValue").val();
  fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${userValue}&api_key=ugQP2Zmj80Rp0eobwIE0QKWhUqk95p44B6q3ZFJ1`)
  .then(response => response.json()
  .then(responseJson => console.log(responseJson))
  .catch( error => console.log('Didn"t log it '))
  );
}

function clickForm() {
  $(".js-form").submit(event => {
    event.preventDefault();
    getParks();
  });
}

$(function(){
    clickForm();
});