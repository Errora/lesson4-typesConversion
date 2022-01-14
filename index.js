// 1. string
let favoriteDrink = 'water';
console.log(Number(favoriteDrink), Boolean(favoriteDrink), String(favoriteDrink));

// 2. number
let numberOfCups = 6;
console.log(Number(numberOfCups), Boolean(numberOfCups), String(numberOfCups));

// 3. boolean
let isColdDrink = true;
console.log(Number(isColdDrink), Boolean(isColdDrink), String(isColdDrink));

// 4. null
let studentFavoriteDrink = null;
console.log(Number(studentFavoriteDrink), Boolean(studentFavoriteDrink), String(studentFavoriteDrink));

// 5. undefined
let carOwner;
console.log(Number(carOwner), Boolean(carOwner), String(carOwner));

// 6. object
let drink = {
    favoriteDrink: 'water',
    numberOfCups: 6,
    isColdDrink: true,
};
console.log(Number(drink), Boolean(drink), String(drink));

// 7. bigint
let bigIntNumber = BigInt(10);
console.log(Number(bigIntNumber), Boolean(bigIntNumber), String(bigIntNumber));

// 8. symbol
let id = Symbol('id');
console.log(Number(id), Boolean(id), String(id));
