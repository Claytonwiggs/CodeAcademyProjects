let raceNumber = Math.floor(Math.random() * 1000);
let registrationTime = true;
let runnerAge = 17;

if (runnerAge >= 18 && registrationTime == true) {
  raceNumber = raceNumber + 1000;
}

if (runnerAge >= 18 && registrationTime == true) {
  console.log(`Your race time will we 9:30 am, and your race number is ${raceNumber}`);
} else if (runnerAge >= 18 && registrationTime == false) {
  console.log(`Late Adults run at 11:00am, your race number is ${raceNumber}`);
} else if (runnerAge < 18 && registrationTime == true) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration), your race number is ${raceNumber}`);
} else {
  console.log("Please see the registration desk");
}
