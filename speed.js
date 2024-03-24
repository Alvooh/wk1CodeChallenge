//function that calculates the demerit points of drivers driving above speed limit 
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
//if statement to check if driver is driving below the speed limit 
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        //calculates demerit points and uses the Math.floor fuction to ensure no decimal points 
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log("Demerit points: " + demeritPoints);
    }

    return demeritPoints;
}
//function that prompts user to enter speed driver is travelling at 
function promptSpeed() {
    const speed = prompt("Enter the speed of the car (in km/h):");
    //calls the calculteDemeritPoints function and inputs speed entered by user as the argument 
    const demeritPoints = calculateDemeritPoints(speed);
    alert (`your demerit points is ${demeritPoints}`)
    return demeritPoints
   
}
//calls the function promptSpeed()
promptSpeed();


