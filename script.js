// Loopar Bootcamp ////////////

// 1 //
for ( i = 0; i <= 999; i++) {
    console.log(i)   
}

// 2 //
for ( i = 100; i >= 0; i--) {
    console.log(i)   
}

// 3 //
// const fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple']

// for (i = 0; i < fruits.length; i++){
// console.log(fruits[i])
// }


// 4 //
const fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple']

for (i = 0; i < fruits.length; i++){
    console.log('index ' + i + '. ' + fruits[i]);
}

// 5 //

for (i = 1; i <= 10; i++ ) {
    console.log(i * 7)
}

// 6 //
//const fruitList = document.createElement('h3')
const frukter = ["apple", "banan", "apelsin", "jordgubbe", "kiwi"];

for (let i = 0; i < frukter.length; i++) {
    document.write(frukter[i]);
    if (i < frukter.length - 1) {
        document.write(", ");
    }
}
console.log(frukter)


// 7 //
const arrayen = ['apa', 'hund', 'katt', 'marsvin', 'lejon']
function sokIArray(arrayen, sokord) {
    let resultat = []
    for (let i = 0; i < arrayen.length; i++) {
        console.log('Current element:', arrayen[i]);
        if (arrayen[i].includes(sokord)) {
            console.log('Match found:', arrayen[i]); 
            resultat.push(arrayen[i])   
        } 
    } 
    return resultat; 
}
console.log(sokIArray(arrayen, 'apa'))

// 8 //
let numbers2 = [1, 3, 6, 9, 99, 200, 123]
let largestNumber = [0];

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > largestNumber){
        largestNumber = numbers2[i]  
    }
}
console.log(largestNumber)

// 9, 12 //

let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw']

//for (let i = 0; i < things.length; i++) {
    //console.log(things[i])
//}

things.forEach(function(things, index) {
    console.log(things, index)
})

// For in Loops ///
// 10 //
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  for (i = 0; i < Object.keys(person).length; i++) {
    console.log(Object.keys(person)[i])
  }

  // For each Loops //
  // 11 //
  // Samma som 9 //

  // 12 //
  // let är uppe i 9 //

  // 13 //

  let j = 0
  let text = ""
  while (j < 1000) {
     j++;
console.log(j) }

// 14 //
let deck = []

let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
let colors = ['hearts', 'clubs', 'diamonds', 'spades']

for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < cards.length; j++) {
    deck.push(`${colors[i]} ${cards[j]}`)  
} 
}
console.log(deck)
 

// 15 //

function printStars(totalStars) {
    for (let i = 0; i < totalStars; i++) {
        let stars = '';
        for (let j = 0; j <= i; j++) {
            stars += '*';
          }
          console.log(stars)
    }
  }
printStars(5) // logs out 5 times in the consol