const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

//determine a proper parameter variable name (personAge)

// to drink you have to be 19+ and get various responses based off how old you are
// you have to grow up to be able to drink if you are between 13 - 19
// 19 to 50 is drink away
// 50 to 70 is health
// 70 and above is heath AND life
// responses differ based off persons age
// let = check variable based off different age responses
// use => so age doesn't have gaps

function CheckDrinkingAge(personAge) {

  let check1 = "leave"
  let check2 = "grow up"
  let check3 = "drink away"
  let check4 = "health"
  let check5 = "life"
  
  if (personAge > 0 && personAge < 13) {
    console.log(`Checker says ${check1}`);
} else if (personAge >= 13 && personAge < 19) {
  console.log(`Checker says ${check2}`);
} else if (personAge >= 19 && personAge < 50) {
  console.log(`Checker says ${check3}`)
} else if (personAge >= 50 && personAge < 70) {
  console.log(`Checker says ${check4}`)
} else if (personAge >= 70) {
  console.log(`Checker says ${check4} and ${check5}`)
}
}

//I dont think you need variables for the display messages just because thats not gonna chance , it seems a little redundant as well - Cesaria
//i like extra condition checking is they are under 0 years old makes sense to me - Cesaria 

//determine a proper question to ask and the proper variable name for user input
readline.question('Whats your age?', personAge => {

  //convert input into number
  const numberAge = Number(personAge);

  // call the function from users age
  CheckDrinkingAge(numberAge);

  
  //close input
  readline.close();
});