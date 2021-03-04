var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
    Color[Color["Black"] = 4] = "Black";
    Color[Color["White"] = 5] = "White";
})(Color || (Color = {}));
;
var myColor = Color.Green;
console.log("The color is " + myColor);
myColor = Color.White;
console.log("The color is " + myColor);
var myListOfNumber = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log("Array myListOfNumber " + myListOfNumber);
//outra forma de declarar array 
var myOtherListOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
