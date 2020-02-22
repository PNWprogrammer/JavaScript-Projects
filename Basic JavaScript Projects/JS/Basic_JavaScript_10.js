function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var states_that_start_with_A = ["Alabama", "Alaska", "Arizona", "Arkansas"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < states_that_start_with_A.length; Y++) {
        Content += states_that_start_with_A[Y] + "<br>";
    }
    document.getElementById("List").innerHTML = Content;
}

function Positions_in_Baseball() {
    var Baseball_Picture = [];
    Baseball_Picture[0] ="Centerfield";
    Baseball_Picture[1] ="Rightfield";
    Baseball_Picture[2] ="Leftfield";
    Baseball_Picture[3] ="Thirdbase";
    Baseball_Picture[4] ="Shortstop";
    Baseball_Picture[5] ="Secondbase";
    Baseball_Picture[6] ="FirstBase";
    Baseball_Picture[7] ="Catcher";
    Baseball_Picture[8] ="Pitcher";
    document.getElementById("baseball").innerHTML = "This is a photo of a person playing " + Baseball_Picture[7] + ".";
}

function constant_function() {
    const Shoes = {type:"running", brand:"Nike", color:"red"};
    Shoes.color = "green";
    Shoes.type = "cross-trainer";
    document.getElementById("Constant").innerHTML = "I like to wear " + Shoes.color + " shoes made by " + Shoes.brand + ".";
}

function Let_Keyword() {
    var X = ("Cats");
    document.write(X);
    { 
        let X = ("Dogs");
        document.write("<br>" + X);
    }
    document.write("<br>" + X);   
}

let house = {
    style: "Farm",
    size: "1800 sqft",
    bedrooms: "3 bedrooms",
    bathrooms: "2 bathrooms",
    color: "blue",
    trim: "white",
    description : function() {
        return "The house is a " + this.style + " style house with " + this.size + ", "+ this.bedrooms + ", " + this.bathrooms + ", and the color is " + this.color + ".";
    }
};
document.getElementById("house_object").innerHTML = house.description();

function Color_List() {
var colors = ["Red", "Green", "Yellow", "Black", "White"];
var Text = "";

list: {
        Text += colors[0] + "<br>";
        Text += colors[1] + "<br>";
        Text += colors[2] + "<br>";
        Text += colors[3] + "<br>";
        break list;
        Text += colors[4] + "<br>";
    }    
document.getElementById("Colors").innerHTML = "Here is a list of colors: " + Text;
}

function Continue_Loop() {
    var text = "";
    var l;
    for (l = 0; l<11; l++){
        if (l === 1) {continue;}
        if (l === 3) {continue;}
        if (l === 5) {continue;}
        if (l === 7) {continue;}
        if (l === 9) {continue;}
        text += "This number is " + l + "<br>";
    }
document.getElementById("Continue").innerHTML = text;
}