let a = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
console.log(returnFirstTwoDrivers(a))

let b = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
console.log(returnLastTwoDrivers(b))

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function (multiplier) {
    return function (number){
        return multiplier * number
    }   
}

let fareDoubler = createFareMultiplier(2) 
let fareTripler = createFareMultiplier(3)

let selectDifferentDrivers = function (drivers, otherDrivers){
    return otherDrivers(drivers)
}