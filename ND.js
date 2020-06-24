//mašinėliu lenktynes
//8 mašinos
//kiekviena mašina turės savybes

//name
//max spead neturi višyti
//spead
//distance

// jei math random <0.3 stabdo /// jei mašina stabdo sekantis math random nuo 1 iki 5
//              > 0,5 gazuoja /// jei gazuoja tada random nuo 1 iki 10
// o jei tarpe greitis išlieka toks pats

//kiekvieno važiavimo metu

//kiekvienos iteracijos metu visos ka nors daro gazas/stabdis

//po kiekvienos iteracijos sarasas masinų ir kaip joms sekasi
//po spauzdinimo tikrinam ar kas nepasieke 1000 jai true lenktynes baigesi
//po viso to reiia atspauzdinti laimėtoja kuris nuvaziavo toliausiai ir atspauzdinti turnyrine lentelę..
//pradinis greitis nulis


//visas 1000 yra 60 simbolių -------------string minusiukais rodyti mašinų judėjimą
//atstumą 1000 padaryti kintamuoju
//per vieną iteracija padidėja atstumas tiek kiek yra tuo metu greitis
'use strict'

let cars = [{ name: 'ford', spead: 0, speadMax: 130, distance: 0 },
{ name: 'zil', spead: 0, speadMax: 100, distance: 0 },
{ name: 'porshe', spead: 0, speadMax: 200, distance: 0 },
{ name: 'vw', spead: 0, speadMax: 140, distance: 0 },
{ name: 'Aston M', spead: 0, speadMax: 170, distance: 0, }
]

console.log(cars);


// console.log(cars);
// let metimas = Math.round(Math.random())
// console.log(metimas);
// console.log(cars.length);

// console.log(cars[0].name);


// for (let i = 0; i < cars.length; i++) {





let lastRes = []            //array paskutinio rezultato generavimui



for (let i of cars) {        //i lastRes sumetam dalyvių kiekį
    lastRes.push(1)
}

console.log(lastRes);


function busena() {          //funkcija aprasanti automobiliu busena





    for (let i = 0; i < cars.length; i++) {

        let rnd;
        rnd = Math.random()

        if (rnd < 0.3) {
            lastRes[i] = 0
        }
        else if (rnd <= 0.5 && rnd >= 0.3) {
            lastRes[i] = 2
        }
        else {
            lastRes[i] = 1
        }
    }
}

function drive() {

    let prLis = [];




    for (let i = 0; i < cars.length; i++) {
        // console.log(cars[i].spead);

        cars[i].distance += cars[i].spead / 4

        if (cars[i].spead < cars[i].speadMax) {
            if (lastRes[i] === 0) {
                cars[i].spead -= Math.floor(Math.random() * 5) + 1;
                
            }
            else if (lastRes[i] === 1) {
                cars[i].spead += Math.floor(Math.random() * 100) + 1;

            }
            else { }

        }
        else {console.log(cars[i].spead = cars[i].speadMax);
        }

        cars[i].distance += cars[i].spead / 17


        let prStr = '';

        // console.log(cars[i].distance);

        for (let j = 0; j < Math.round(cars[i].distance) / 16.6; j++) {


            prStr += 'X'

        }
        for (let x = 0; prStr.length < 60; x++) {
            prStr += '-'
        }

        prLis.push(prStr)

    }
    console.log(prLis, '\n');

}


function init() {
    for (let z = 0;z < cars.length;z++) {
        // console.log(cars.length);
        console.log(cars[z].spead);
        
        
        if (cars[z].distance > 980) {
            // console.log(cars[z].distance);
            return 'stop'
            break;
            }
        // else if(cars[z].distance <= 100) {
               

        //     }
        }
busena();
drive();
init(); 

}

// for (let i = 1; i < cars.length; i++) {
//     console.log(cars[i].distance);
    
    
//     for (let l of cars) {
//         if()

//         // if (l.distance >= 200){

//         //     console.log('uraa');
//         //     break;

//     }


    // busena()
    // drive()
// }


init()


// busena()
// drive()
// busena()
// drive()
// busena()
// drive()
// busena()
// drive()
// busena()
// drive()
// busena()
// drive()
//gito testas
console.log('cars change test');

