//Q1----------------------------------------
function firstName(obj) {
 return Object.values(obj);
}

let obj={fname1:'jhon', fname2:'Alex', fname3:'Alice',fname4:'Thor', fname5:'Soso'};
console.log(firstName(obj));


//Q2----------------------------------------
function objectToArray(obj) {
    arr=[]
    arr.push(Object.keys(obj)[0]);
    arr.push(Object.values(obj)[0]);
    arr.push(Object.keys(obj)[1]);
    arr.push(Object.values(obj)[1]);
    return arr;
}

let obj2={firstName:"Moh",age:24};
console.log(objectToArray(obj2));


//Q3----------------------------------------
function Car(brand ,model ,year){
    this.brand =brand;
    this.model= model;
    this.year = year;

    this.getDetails = function() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year:${this.year}`
    }
}

const car1= new Car('Toyota', 'Corolla', 2020);
const car2= new Car('Tesla', 'Model 3', 2022);
const car3= new Car('Ford', 'Mustang', 2019);

let arr2 =[car1, car2, car3]

arr2.forEach(element => {
    console.log(element.getDetails());
});

