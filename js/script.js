console.log('JS OK')
/*-1 Faccio partire un ciclo per stampare in console i numeri da 1 a 100
-2 In base al numero sostituisco con if il valore della i.



*/


console.log(i)
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }
    else if (i % 5 === 0) {
        console.log('Buzz')
    }
    else if (i % 3 === 0) {
        console.log('Fizz')
    }
    else {
        console.log(i)
    }
}





