let cars = [{
    name: 'ford',
    spead: 0,
    speadMax: 130,
    distance: 0
},
{
    name: 'zil',
    spead: 0,
    speadMax: 100,
    distance: 0
},
{
    name: 'porshe',
    spead: 0,
    speadMax: 200,
    distance: 0
},
{
    name: 'vw',
    spead: 0,
    speadMax: 140,
    distance: 0
},
{
    name: 'Aston M',
    spead: 0,
    speadMax: 170,
    distance: 0,
}]


let lastRes = [1,2,1,2,0];


function drive() {


    let prLis = [];




    for (let i = 0; i < cars.length; i++) {
        console.log(cars[i].spead);

        cars[i].distance += cars[i].spead / 4

        if (cars[i].spead < cars[i].speadMax) {
            if (lastRes[i] === 0) {
                cars[i].spead += Math.floor(Math.random() * 5) + 1;
            }
            else if (lastRes[i] === 1) {
                cars[i].spead += Math.floor(Math.random() * 10) + 1;

            }
            else { }

        }

        cars[i].distance += cars[i].spead / 17


        let prStr = '';

        console.log(cars[i].distance);

        for (let j = 0; j < Math.round(cars[i].distance) / 17; j++) {


            prStr += 'X'

        }
        for (let x = 0; prStr.length < 60; x++) {
            prStr += '-'
        }

        prLis.push(prStr)

    }
    console.log(prLis, '\n');

}

drive()