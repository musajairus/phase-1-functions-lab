// Code your solution in this file!
let distanceFromHqInBlocks = function (someValue) {
    if (someValue > 42) {
        return someValue - 42;
    } else {
        return 42 - someValue;
    }
}

let distanceFromHqInFeet = function (someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

let distanceTravelledInFeet = function (start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

let calculatesFarePrice = function (start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}   