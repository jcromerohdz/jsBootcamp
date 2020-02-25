// Fetch
// fetch('https://swapi.co/api/planets')
//   .then((response) => {
//     if (!response.ok)
//       // console.log("ERRORRRRR NOT STATUS: 200", response.status);
//       throw new Error(`Status Code Error: ${response.status}`);

//     return response.json()
//   })
//   .then((data) => {
//     // for (let planet of data.results) {
//     //   console.log(planet.name);
//     // }
//     console.log('FETCHED ALL PLANETS (first 10');
//     const filmURL = data.results[0].films[0];
//     return fetch(filmURL);
//   }).then((response) => {
//     if (!response.ok)
//       throw new Error(`Status Code Error: ${response.status}`);

//     return response.json();
//   }).then((data) => {
//     console.log('FETCHED FIRST FIL, based on the first planet');
//     console.log(data.title);
//   })
//   .catch((err) => {
//     console.log('SOMETHING WENT WRONG WITH FETCH!');
//     console.log(err);
//   });

// Refactor Fetch
// const checkStatusAndParse = (response) => {
// 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// 	return response.json();
// };

// const printPlanets = (data) => {
// 	console.log('Loaded 10 more planets...');
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
// 	return fetch(url);
// };

// fetchNextPlanets()
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});

// axios external library ferch data for clean syntax

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
  return axios.get(url);
}
const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
}

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
  console.log("IN CATCH CALLBACK!!!");
  console.log(err);
});
