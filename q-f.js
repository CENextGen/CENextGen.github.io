// 1.
let num = 10;

if (num>5 || num>2) {
    // 2.
    if (num>5) {
        f1(num);
    }
    // 3.
    else if (num>2) {
        f2(num);
    }
}
// 4.
else {
    x = f3(num);
    x = x + 7;
    console.log(x);
}


// 2.a
function f1(x) {
    console.log(`${x} more than 5`);
}
// 3.a
function f2(x) {
    console.log(`${x} more than 2`);
}
// 4.a
function f2(x) {
    console.log(`less than 2`);
    return x-1
}