//If else
let a: number = 10;
let b: number = 20;
if (a >= b) {
    console.log("a is greater than or equal tob");
}
else {
    console.log("a is less than b");
}

//Switch case
//Nhập tháng kiểm tra trong tháng có bao nhiêu ngày
let month: number = 2;
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12: {
        console.log("Tháng " + month + " có 31 ngày");
        break;
    }
    case 4: case 6: case 9: case 11: {
        console.log("Tháng " + month + " có 30 ngày");
        break;
    }
    case 2: {
        console.log("Tháng " + month + " có 28 hoặc 29 ngày");
        break;
    }
    default: {
        console.log("Tháng không hợp lệ");
    }
}

//For loop
for (let i: number = 0; i < 5; i++) {
    console.log(i);
}

//While
let i: number = 0;
while (i < 5) {
    console.log(i);
    if (i == 3) break;
    i++;
}

//Do while
let j: number = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

