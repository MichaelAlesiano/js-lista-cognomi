
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

cognomi.push(prompt("Inserisci il tuo cognome"));

for(var i = 1 ; i < cognomi.length ; i++){
       cognomi[i] = cognomi[i].charAt(0).toUpperCase() + cognomi[i].substr(1);
   }

console.log(cognomi.sort());

document.getElementById('lista_cognomi').innerHTML = cognomi;
