// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
   const  newDrivers = drivers.slice(0,2)
  return newDrivers
}
const firstTwo = returnFirstTwoDrivers(drivers)
console.log(firstTwo);
function returnLastTwoDrivers(drivers){
    const lastDrivers = drivers.slice(2,4)
    return  lastDrivers
}
const lastTwo = returnLastTwoDrivers
console.log(lastTwo)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
const first = selectingDrivers[0]
const last = selectingDrivers[1]
console.log(first)
console.log(last)

function createFareMultiplier(value) {
    return function(fare) {
        return value * fare;
    };
}
const quadrupleFare = createFareMultiplier(4);
const newFare = quadrupleFare(5);
console.log(newFare); 


function fareDoubler(fare) {
    
    const doubleFare = createFareMultiplier(2);
    
    return doubleFare(fare);
}
function fareTripler(fare){
    const trippleFare = createFareMultiplier(3)
    return trippleFare(fare)
}
function selectDifferentDrivers(drivers ,returnFirstTwoDrivers){
return returnFirstTwoDrivers(drivers)
}
