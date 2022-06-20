/*
1-Chiedere nome.
2-Chiedere cognome.
3-Chiedere il colore preferito.
4-Unire i dati per creare una password.
*/

// Domando il nome dell'user
const firstName = prompt('Come ti chiami?');
console.log(firstName);

// Domando il cognome dell'user
const lastName = prompt('Qual è il tuo cognome?');
console.log(lastName);

// Domando il nome dell'user
const favoriteColor = prompt('qual è il tuo colore preferito?');
console.log(favoriteColor);

// Creo Password
const password = firstName + lastName + favoriteColor;

// Lo metto all'interno del html
password = document.getElementById('new-password') '$[name] $[lastName] $[favoriteColor]';