// A Discrete Mathematics professor has a class of students. 
// Frustrated with their lack of discipline, 
// the professor decides to cancel class if fewer than some number of students are present when class starts. 
// Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.


// Complete the angryProfessor function below.
function angryProfessor(k, a) {
    return a.filter(x => 
        x <= 0).length < k ? "YES" : "NO";
}
