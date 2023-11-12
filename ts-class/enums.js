var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["Add"] = 0] = "Add";
    Arithmetic[Arithmetic["Mul"] = 1] = "Mul";
    Arithmetic[Arithmetic["Div"] = 2] = "Div";
    Arithmetic[Arithmetic["Sub"] = 3] = "Sub";
})(Arithmetic || (Arithmetic = {}));
function calculate(a, b, type) {
    switch (type) {
        case Arithmetic.Add:
            return a + b;
        case Arithmetic.Mul:
            return a * b;
        case Arithmetic.Div:
            return a / b;
        case Arithmetic.Sub:
            return a - b;
        default:
            throw new Error("Invalid arithmetic operation");
    }
}
console.log(calculate(1, 2, Arithmetic.Div)); // Output: 0.5
