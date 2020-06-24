
console.log(Math.floor(Math.random() * 5) + 1  );

function startas() {

    let startSP = []
    let carsSpMax = [];


    for (let i = 0; i < cars.length; i++) {                              // for to fill startSP array
        //let startSpMet = Math.round(Math.random()*200)
        startSP.push(Math.round(Math.random() * 200))
        carsSpMax.push(cars[i].speadMax)
    }

    function sort(z) {
        let keitiklis;                              //sukuriamas kintamasis ciklui judėti.
        do {                                            //paleidžiamas do,while ciklas 
            keitiklis = false;                          //nustatomas kintamasis ciklo sustabdymui
            for (let i = 0; i < z.length - 1; i++) {    //paleidžiamas for ciklas imti kiekvieną kintamojo m dalyvį           
                if (z[i] > z[i + 1]) {                  //jei dalyvis didesnis už kaimyninį dalyvį į priekį
                                                        //nustačius mažesnis už kaimyninį rušiuos ne nuo mažiausio o nuo dudžiausio.

                    let temp = z[i];                //išsaugome j į laikina kintamajį temp didesnį
                    z[i] = z[i + 1];                  //perkeliame kaimyninį mažesnį į tikrinamo vietą        
                    z[i + 1] = temp;                  //į kaimyninio vieta permetam didesnį išsaugota var temp
                    //taip sukeitėm vietomis didesnį su mažesniu
                    keitiklis = true;               //jei įvykdome keitimą keitiklis ==  true kad while ratas dar pasileistų

                    //jei for ciklas nerado didesnio už kaimyna pasisuka pagal m.length kiekį
                    //nepakeičia keitiklis == true ir do while sustoja
                }
            }
        } while (keitiklis == true);

        // console.log(startSP);
    }

    console.log(cars);


    console.log(startSP);     //sugeneuotas startinis greitis
    sort(startSP)             //start f-cija listo ru6iavimui nuo ma=iausio iki did=iausio
    console.log(startSP);
    console.log(carsSpMax);
    sort(carsSpMax)
    console.log(carsSpMax);


    for (let i = 0; i < cars.length; i++) {

        for (let j = 0; j < carsSpMax.length; j++) {

            if (cars[i].speadMax === carsSpMax[j]) {
                if (cars[i].speadMax > startSP[j]) {
                    cars[i].spead = startSP[j]
                                                //nepriskiria 
                }
                else {
                    cars[i].spead = cars[i].speadMax
                    
                }
                // else {cars[i].spead = cars[i].speadMax}

            }
        }
    }




    // for (let i = 0; i < cars.length ;i++){                              // for to fill startSP array
    // // cars[i].spead = 

    // }
}