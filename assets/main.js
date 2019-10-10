
'use strict';

const url = 'https://developer.nps.gov/api/v1?api_key=nVtBJ1VHN0WNb6109Wst1kQ1MoxtLcKkYx4n9TCS';

 function getParks(){

    fetch(url)
    .then( response => response.json()
    .then(responseJson => console.log(responseJson)))
}

$(function(){
    getParks();
})



