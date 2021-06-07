var listaNomi = ['bardi', 'luca', 'dario', 'cristian'];
var listaCognomi = ['fisniku', 'ianni', 'rossi', 'iaia'];
var listaInvitati = [];

//for----------------------------------------------------------------------------------


for(var i = 0; i < 3; i++){

    var nomeRandom = listaNomi[Math.floor(Math.random() * listaNomi.length)];

    var cognomeRandom = listaCognomi[Math.floor(Math.random() * listaCognomi.length)]; 

    var invitato = nomeRandom + " " + cognomeRandom;

    if(!listaInvitati.includes(invitato)){
        listaInvitati.push(invitato)
    }

    listaInvitati.push(invitato);

    document.getElementById('ciao').innerHTML += "<li>" + invitato + "</li>";
}


//while----------------------------------------------------------------------------------
 /*
while(listaInvitati.length < 3){
    var nome = listaNomi[Math.floor(Math.random() * listaNomi.length)];
    var cognome = listaCognomi[Math.floor(Math.random() * listaCognomi.length)];
    var invitato = nome + " " + cognome;

    if(!listaInvitati.includes(invitato)){
        listaInvitati.push(invitato)
        document.getElementById('ciao').innerHTML += "<li>" + invitato + "</li>";
    }

    
}
*/