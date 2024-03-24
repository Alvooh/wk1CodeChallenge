function gradeGenerator (mark){
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
    
}

function promptGrade() {
   
    let marks = prompt("Input student marks");

    
    if (marks < 0 || marks > 100 || marks === '') {
        
        // If the input is invalid, display an error message and prompt the user again
        alert('Invalid Input! Enter values between 0 and 100');

    
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