var cifraUtente = prompt('inserisci un numero di quattro cifre')

var cifraLeng = cifraUtente.length;

if (cifraLeng !== 4){
    alert('inserisci una cifra da 4 numeri!');
} else if (isNaN(cifraUtente)){
    alert('inserisci numeri non lettere');
} else {
    var result = 0;
    for (var i = 0; i < cifraLeng; i++) {
        result += parseInt(cifraUtente[i])
    }
    console.log(result);
}
