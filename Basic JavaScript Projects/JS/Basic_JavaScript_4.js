function animal_dictionary() {
    var animal = {
        Species: "Cow",
        Color: "Tan",
        Breed: "Angus",
        Age: "3",
        Sound: "MOOOOOOO!"
    } ;
    delete animal.Color
    document.getElementById("Dictionary").innerHTML = animal.Color;
}