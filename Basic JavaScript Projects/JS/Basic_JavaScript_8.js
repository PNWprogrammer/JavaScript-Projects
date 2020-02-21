function full_Sentence() {
    var part_1 = "This is ";
    var part_2 = "a ";
    var part_3 = "sentence that ";
    var part_4 = "is made ";
    var part_5 = "using concatenate.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){
    var Sentence = "This is a test to see if the slice method works.";
    var Section = Sentence.slice(18,21);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_Case() {
    var Sentence_Upper_Case = "This is a test to see if the upper case method works.";
    var Section_Upper_Case = Sentence_Upper_Case.toUpperCase();
    document.getElementById("UpperCase").innerHTML = Section_Upper_Case;
}

function Search_M() {
    var dinner = "I want to eat a burger!"; 
    var sm = dinner.search("burger");
    document.getElementById("Search_Method").innerHTML = sm;
}

function string_Method() {
    var nts = 256;
    document.getElementById("Numbers_to_string").innerHTML = nts.toString();
}

function precision_method() {
    var num = 18278.733848399;
    document.getElementById("TOPRECISION").innerHTML = num.toPrecision(8);
}

function to_Fixed() {
    var num_2 = 18278.733848399;
    document.getElementById("toFixed").innerHTML = num_2.toFixed(2);
}

function valueOf_method() {
    var str_2 = ("This is to show the value of method.");
    document.getElementById("valueOf").innerHTML = str_2.valueOf();
}