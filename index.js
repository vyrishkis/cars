// funkcijos

let f = function(p);            //taip kintamasis funkcija
console.log('žalias ' + p);

f('sdasd')                      //tokia funkcija kviesime
f= 5;                           //bus perrašytas kintamasis i int tipą sena funkcija nunyksta 




function test (p);  {
    console.log("viso gero");
    
}        //bus sukurtas spec objektas

f= test;                    //nuo to momento kintamasis jau roduys į kitą funkciją

//be adreso objektai atminti voliosis kol nepasilesi garbage collector


function calc (s1,s2,op){

    return op(s1,s2);

}

let a = calc(2,3,function(p1,p2){

    return p1 + p2;

}


let b = calc (2,3, (p1+p2) => p1–p2 )    //galima ir taip užrašyti funkcija

console.log(a);
console.log(b);

//
const k =(d)=> {        //jei funkcija turi vieną paramaterą skliausteliai nebūtini
                        //jei parametrų nėra turi būti tušti sklaiusteliai ()

    return 
}

//tarp fat arrow ir paprastos funkcijos yra skirtumas
//fat arow neturi konteksto .....susipažinsim su objektiniu programavimu....

funktion sum(p1,p2){
    return p1+p2;
}

//kiekviena sukurta funkcija turi dar ir apildomą parametrą arguments...
//tai nekeiciamas masyvas

//argumants elementai yra visų parametru reikšmės

funktion sum()