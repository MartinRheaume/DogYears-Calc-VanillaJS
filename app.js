//Function to Convert given age into dog years.
function Calculate() {

//Declaring age as a constant
const myAge = document.getElementById('myAge').value;
const myName = document.getElementById('myName').value;

// Early Years Initialization
let earlyYears = 2;

//Early Year Calculations
earlyYears *= 10.5;

// Removing 2 'earlyYears' which were originally assigned.
let laterYears = myAge - 2;

//Making Dog Year Conversion
laterYears *= 4;
//Printing to console
//console.log(earlyYears);
//console.log(laterYears);

//adding both early Years and kater Years Together.
myAgeInDogYears = earlyYears + laterYears;
myName.toLowerCase();
//Printing to the console.
document.getElementById('result').innerHTML = 'So ' + myName + ', you are ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.';
}