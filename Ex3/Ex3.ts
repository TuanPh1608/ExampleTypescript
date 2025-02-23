//Number type
let num1: number = 13;

//num = '13'; // Lỗi kiểu dữ liệu

//const num2: number; // Lỗi vì chưa gán giá trị cho const

const num2: number = 13;


//String type
let str1: string = "Hello";


//Boolean type
let isBoolean1: boolean = false;
let isBoolean2: boolean = true;

//Object type
let obj1: object = {};
obj1 = { name: "John", age: 30 };

let obj2: {
    name: string,
    age: number
} = {
    name: "John",
    age: 30
};
obj2.age = 40;

//Array type
let arr1: number[] = [1, 2, 3];
arr1.push(4);
//mix type
let mix1: (string | number)[] = [1, 2];
mix1.push("World");

//Tuple type
let tuple1: [string, number] = ["Hello", 1];
//Optional type
let tuple2: [string, number, number?] = ["Hello", 1];
tuple2.push(2);

//Enum type
enum Color {
    Red,
    Green,
    Blue
}
let color1: Color = Color.Red;

//Any type
let any1: any = 13;
any1 = "Hello";
any1 = true;


//Void type
const void1 = (): void => {
    console.log("Hello");
}
void1();

//Never 
// function error(message: string): never {
//     throw Error(message);
// }
// error("Just error");


//Union type
let union1: string | number;
union1 = "Hello";
union1 = 13;

//Type Aliases
type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
    console.log(id);
}
printId("Hello");
printId(13);