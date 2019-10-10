'use strict'; 

 const apiKey = 'z2NgfCcGKnK0MwGRoKJa1LEmAfMA2UC9tVwyBcR5';
 

 function getParks(){
    const url = 'https://developer.nps.gov/api/v1';
    
    const options  = {
        headers : new Headers ({
            'api_key': apiKey})
    };

    fetch(url, options)
    .then( response => response.json()
    .then(responseJson => console.log(responseJson)))
}

$(function(){
    getParks();
})