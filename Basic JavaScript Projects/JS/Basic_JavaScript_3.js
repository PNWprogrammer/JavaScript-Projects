function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 3;
    document.getElementById("subtract").innerHTML = "5 - 3 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 5 * 5;
    document.getElementById("multiplication").innerHTML = "5 x 5 = " + multiplication;
}

function division_Function() {
    var division = 25/5;
    document.getElementById("division").innerHTML = "25 / 5 = " + division;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("M").innerHTML = "(1 + 2) x 10 / 2 - 5 = " + simple_Math;
}

function modulus_Operator() {
    var modulus_Operator = 10 % 4;
    document.getElementById("R").innerHTML = "The remainder of 10 / 4 = " + modulus_Operator;
}

function negation_Operator() {
    var negation_Operator = 7;
    document.getElementById("negation").innerHTML = -negation_Operator;
}

function INCREMENT() {
var INCREMENT = 10;
INCREMENT++;
document.getElementById("INCREMENT").innerHTML = INCREMENT;
}

function DECREMENT() {
var DECREMENT = 10;
DECREMENT--;
document.getElementById("DECREMENT").innerHTML = DECREMENT;
}

function Random() {
    window.alert(Math.random() * 1000000);
    document.getElementById("Random").innerHTML = Random;
    }

function Round() {
    var Round = (Math.round(5.675294857) );
    document.getElementById("Round").innerHTML = Round;
}

function Euler() {
    var Euler = Math.E;
    document.getElementById("Euler").innerHTML = Euler;
}