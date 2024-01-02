
# Loops Bootcamp
**En med hög övningar för att träna på loopar.**

## Classic For loops

1. Skapa en loop som itererar 1000 varv. För varje iteration ska du ```console.log()``` vilket varv du är på.

2. Skapa en loop som räknar ner från 100 till 0. För varje varv ska du ```console.log()``` vilket varv du är på.

```javascript
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
```

3. Loopa ut ovanstående array med en for-loop. För varje varv ska du ```console.log()``` innehållet ( frukten ).

4. Loopa ut ovanstående array med ```console.log()```. Sätt vilket index varje frukt har framför. Ex. ```0. apple, 1. orange``` osv.

5. Skapa en enkel tabell för multiplikation av ett nummer, till exempel 7:```console.log()``` sjuans gångertabell Ex. 
```javascript
7 14 28`` osv.
```

```javascript
const frukter = ["äpple", "banan", "apelsin", "jordgubbe", "kiwi"];
```
6. loopa ut ovanstående array och skriv ut det på sidan

7. Sök i en array:
Skapa en funktion som tar en array och ett sökord som argument och returnerar alla element som innehåller sökordet.
```javascript
function sokArray(arr, sokord)
```
8. Hitta högsta numret i en array med en For loop

## For of loops

```js 
let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
```

9. Loopa ut ovanstående array och ```console.log()``` varje pryl.

## For in loops

```js 
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

```

10. Loopa ut ovanstående Object och ```console.log()``` varje key.


## For Each loops

```js 
let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
```

11. Loopa ut ovanstående array och ```console.log()``` varje pryl.

12. Loopa ut ovanstående array och ```console.log()``` varje pryl samt vilken position i arrayen den har.




## While loops

13. Skapa en while-loop som kör 1000 varv. ```console.log()``` ut varje varv.


## Loop da loops

14. Generera en *kortlek* med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ). Ex.

```javascript
[..., 'hjärter 8', 'hjärter 9', ...]
```
15. skriv en function som genererar ut följande mönster i console.log

```javascript
* 
* * 
* * * 
* * * * 
* * * * * 
```


16. Loopa ut samtliga vänners favoritfrukter med en ```console.log()```.

```js
let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]

```

## Your choice

17. Brute force

Skriv ett program som tar ett random lösenord från [denna lista](https://gist.github.com/zocom-johan-kivi/8b4b5057e375d5dc2a329de062f779c5) och sparar i variabeln ```topsecret```. 

Skriv sedan ett program som med *brute force* testar samtliga lösenord l listan mot din hemliga slumpade lösenord. ```console.log()``` lösenordet som matchar.

```js 
console.log(`Aha! I found you, ${matched_password}.`)
```# Loopar-Bootcamp
