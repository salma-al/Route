var quoteText = [
  '"The only way to do great work is to love what you do."',
  '"Success is not final, failure is not fatal: It is the courage to continue that counts." ',
  '"The future belongs to those who believe in the beauty of their dreams." ',
  `"Believe you can and you're halfway there." `,
  '"The only limit to our realization of tomorrow will be our doubts of today." ',
  '"The only person you should try to be better than is the person you were yesterday."',
  '"The only true wisdom is in knowing you know nothing." ',
];

var quoteAuth = [
  'Steve Jobs',
  'Winston Churchill',
  'Eleanor Roosevelt',
  'Theodore Roosevelt',
  'Franklin D. Roosevelt',
  'Matty Mullins',
  'Socrates',
];

var newNum;

function randomQuote() {
  var num = Math.round(Math.random() * (quoteAuth.length - 1));

  if (num === newNum) {
    return randomQuote();
  }
  newNum = num;

  document.getElementById('quotText').innerHTML = quoteText[num];
  document.getElementById('quotAuthor').innerHTML = '--' + quoteAuth[num];

  return console.log(quoteAuth[num], quoteText[num]);
}
