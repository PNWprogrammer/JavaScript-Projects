function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "Sorry, you are not":"Congrats, you are";
    document.getElementById("Vote").innerHTML = Can_vote + " old enough to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", "2020", "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");
function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function House(Style, Year, Color){
    this.House_Style = Style;
    this.House_Year = Year;
    this.House_Color = Color;
}

var George = new House("Farm", "1984", "Red");
var Ben = new House("Modern", "2020", "Slate");
var Abe = new House("Colonial", "1850", "White");
function House_Function() {
    document.getElementById("New_and_This").innerHTML = "This house is owned by Abe. It was built in " + Abe.House_Year + " it is a " + Abe.House_Style + " style home " + " it is painted " + Abe.House_Color;
}

function plus3_Function() {
    document.getElementById("Nested_Function").innerHTML = plus3();
    function plus3() {
        var Starting_point = 3;
        function Plus_3() {Starting_point += 3;}
        Plus_3();
        return Starting_point;
    }
}