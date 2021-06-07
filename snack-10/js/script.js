// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

//for-----------------------------

var result = 0;

for (var i = 1; i <= 5; i++){

    userNumber = parseInt(prompt('inserisci un numero'));
    result += userNumber;

} 

console.log('la somma for è:' + result);

alert('hai il risultato del for nella console');

alert('ora inizia il while');

console.log('ora inizia il while');

//while --------------------------

sum = 0;

var x = 1;

while (x <= 5) {

    var userNumber = parseInt(prompt('inserisci un numero per while'));
    sum += userNumber
    x++;
} 

console.log('la somma è while:' + sum);
alert('hai il risultato del while nella console');