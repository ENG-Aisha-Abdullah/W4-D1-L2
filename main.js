let grade = 80;
if (grade >= 90 && grade <= 100) {
    console.log("A");
} else if (grade >= 80 && grade <= 89) {
    console.log("B");

} else if (grade >= 70 && grade <= 79) {
    console.log("C");
} else if (grade >= 60 && grade <= 90) {
    console.log("D");

} else if (grade < 60) {
    console.log("C");
}


let dish = "pizza";
let size = "large";
extraCheese = true;
if (dish === "pizza" , size === "large" && extraCheese === true) {
        console.log("Large pizza with extra cheese is ready!");
    } else if (size !== "large") {
        console.log("Custom pizza size selected");
    } else if (!extraCheese) {
        console.log("Pizza without extra cheese");
    }else if (dish !== "pizza"){
    console.log("Not a pizza");
}


let speed = 300;
let connectionType = "fiber"
if ( connectionType == "fiber" && speed >= 500) {
    console.log(" Excellent fiber connection");
} else if (connectionType == "fiber" && speed >= 200 && speed <= 499) {
    console.log(" Good fiber connection");
} else if (connectionType == "fiber" && speed < 200) {
    console.log("Weak fiber connection");
} else if (connectionType == "dsl" && speed >= 50) {
    console.log(" Acceptable DSL connection");
} else if (connectionType == "dsl" && speed < 50) {
    console.log("Poor DSL connection");
}

