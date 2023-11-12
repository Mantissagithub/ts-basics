"use strict";
function calculator(x, y, z) {
    if (z == "add") {
        return x + y;
    }
    else if (z == "diff") {
        return x - y;
    }
    else if (z == "mul") {
        return x * y;
    }
    else if (z == "div") {
        return x / y;
    }
    else {
        return "mairu";
    }
}
console.log(calculator(2, 3, "punda"));
