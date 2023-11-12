enum Arithmetic{
    Add,
    Mul,
    Div,
    Sub
}

function calculate(a: number, b: number, type: Arithmetic): number {
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
