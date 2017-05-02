'use strict'

// this script asks if Kate is my first name //
var name=prompt('Is Kate my first name?');

//this variable allows either letter case to be allowed and converted to uppercase//
var nameUpper=name.toUpperCase();
console.log(nameUpper);

//If the answer to 'first name Kate' is no, output "Booyah!" in an element with id="name"//
    if (nameUpper === 'No' || nameUpper === 'N' || nameUpper === 'NO' || nameUpper === 'no') {
    document.getElementById('name').innerHTML = 'Booyah!';
    }
    else{
        alert('Oh, no!  You don\'t know me at all');
    }
console.log('Q1? ' + name);

//If the answer to 'age' is yes, output "What are you trying to say?" //
var age=prompt('Am I over 21 years old?');
    if (age.toUpperCase () === 'y' || === 'yes') {
        alert('What are you trying to say?');
    }
    else{
        alert('Thank you!');
    }
    console.log('Q2? ' + age);

//If the answer to 'age' is yes, output "What are you trying to say?" //
var soccer=prompt('Was I once a soccer player?');
    if (soccer.toUpperCase () === 'y' || === 'yes') {
        alert('GOAL!?');
    }
    else{
        alert('Foul!');
    }
    console.log('Q2? ' + age);