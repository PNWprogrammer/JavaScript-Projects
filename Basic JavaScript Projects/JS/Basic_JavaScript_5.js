function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}


function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN("This is a string.");
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN("007");
}

function my_Function4() {
    document.getElementById("Test4").innerHTML = document.write(3E310);
}
function my_Function5() {
    document.getElementById("Test5").innerHTML = document.write(-3E310);
}

function my_Function6() {
    document.getElementById("Test6").innerHTML = document.write(10>5);
}
function my_Function7() {
    document.getElementById("Test7").innerHTML = document.write(10<5);
}

function my_Function8() {
    document.getElementById("Test8").innerHTML = console.log(5+5);
}

function my_Function9() {
    document.getElementById("Test9").innerHTML = document.write("10" + 5);
}

function my_Function10() {
    document.getElementById("Test10").innerHTML = document.write(10==10);
}
function my_Function11() {
    document.getElementById("Test11").innerHTML = document.write(10==45);
}

function my_Function12() {
    document.getElementById("Test12").innerHTML = document.write(10===10);
}
function my_Function13() {
    document.getElementById("Test13").innerHTML = document.write(10==="five");
}
function my_Function14() {
    document.getElementById("Test14").innerHTML = document.write(10==="ten");
}
function my_Function15() {
    document.getElementById("Test15").innerHTML = document.write("one"==="two");
}

function my_Function16() {
    document.getElementById("Test16").innerHTML = document.write(10>8 && 8>4);
}
function my_Function17() {
    document.getElementById("Test17").innerHTML = document.write(10<8 && 8<4);
}
function my_Function18() {
    document.getElementById("Test18").innerHTML = document.write(10>8 || 8<4);
}
function my_Function19() {
    document.getElementById("Test19").innerHTML = document.write(10<8 || 8<4);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(8 > 10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(15 > 10);
}