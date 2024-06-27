let a = 1;
let b = 4;
let c = 8;

if ((a + b > a + c) && (a + b > b + c)) {
    console.log(a, b);
} else if ((a + c > a + b) && (a + c > b + c)) {
    console.log(a, c);
} else {
    console.log(b, c);
}

