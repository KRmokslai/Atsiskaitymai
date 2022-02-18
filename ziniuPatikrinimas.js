let a;
let b;
if (a > b) {
    console.log('Didesnis; ', a)
}
if (a < b) {
    console.log('Didesnis; ', b)
}
else {
    console.log('a ir b lygus')
}

//-----------------------------------------antra uzduotis---------------------------------

for (let i = 1; i <= 10; i++) {
    console.log(i)
}
//-----------------------------------------trecia uzduotis---------------------------------

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log('Lyginiai:', i)
    }
}
//-----------------------------------------ketvirtoji uzduotis-----------------------------
console.log('\r\nketvirtoji uzduotis\r\n')
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (i = 0; i < 5; i++) {
    a = rand(1, 10);
    console.log('Randomai: ', a);
}

//-----------------------------------------penktoji uzduotis-----------------------------
console.log('\r\npenktoji uzduotis\r\n')

do {
    a = rand(1, 10);
    console.log(a);
} while (a != 5)

/*  while( a != 5){
    a = rand(1, 10);
    console.log(a);
    }
*/

//-----------------------------------------sestoji uzduotis-----------------------------
console.log('\r\nsestoji uzduotis\r\n')


let masyvas = [];
let masyvaslength = rand(20, 30);

for (i = 0; i < masyvaslength; i++) {
    let elementas = rand(10, 30);
    masyvas.push(elementas);
}
//nezinau kaip antra didziausia surasti
console.log(masyvas);

//-----------------------------------------septintoji uzduotis-----------------------------
console.log('\r\nseptintoji uzduotis\r\n')



let raides = [];
let atsitiktines = 'ABCD';

for ( var i = 0; i < 100; i++ ) {
    raides.push(atsitiktines.charAt(Math.floor(Math.random() * randomChars.length)));
    
}
    


console.log(raides);


//-----------------------------------------astuntoji uzduotis-----------------------------
console.log('\r\nastuntoji uzduotis\r\n')

function lygineSuma(a, b) {
    if (a === b) {
        let x = typeof a;
        let result;
        if ( x === 'number') {
            result = a + b;
            return result;
        }
        if( x === 'object') {
            a = a.length;
            b = b.length;
            result =a + b;
            return result;
        }
        if (result % 2 == 0){
            return result
        }
        if ( result % 2 !=0) {
            console.log('Suma nelygine')
        }
    }
}



//-----------------------------------------devintoji uzduotis-----------------------------
console.log('\r\ndevintoji uzduotis\r\n')

function pirminisSkaicius(x){if(typeof x === 'number'){}}

//-----------------------------------------penktoji uzduotis-----------------------------
console.log('\r\npenktoji uzduotis\r\n')
//-----------------------------------------penktoji uzduotis-----------------------------
console.log('\r\npenktoji uzduotis\r\n')
//-----------------------------------------penktoji uzduotis-----------------------------
console.log('\r\npenktoji uzduotis\r\n')
//-----------------------------------------penktoji uzduotis-----------------------------
console.log('\r\npenktoji uzduotis\r\n')
//-----------------------------------------penktoji uzduotis-----------------------------
console.log('\r\npenktoji uzduotis\r\n')


