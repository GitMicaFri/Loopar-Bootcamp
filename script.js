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

// 9 //




// Här är en steg-för-steg förklaring:

// let numbers2 = [1, 3, 6, 9, 99, 200, 123] - Detta är en array med sju nummer.

// let largestNumber = [0]; - Detta är en variabel som initialt sätts till 0. Målet är att hitta det största numret i arrayen numbers2 och lagra det i largestNumber.

// for (let i = 0; i < numbers2.length; i++) { ... } - Detta är en for-loop som går igenom varje element i numbers2-arrayen. i är indexet för det aktuella elementet.

// if (numbers2[i] > largestNumber){ ... } - Detta är ett if-statement som kontrollerar om det aktuella numret (numbers2[i]) är större än det nuvarande största numret (largestNumber).

// largestNumber = numbers2[i] - Om det aktuella numret är större än det nuvarande största numret, uppdateras largestNumber till det aktuella numret.

// console.log(largestNumber) - När loopen är klar skrivs det största numret ut i konsolen.

// Så, om vi skulle vilja förklara koden med en mening: Koden hittar det största numret i en array. 

// Men jag har en fråga till dig 🤔. Varför tror du att largestNumber initialt sätts till 0? Vad skulle hända om vi ändrade det till ett annat nummer?