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
    alert('Oh, no!  You don\'t know me at all!');
}
console.log('Q1? ' + name);

//If the answer to 'age' is yes, output "What are you trying to say?" //
var age=prompt('Am I over 21 years old?');
if (age.toUpperCase () === 'y' || age.toUpperCase () === 'yes') {
    alert('What are you trying to say?');
}
else{
    alert('Thank you!');
}
console.log('Q2? ' + age);

//If the answer to 'soccer' is yes, output "GOAL!" //
var soccer=prompt('Was I once a soccer player?');
if (soccer.toUpperCase () === 'y' || soccer.toUpperCase () === 'yes') {
    alert('GOAL!');
}
else{
    alert('Foul!');
}
console.log('Q3? ' + soccer);

//If the answer to 'microbio' is no, output "You're a good listener!" //
var microbio=prompt('Am I a microbiologist?');
if (microbio.toUpperCase () === 'n' || microbio.toUpperCase () === 'no') {
    alert('You\'re a good listener!');
}
else{
    alert('Hey, I don\'t work with fungus and mold!');
}
console.log('Q4? ' + microbio);

//If the answer to 'mayo' is no, output "You're right!" //
var mayo=prompt('Do I like mayonnaise?');
if (mayo.toUpperCase () === 'n' || microbio.toUpperCase () === 'no') {
    alert('You\'re right!');
}
else{
    alert('If there was a mayo-free state, I\'d move there!');
}
console.log('Q5? ' + mayo);