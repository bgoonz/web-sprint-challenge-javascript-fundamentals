// function summation( num ) {
//   let sum = 0;
//   for ( let i = num; i > 0; i-- ) {
//     sum += num;
//     num -= 1;
//   }
//   return sum;
// }
// summation( 4 );
// console.log( 'summation( 4 ): ', summation( 4 ) );//10
// 
// 
// const zooAnimals = [ {
//     animal_name: "Jackal, asiatic",
//     population: 5,
//     scientific_name: "Canis aureus",
//     state: "Kentucky"
//   },
//   {
//     animal_name: "Screamer, southern",
//     population: 1,
//     scientific_name: "Chauna torquata",
//     state: "Alabama"
//   },
//   {
//     animal_name: "White spoonbill",
//     population: 8,
//     scientific_name: "Platalea leucordia",
//     state: "Georgia"
//   },
//   {
//     animal_name: "White-cheeked pintail",
//     population: 1,
//     scientific_name: "Anas bahamensis",
//     state: "Oregon"
//   },
//   {
//     animal_name: "Black-backed jackal",
//     population: 2,
//     scientific_name: "Canis mesomelas",
//     state: "Washington"
//   },
//   {
//     animal_name: "Brolga crane",
//     population: 9,
//     scientific_name: "Grus rubicundus",
//     state: "New Mexico"
//   },
//   {
//     animal_name: "Common melba finch",
//     population: 5,
//     scientific_name: "Pytilia melba",
//     state: "Pennsylvania"
//   },
//   {
//     animal_name: "Pampa gray fox",
//     population: 10,
//     scientific_name: "Pseudalopex gymnocercus",
//     state: "Connecticut"
//   },
//   {
//     animal_name: "Hawk-eagle, crowned",
//     population: 10,
//     scientific_name: "Spizaetus coronatus",
//     state: "Florida"
//   },
//   {
//     animal_name: "Australian pelican",
//     population: 5,
//     scientific_name: "Pelecanus conspicillatus",
//     state: "West Virginia"
//   },
// ];
// 
//   function USApop( animals ) {
//     return animals.reduce( ( accum, pop ) => {
//       return accum + pop.population;
//     }, 0 );
//   }
// USApop( zooAnimals )
// console.log( USApop( zooAnimals ));
  function consume( a, b, cb ) {
    return cb( a, b );
  }


  /* 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁 */
  // 🦁🦁🦁 Use add to return the sum of two numbers 🦁🦁🦁

  function add( a, b ) {
    return ( a + b );
  }

  // 🦁🦁🦁 Use multiply to return the product of two numbers 🦁🦁🦁

  function multiply( a, b ) {
    return ( a * b );
  }

  // 🦁🦁🦁 Use greeting to accept a first and last name and return "Hello {first-name} {last-name}, nice to meet you!" 🦁🦁🦁

  function greeting( fn, ln ) {
    return `Hello ${fn} ${ln}, nice to meet you!`
  }

  // 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁 
  // ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
  console.log( consume( 2, 2, add ) ); // 4
  console.log( consume( 10, 16, multiply ) ); // 160
  console.log( consume( "Mary", "Poppins", greeting ) ); // Hello Mary Poppins, nice to meet you!
