// var selectnumber = prompt ('inserisci un numero');
// var selectanother = prompt('inserici altro');

// var result = parseInt(selectnumber) + parseInt(selectanother)

// document.getElementById('risultato').innerHTML = result;

/////////////////////////////////

/*
var a = prompt('inserisci un importo')
var b = prompt('inserisci una percentuale di sconto per l articolo')

var sconto = parseInt(a) * parseInt(b) /100;
var totale = parseInt(a) - sconto;

document.getElementById('risultato').innerHTML = totale;
*/



//////
//var codiceNome = prompt('inserisci nome');

/*if (codiceNome === 'ottavio') {
    document.getElementById('output').innerHTML+='<br/> Benvenuto prof'
} else {
    document.getElementById('output').innerHTML+='<br/> Benvenuto collega'
}

var y = 100*/


/*var number = prompt('inserisci numero');

if (number % 2 === 0) {
    document.getElementById('output').innerHTML+='<br/>pari'
} else {
    document.getElementById('output').innerHTML+='<br/>dispari'
}*/


//////
// var number = Math.floor(Math.random() * 10);

// document.getElementById('output').innerHTML+= number;

// if (number > 5) {
//     document.getElementById('output').innerHTML+='<br/>sono maggiore';
// }




//  snackkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk



// var numeroUno = prompt  ('inserisci numero')
// var numeroDue = prompt  ('inserisci numero')

// if (numeroUno > numeroDue) {
//     document.getElementById('result').innerHTML += 'Il primo è superiore al secondo';
// } else if (numeroUno < numeroDue) {
//     document.getElementById('result').innerHTML += 'Il secondo è superiore al primo';
// }
// 

// var utenteUno = prompt ('inserisci nome');
// var utenteDue = prompt ('inserisci nome');

// if (utenteUno.length > utenteDue.length) {
//     document.getElementById('result').innerHTML += utenteUno + ' ha il nome più lungo di ' + utenteDue;
// } else if (utenteUno.length < utenteDue.length) {
//     document.getElementById('result').innerHTML += utenteDue + ' ha il nome più lungo di ' + utenteUno;
// }


// snack 3
/*
var result = 0;

for (var x = 1; x <= 10; x++); {
    var num = parseInt(prompt('inserisci un numero'));
    result += num;
}

document.getElementById('result').innerHTML = result;
*/


/*festa

alert ('controlla se sei stato invitato alla festa');

var nomeRegistri = prompt("inserisci il tuo nome");

var registrati = ['luca', 'dario', 'francesco', 'bardi', 'ottavio'];
var trovato = false;

for (var x = 0; x < registrati.length; x++ )
{
  if (nomeRegistri === registrati[x] )
    trovato = true;
}

if (trovato === false)
    document.getElementById('result').innerHTML = ("non sei stato invitato");
if (trovato === true)
    document.getElementById('result').innerHTML = ("sei stato invitato");

    */



var parteArray = [''];

var result = 0;
parteArray.push('1', '3', '5');

for (var x = 1; x <= 6; x++); {
    var num = parseInt(prompt('inserisci un numero'));
    result += num;
}

if ( parteArray != num)
    console.log;