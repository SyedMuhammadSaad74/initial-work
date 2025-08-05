// FAMILIAR OPERATOR

var a = 10;
var b = 20;

var sum = a + b; //30
var subtraction = a - b;    //-10
var multiplication = a * b; //200
var division = b / a; //2
var remainder = b % a; //0
var exponentation = a ** b;  //10000000000000000000000



console.log(sum);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(remainder);
console.log(exponentation);


var x = sum / division + multiplication;
console.log("Output of the value of x = " + x);

var y = sum / (division + 10);
console.log("The output of y is = " + y)




//POST INCREMENT
var pnum = 10;
var pnumAfter = pnum++;
console.log("The value after incrementing pnum is = " + pnumAfter);
console.log("The value pnum is = " + pnum);

//POST DECREMENT
var dnum = 20;
var dnumAfter = dnum--;
console.log("The value of dnum is = " + dnum);
console.log("The value after decrementing dnum is = " + dnumAfter);
console.log("The value of dnum is = " + dnum);

//PRE INCREMENT
var prenum = 30;
var prenumAfter = ++prenum;
console.log("The value after pre-incrementing is " + prenumAfter);
console.log("The value of prenum is " + prenum);

//PRE DECREMENT
var prednum = 40;
var prednumAfter = --prednum;
console.log("The value before decrementing predum is " + prednumAfter);
console.log("The value of prednum is " + prednum);

//LOOP
for (var i = 0; i <= 7; i++) {
    console.log("Round of i is = " + i);
}


//WITH PROMPT 
// var tableNumber = prompt("Enter your table number ");
// for (var i = 1 ; i<=10 ; i++){
//     document.write( tableNumber + ' x ' + i + ' = ' + tableNumber * i + '<br/>');
// }

//LOOP ON ARRAY
// var weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
// for (var i = 0; i < weekDays.length; i++) {
//     document.write(weekDays[i] + '<br/>')
// }

//3 TYPES OF FUNCTIONS

//1. FUNCTION WITH FUNCTION KEYWORD
function hello() {
    console.log("hello");
}

//2. ANONYMOUS FUCTION -> FUNCTION WITHOUT NAME
var sayHello = function () {
    console.log("Hello to everyone")
}

// setInterval(function() {

// }, 1000);
//PARAMETER ND ARGUMENTS
//Parameter : Function banate waqt value dene ko parameter khete hain
//Argument : Function call kerwate hui value ko argument khete hain

let greeting = () => {
    console.log('Greeting');
}
greeting();

function add(a, b) {
    var total = a + b
    return total;
}
console.log(add(10, 20));

//ARRAY METHODS
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.slice(0, 2));


function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false
    }
}

console.log(isEven(13));

var input = document.getElementById("num")
var answer = document.getElementById("answer")

function checkIsEven() {
    var num = input.value
    console.log(num);

    if (isEven(num)) {
        answer.innerHTML = "The number is Even"
    }
    else {
        answer.innerHTML = "The number is Odd"
    }
}

//CALCULATOR
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");


function calculate(sign = '+') {


    var num1Value = num1.value;
    var num2Value = num2.value;

    if (sign == '+') {
        answer.innerHTML = parseInt(num1Value) + parseInt(num2Value);
    }

    if (sign == '-') {
        answer.innerHTML = num1Value - num2Value;
    }

    if (sign == '/') {
        answer.innerHTML = num1Value / num2Value;
    }

    if (sign == '*') {
        answer.innerHTML = num1Value * num2Value;
    }
    // console.log(sign , num1Value , num2Value);
}

//SWITCH CASE
var status = "pending";

switch (status) {

    case 'active':
        console.log("The status is active");
        break;

    case 'inactive':
        console.log("The stus is inactive");
        break;

    case 'pending':
        console.log("The staus is pending");
        break;

    default:
        console.log("Your app is under review")
}

//SORTING AN ARRAY(ALPHABETICALLY)
arr = ['banana', 'grape', 'kiwi', 'apple', 'orange']
arr.sort()
console.log(arr);



//SORTING AN ARRAY(NUMERICALLY)
arr = [1, 2, 3, 4, 5, 44, 6, 7, 8, 9, 10];
arr.sort((a, b) => a - b);
console.log(arr);

//ARRAY METHODS
//PUSH (Add the last element of the array)
arr = [1, 2, 3, 4, 5, 44, 6, 7, 8, 9, 10];
arr.push(20);
console.log(arr);

//POP (Remove the last element of the array)
arr = [1, 2, 3, 4, 5, 44, 6, 7, 8, 9, 10];
arr.pop();
console.log(arr);

//UNSHIFT (Add the first element of the array)
arr = [1, 2, 3, 4, 5, 44, 6, 7, 8, 9, 10];
arr.unshift(15);
console.log(arr);

//SHIFT (Remove the first element of the array)
arr = [1, 2, 3, 4, 5, 44, 6, 7, 8, 9, 10];
arr.shift();
console.log(arr);

//FIND (Find tthe element in the array)
arr = [1, 2, 3, 4, 5, 44, 6, 7, 8, 9, 10];
console.log(arr.includes(9));

//INDEX OF (-1 will show if not found)
arr = [1, 2, 3, 4, 5, 44, 6, 7, 8, 9, 10];
console.log(arr.indexOf(11));


arr = [1, 2, 3, 4, 5, 44, 6, 7, 8, 9, 10];
console.log(arr.join('|||'));

//SLICE (Remove the element from the original array)
var arr = [1, 2, 3, 4, 5, 44, 6, 7, 8, 9, 10];
var removeArr = arr.splice(1, 2);
console.log(removeArr);
console.log(arr);

//04 - AUGUST 2025
//ARRAY METHODS
//FUNCTIONS
//SWITCH CASE
//IF ELSE
//FAMILIAR OPERATOR
//CALCULATOR
//LOOP

//...........................................................................................

//SETINTERVAL
// var a = 10;
// function set(){
//     a = a + 10 ;
//     console.log("The value of a is = " + a);
//     if( a == 50){
//         clearInterval(set);
//         console.log("The value of a is now 50, so the interval is cleared.");
//     }
// }

// setInterval(set , 1000);

// var b = 20;
// function abc (){
//     b = b + 20;
//     console.log("The value of b is = " + b);
// }

// setTimeout(abc, 1000);


//STOPWATCH

// var htmlMin = document.getElementById("min")
// var htmlsec = document.getElementById("sec")
// var htmlMili = document.getElementById("milisecond")

// var startBtn = document.getElementById("start");
// var stopBtn = document.getElementById("stop");
// var resetBtn = document.getElementById("reset");
// var startBtnDisabled = document.getElementById("startbtn");

// var second = 0;
// var minute = 0;
// var milisecond = 0;

// var watchInterval;

// function startTime() {
//     watchInterval = setInterval(function () {
//         milisecond++

//        if(milisecond >= 999){
//         second++;
//         milisecond = 0;
//        }
//        if(second >= 10){
//         minute++;
//         second = 0;
//        }

//         htmlMili.innerText = milisecond;
//         htmlsec.innerText = second;
//         htmlMin.innerText = minute;
//         startBtnDisabled.disabled = true;

//     }, 10)
// }

// function stopTime() {
//  clearInterval(watchInterval);
// }

// function resetTime() {
//   clearInterval(watchInterval);
//   milisecond = 0;
//   second = 0;
//   minute = 0;
//    htmlMili.innerHTML = milisecond;
//    htmlsec.innerHTML = second;
//    htmlMin.innerHTML = minute;
// }


//STOPWATCH (PRACTICE).........................................................................
// var start = document.getElementById("start")
// var stop = document.getElementById("stop")
// var reset = document.getElementById("reset")

// var htmlmin = document.getElementById("min");
// var htmlsec = document.getElementById("sec");
// var htmlmilisec = document.getElementById("milisecond");

// var minute = 0;
// var second = 0;
// var milisecond = 0;

// var watchInterval;

// function startTime() {
//     watchInterval = setInterval(function () {
//         milisecond++;

//         if (milisecond >= 100) {
//             second++;
//             milisecond = 0;
//         }

//         if (second >= 60) {
//             minute++;
//             second = 0;
//         }

//         htmlmilisec.innerText = milisecond;
//         htmlsec.innerText = second;
//         htmlmin.innerText = minute;

//     }, 10);
// }

// function stopTime() {
//     clearInterval(watchInterval);
// }

// function resetTime() {
//     clearInterval(watchInterval);
//     milisecond = 0;
//     second = 0;
//     minute = 0;

//     htmlmilisec.innerText = milisecond;
//     htmlsec.innerText = second;
//     htmlmin.innerText = minute;
// }

//RAMAZAN 2026 COUNTDOWN TIMER
// var days_html = document.getElementById("days");
// var hours_html = document.getElementById("hours");
// var min_html = document.getElementById("mins");
// var sec_html = document.getElementById("sec");

// var now = new Date();
// var ramazanStart = new Date("2/17/2026");
// var diff = ramazanStart.getTime() - now.getTime();

// var interval = setInterval(function () {
//     diff = diff - 1000;
//     var second = diff / 1000;
//     var minute = diff / 1000 / 60;;
//     var hour = diff / 1000/ 60 /60;
//     var days = diff / 1000 /  60 / 60 / 24;

//     days_html.innerText = Math.floor(days);
//     hours_html.innerText = Math.round(hour);
//     min_html.innerText = Math.round(minute);
//     sec_html.innerText = Math.floor(second);
// }, 1000)


//EVENT LISTENER AND THIS KEYWORD
// document.getElementById("event").addEventListener("click", function(){
//     this.style.color = "red";
// })



let jsQuestions = [
  "What is the difference between var, let, and const?",
  "What is the type of a variable that stores both numbers and strings?",
  "What is the difference between == and === in JavaScript?",
  "What does the typeof operator do?",
  "How can you check if a value is an array?",
  "What is the use of the push method in arrays?",
  "What is the difference between slice and splice methods in arrays?",
  "How do you remove the last item from an array?",
  "What is a loop and why is it used in JavaScript?",
  "What is the use of the forEach method in arrays?",
  "What is an arrow function?",
  "What is the difference between function declaration and function expression?",
  "What is a callback function?",
  "What is the use of the return keyword in a function?",
  "What is an object in JavaScript?",
  "How do you access a property from an object?",
  "What does DOM stand for and why is it important in JavaScript?",
  "What is the use of getElementById method?",
  "What does the this keyword refer to in JavaScript?",
  "What is event handling in JavaScript?"
];

var allBoxes = document.getElementsByClassName("box");

for (var i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("click", function() {
     clearAll();

        this.style.backgroundColor = "#fff";
        this.style.color = "#000";
        this.style.fontSize = "20px";
        this.innerText = jsQuestions[Math.floor(Math.random() * 20)];
    });
}

function clearAll(){
for (var i =0 ; i< allBoxes.length; i++) {
        allBoxes[i].style.backgroundColor = "#000";
        allBoxes[i].style.color = "#fff";
         allBoxes[i].innerText = i + 1;
    
}}


// 05 - AUGUST 2025
// Countdown Timer
//STOPWATCH
//EVENT LISTENER AND THIS KEYWORD
//GUESS GAME 
//*************************************************************************************** */
