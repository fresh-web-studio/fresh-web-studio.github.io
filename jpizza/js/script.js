'use strict'

let x=5;
let y=5;
let z=11;

let result= (x-y)*z;

if (x>y) {
    document.write ('x больше y <br/>');
}
else if (x<y) {
    document.write ('x меньше y');
}
else {
    document.write ('x равен y');
}

document.write('<br/><br/>');


let type='class';
switch (type) {
    case 'type': document.write('type равен тип'); break;
    case 'class': document.write('type равен класс'); break;
}

document.write('<br/><br/>');

x > y ? document.write('x больше y? YES') : document.write('x больше y? NO');
