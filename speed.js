function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log("Demerit points: " + demeritPoints);
    }

    return demeritPoints;
}

function main() {
    const speed = parseFloat(prompt("Enter the speed of the car (in km/h):"));
    const demeritPoints = calculateDemeritPoints(speed);
}

main();
