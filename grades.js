// Define a function named gradeGenerator that takes a numerical mark as input
function gradeGenerator (mark){
    if (mark > 79) {
        return 'A';
    // If the mark is between 60 and 79 (inclusive), return 'B'
    } else if (mark >= 60 && mark <= 79) {
        return 'B';

    // If the mark is between 50 and 59 (inclusive), return 'C'
    } else if (mark >= 50 && mark <= 59) {
        return 'C';

    // If the mark is between 40 and 49 (inclusive), return 'D'
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    
    // If none of the above conditions are met, return 'E'
    } else {
        return 'E';
    }
    
}

function promptGrade() {
   
    let marks = prompt("Input student marks");

    
    if (marks < 0 || marks > 100 || marks === '') {
        
        // If the input is invalid, display an error message and prompt the user again
        alert('Invalid Input! Enter values between 0 and 100');

        // Call the function again to prompt the user
        promptGrade(); 
        return; // Exit the function
    }

    // Calculate the grade based on the student's marks
    let grade = gradeGenerator(marks);

    // Display the student's grade
    alert (`Student's Grade is ${grade}`);
}

// Call the promptGrade function to start the program
promptGrade()



//the code above works from the front end since node doesnt allow prompt function 