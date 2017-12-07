'use strict';
//Welcome statement
var user = prompt('Welcome earthling! What is your name?');
console.log('User:', user);
alert('Hi there ' + user + ', I\'m going to ask you some questions so that you can get to know me. After you answer the questions, please read my Bio!');
//First Question
var moonBeams = prompt('how many moon beams has tama caught when on pluto?');
console.log('number of moonbeams:', moonBeams);
if (moonBeams === 1 || moonBeams === 10){
  alert ('correct Stargazer!');
}
else {
  alert ('Oh bummer, that is incorrect!');
}
//Second Question
var saturnBurns = prompt('how many saturn burns did tama get when going to highschool?');
console.log('number of saturn burns:', saturnBurns);
if (saturnBurns === 2 || saturnBurns === 3) {
  alert ('OUCH! but thats correct!');
}
else {
  alert ('Nope! Wrong answer!');
}
//Third Question
var venus = prompt('is tama part venician?\n(Please answer "y" for Yes and "n" for No)');
console.log('tama part venician:', venus);
if (venus === 'y'){
  alert ('Good Guess! Tama is part venician');
}
if (venus === 'n'){
  alert ('Oh Earthling, No good! Tama is part venician!');
}
//Fourth Question
var mars = prompt('Did Tama work on Mars?\n(Please answer "y" for Yes and "n" for No');
console.log('work on mars:', mars);
if (mars === 'y'){
  alert ('Yep! Tama worked at the Mars Club!');
}
if (mars === 'n'){
  alert ('Nope! I did! I served Mars Bars to Martians!');
}
//Fifth Question
var blackHole = prompt('Did Tama go to highschool in a black hole in the middle of the universe?\n(Please answer "y" for Yes and "n" for No)');
console.log('blackHole:', blackHole)
if (blackHole === 'y'){
  alert ('Correctamundo! It was called Hello!Hello!Hello!Hello!, like an echo');
}
if (blackHole === 'n'){
  alert ('That is the wrong answer')
}
// sixth question while loop
var moonDust;
var counter = 1;
console.log('Pounds of Moondust:', moonDust);

while (moonDust !== 32){
  moonDust = parseInt(prompt('How many pounds of moonDust does Tama have?\n(Please enter a number)'));
  console.log('Pounds of moonDust:', moonDust);
}if (number < 32){
    alert ('Incorrect! Too Low!');
    counter++;
  } else if (number > 32){
    alert ('Bummer! Too high');
    counter++
  } else if (is NaN (moonDust) || moonDust === null){
    alert ('That is not a number')
    counter++
  }
//     correctcounters++;{
// alert('you got ' +   correctcounters + ' out of 7');
// }
