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
var weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
for (var i = 0; i < weekDays.length; i++) {
    document.write(weekDays[i] + '<br/>')
}

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
arr = ['banana',  'grape', 'kiwi', 'apple', 'orange']
arr.sort()
console.log(arr);



//SORTING AN ARRAY(NUMERICALLY)
arr = [1,2,3,4,5,44,6,7,8,9,10];
arr.sort((a, b) => a- b);
console.log(arr);