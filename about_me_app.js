'use strict'

// this script asks if Kate is my first name //
var name=prompt('Is Kate my first name?');

//this variable allows either letter case to be allowed and converted to uppercase//
var nameUpper=name.toUpperCase();
console.log(nameUpper);

//If the answer to 'first name Kate' is no, output "Booyah!" in an element with id="name"
if (nameUpper === 'No' || nameUpper === 'N' || nameUpper === 'NO' || nameUpper === 'no') {
    document.getElementById('name').innerHTML = 'Booyah!';
}
else{
    alert('Oh, no!  You don\'t know me at all');
}