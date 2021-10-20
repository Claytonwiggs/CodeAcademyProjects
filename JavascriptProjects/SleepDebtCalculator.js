const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 8;
      break;
    case "Wednesday":
      return 8;
      break;
    case "Thursday":
      return 8;
      break;
    case "Friday":
      return 8;
      break;
    case "Saturday":
      return 8;
      break;
    case "Sunday":
      return 8;
      break;
  }
};

const getActualSleepHours = () => {
  let hours =
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");
  return hours;
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("The User got the ideal amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("The User got more sleep than needed.");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("The User should get some sleep");
  }
}
console.log(calculateSleepDebt());
