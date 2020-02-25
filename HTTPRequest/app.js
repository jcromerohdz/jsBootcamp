// Fetch
fetch('https://swapi.co/api/planets')
  .then((response) => {
    if (!response.ok)
      // console.log("ERRORRRRR NOT STATUS: 200", response.status);
      throw new Error(`Status Code Error: ${response.status}`);

    return response.json()
  })
  .then((data) => {
    // for (let planet of data.results) {
    //   console.log(planet.name);
    // }
    console.log('FETCHED ALL PLANETS (first 10');
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
  }).then((response) => {
    if (!response.ok)
      throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  }).then((data) => {
    console.log('FETCHED FIRST FIL, based on the first planet');
    console.log(data.title);
  })
  .catch((err) => {
    console.log('SOMETHING WENT WRONG WITH FETCH!');
    console.log(err);
  });