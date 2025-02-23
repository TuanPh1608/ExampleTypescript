//Functions
function sum(a: number, b: number): number {
    return a + b;
}

//Anonymous function
let sum2 = function (a: number, b: number): number {
    return a + b;
}
console.log(sum(1, 2));
console.log(sum2(3, 4));

//Rest parameter
function sum3(...params: number[]): number {
    let sum: number = 0;
    params.forEach((element) => {
        sum += element;
    });
    return sum;
}
console.log(sum3(1, 2, 3));
console.log(sum3(1, 2, 3, 4, 5));

function multiply(a: number, ...params: number[]): number[] {
    return params.map((x) => a * x);
}
console.log(multiply(2, 1, 2, 3, 4, 5));

//Function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}
console.log(add(1, 2));
console.log(add("Hello", " World"));
