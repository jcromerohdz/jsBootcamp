// Async and Await

// async function greet() {
//     return 'HELLO';
// }

// greet().then((val) => {
//   console.log('PROMISE RESOLVED WITH: ', val)
// });

// async function add(a, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw 'X and Y must be numbers!';
//     }
//     return x + y;
// }

// add('e', 'r').then(val => {
//     console.log('PROMISE RESOLVED WITH: ', val);
// }).catch(err => {
//     console.log('PROMISE REJECTED WITH: ', err);
// })

// async function getPlanets() {
//     const res = await axios.get('https://swapi.co/api/planetsss/');
//     console.log(res.data);
// }

// getPlanets().catch((err) => {
//     console.log("IN CATCH!!!");
//     console.log(err);
// })

// async function getPlanets() {
//     try {
//         const res = await axios.get('https://swapi.co/api/planetsss/');
//         console.log(res.data);
//     } catch(e){
//         console.log('IN CATCH!', e);
//     }
// }

// getPlanets()

// Parallel Vs Sequential Requests
// async function get3Pokemon() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }

async function get3Pokemon() {
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    // const poke1 = await prom2;
    // const poke2 = await prom3;
    // const poke3 = await prom1;
    const results = await Promise.all([prom1, prom2, prom3]);

    // console.log(poke1.data);
    // console.log(poke2.data);
    // console.log(poke3.data);
    // console.log(results);
    printPokemon(results);
}

function printPokemon(results) {
    for (let pokemon of results) {
        console.log(pokemon.data.name);
    }
}

get3Pokemon()

function changeBodyColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

let colors = ['aliceblue',
    'antiquewhite',
    'aquamarine',
    'blueviolet',
    'cornflowerblue',
    'deeppink',
    'darkslategrey',
    'greenyellow',
    'lightgreen',
    'magenta'
];

// Sequential 
// async function lightShow() {
//     for (let color of colors) {
//         await changeBodyColor(color, 1000);    
//     }
// }

// lightShow();
