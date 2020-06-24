function sum(){

    let s = 0;
    for(let i = 0;i<arguments.length ; i++)
    {
        if (typeof arguments[i] === 'number'){
            s += arguments[1]
        }
    }
    return s;
}






console.log(sum(3,4,'5',6,7));


//operatorius typeof

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
//https://learn.javascript.ru/types-intro

//JS turi dvi spec reikšmes NULL ir unfined

//null ištikrųjų yra objektas


//stringai

let a = "labas\\\'pasauli" // pavizdys
// \r  return
// \n nauja eilutė
// \t tab mygtukas

let p1 = 2;
let p2 = 3;

let c = `lab

as ${p1+p2} pasauli`  //backtike stringas skaiciuos kintamuosius


console.log(c);

let t ='labas', // visur deklaruoja kad stringas primityvas
                //faktiškai tai objektas

v = t + 'k';
console.log(v);

//s.trim() //panaikina visus tarpus iš šonų..



function calc (s1,s2,op){

    return op(s1,s2);

}

let a = calc (2,3,function(p1,p2)){

    return p1 + p2;

}


let b = calc (2,3, function(p1,p2)){

    return p1-p2;
}

console.log(a);
console.log(b);
