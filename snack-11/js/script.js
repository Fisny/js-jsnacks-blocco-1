//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

var nU = parseInt(prompt('inserisci un numero'));

if (nU % 2 == 0){
    console.log(nU)
} else {
    console.log(nU + 1)
}