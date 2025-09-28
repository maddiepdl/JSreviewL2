function fortuneTeller(name, age) {
  let nameFortune = "";
  let ageFortune = "";

  // The name rule
  if (name.length > 7) {
    nameFortune += "will marry late in life. ";
  } else if (name.length < 5) {
    nameFortune += "will marry within a year. ";
  } else {
    nameFortune += "will encounter a once-in-a-lifetime opportunity. ";
  }
// JS is case-sensitive so I've included name.toLowerCase()
  if (name[0].toLowerCase() === 'r') {
    nameFortune += "will be rich. ";
  }

  if (name.toLowerCase().includes('i')) {
    nameFortune += "will fall in love this week. ";
  }

  // The age rule
  if (age < 18) {
    ageFortune = "will meet a celebrity who changes lives.";
  } else if (age >= 18 && age <= 30) {
    ageFortune = "will travel to the beautiful city of New Orleans.";
  } else {
    ageFortune = "will win a lucrative opportunity at work.";
  }

  return `${name}, ${nameFortune}${ageFortune}`;
}

// The prompt
let userName = prompt("Enter Your Name:");
let userAge = parseInt(prompt("Enter Your Age:"), 10);

// The fortune
console.log(fortuneTeller(userName, userAge));
