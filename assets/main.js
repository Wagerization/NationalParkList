'use strict'

const searchUrl = 'https://api.nps.gov/api/v1/parks';
const apiKey = 'yV9BiqRON1CEt7Wepxet12knSwtgAYlT5AaNt2k1';

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayResults(responseJson) {
  $('#results-list').empty();
  for (let i=0; i<responseJson.data.length; i++) {
    console.log(responseJson);
    $('#results-list').append(`
      <li><h3>${responseJson.data[i].fullName}</h3>
      <a href='${responseJson.data[i].url}'>${responseJson.data[i].url}</a>
      <p>${responseJson.data[i].description}</p>
      </li>
      `)
  };
  $('#results').removeClass('hidden');
}

function getNationalParkInfo(query,limit=10) {
  const params = {
    stateCode: query,
    api_key: apiKey,
    limit: limit,
  };
  const queryString = formatQueryParams(params);
  console.log(queryString);
  const url = searchUrl + '?' + queryString;
  console.log(url);

  fetch(url)
    .then(response => {
      console.log(url);
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    const limit = $('#js-max-results').val();
    getNationalParkInfo(searchTerm,limit);
  });
}

$(watchForm);