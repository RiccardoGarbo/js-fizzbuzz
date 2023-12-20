console.log('JS OK')
/*
-1 Aggiungo eventuali variabili fisse
-2 inizio il ciclo per aggiungere alla console un conteggio da 1-100
-3 Aggiungo una variabile a cui do lo stesso valore del numero dei cicli
-4 Cambio il valore della variabile in base alla sua divisibilità
-5 Creo una variabile li a cui aggiungo la variabile number
-6 Aggiungo la variabile li a elemento fisso ul
-7 stampo tutto in pagina 




*/
//VARIABILI FISSE
const element = document.getElementById('target')
const list = document.createElement('ul')



//INIZIO CICLO con cambio valori 
for (let i = 1; i <= 100; i++) {
    let number = i;
    if (number % 3 === 0 && number % 5 === 0) {
        number = ('FizzBuzz')
    }
    else if (number % 3 === 0) {
        number = ('Fizz')

    }
    else if (number % 5 === 0) {
        number = ('Buzz')
    }
    listItem = document.createElement('li');
    listItem.append(number);
    list.appendChild(listItem)

}
//Tolto lo stile alla lista
list.classList.add('list-unstyled');
// Aggiuti i list item alla lista
element.appendChild(list)

