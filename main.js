class Car {
    constructor(_color, _wheels, _engineVolume) {
        this.color = _color;
        this.wheels = _wheels;
        this.engineVolume = _engineVolume;
    }

    static carInfo(info) {
        info = ` color is ${info.color}  her wheels are ${info.wheels} and her engine volume is ${info.engineVolume}`
        return info
    }
}
let carDetails = new Car('red', 4, '1800',)
console.log(Car.carInfo(carDetails));


class mustang extends Car {
    constructor(_name, _color, _wheels, _engineVolume) {
        super(_color, _wheels, _engineVolume);
        this.name = _name
    }
    static mustangInfo(myinfo) {
        let myMustang = `the car ${myinfo.name} and the  ${super.carInfo(carDetails)}`
        return myMustang
    }
}
let mustangDetails = new mustang('mostang super')
console.log(mustang.mustangInfo(mustangDetails));

class mazarati extends Car {
    constructor(_name, _color, _wheels, _engineVolume) {
        super(_color, _wheels, _engineVolume);
        this.name = _name
    }
    static mazaratiInfo(mylambo) {
        let mylamborgini = `the car ${mylambo.name} and the  ${super.carInfo(carDetails)}`
        return mylamborgini
    }
}
let mazaratiInfo = new mustang('mazarati supa')
console.log(mazarati.mazaratiInfo(mazaratiInfo));

class toyota extends Car {
    constructor(_name, _color, _wheels, _engineVolume) {
        super(_color, _wheels, _engineVolume);
        this.name = _name
    }
    static toyotaInfo(mybuga) {
        let myToyota = `the car ${mybuga.name} and the  ${super.carInfo(carDetails)}`
        return myToyota
    }
    get returnCapsLock() {
        return this.capLockName()
    }

    set banana(theValue) {
        console.log(theValue);
    }

    capLockName() {
        let upperName = this.name.toUpperCase()
        return upperName
    }
}
let toyotaCar = new toyota('toyota supra')
console.log(toyota.toyotaInfo(toyotaCar));
console.log(toyotaCar.returnCapsLock);

class BrandNewCars extends Car {
    constructor(_name, _color, _wheels, _engineVolume) {
        super(_color, _wheels, _engineVolume);
        this.name = _name
    }
    static findeTheBigge(objectArray) {
        let biggest;

        for (const car of objectArray) {
            if (biggest === undefined) {
                biggest = car;
            } else if (car.engineVolume > biggest.engineVolume) {
                biggest = car;
            }
        }

        return biggest;
    }


}
let redCar = new BrandNewCars('mostang super', 'red', '4', 3200,)
let BlackCar = new BrandNewCars('toyota', 'black', '4', 4000,)
let greenCar = new BrandNewCars('mazarati supa', 'green', '4', 3649,)
let yelloCar = new BrandNewCars('lambo', 'yello', '4', 6000,)
console.log(BrandNewCars.findeTheBigge([redCar, BlackCar, greenCar, yelloCar]));

let nameInput = document.getElementById('nameInput')
let colorInput = document.getElementById('colorInput')
let priceInput = document.getElementById('priceInput')

function addToTable() {
    let tableForm = {
        carBrand: nameInput.value,
        carColor: colorInput.value,
        carPrice: priceInput.value,

    }

    document.getElementById('mainTable').innerHTML += `
<tr>
<td> ${tableForm.carBrand} </td>
<td> ${tableForm.carColor} </td>
<td> ${tableForm.carPrice} </td>
</tr>
`
}
document.getElementById('tableButton').addEventListener('click',addToTable)