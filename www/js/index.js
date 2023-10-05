// Define the date as constants
const currentDate = new Date();
const month = currentDate.getMonth() + 1;
const dayNumber = currentDate.getDate();
const dayOfWeek = currentDate.getDay(); // 0 for Sunday

// Define letters in formulas
function getLettersForDayOfWeek(dayOfWeek) {
  switch (dayOfWeek) {
    case 0:
      return "SU"; // Sunday
    case 1:
      return "MO"; // Monday
    case 2:
      return "TU"; // Tuesday
    case 3:
      return "WE"; // Wednesday
    case 4:
      return "TH"; // Thursday
    case 5:
      return "FR"; // Friday
    case 6:
      return "SA"; // Saturday
    default:
      return ""; // Invalid day of week
  }
}

// Variables needed in formulas
const formulaMMDD = (month.toString().padStart(2, '0') + dayNumber.toString().padStart(2, '0'));
const formulaDayLetter = getLettersForDayOfWeek(dayOfWeek);

// Define the formulas
const formulas = [
  {
    name: 'Formula 1',
    result: formulaMMDD * 1
  },
  {
    name: 'Formula 2',
    result: "Formula2" + formulaMMDD
  },
  {
    name: 'Formula 3',
    result: formulaMMDD * 2
  },
  {
    name: 'Formula 4',
    result: formulaMMDD * 3 + "Formula4"
  },
  {
    name: 'Formula 5',
    result: formulaDayLetter + formulaMMDD * 4
  },
  {
    name: 'Formula 6',
    result: "Formula" + formulaMMDD * 5 + "six"
  }
];

// Function to show/hide the result for a given formula
function showResult(formulaIndex) {
  const formula = formulas[formulaIndex - 1];
  const toggleContainer = document.querySelectorAll('.formula-container');
  const resultElement = document.getElementById('result-' + formulaIndex + '-content');

  resultElement.innerHTML = `<p>${formula.result}</p>`;

  if (resultElement.style.display === "block") {
    resultElement.style.display = "none";
  } else {
    resultElement.style.display = "block";
  }
}
