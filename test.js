// Κώδικας που θα εκτελείται όταν φορτωθεί η σελίδα:
// Code that will run when the page is loaded:
//
// Γράψτε εδώ τον κώδικά σας
// Write your code here
//

callCounter();
colorEveryOddTask();

console.log("this is a change");


function callCounter() {
    let total = getTotalCount();
    let done = getDoneCount();

    document.querySelector(".total").innerHTML = total; //.total is the class of the "Σύνολο" line
    document.querySelector(".left-todo").innerHTML = total - done;  //.left-todo is the class of the "Δεν έχουν ολοκληρωθεί" line
}

//--------------------------------------------------
// Ο παραπάνω κώδικας θα κάνει χρήση των εξής συναρτήσεων:
// The above code will use the following functions:

// 1. Επιστρέφει το πλήθος των εργασιών που έχουν σημειωθεί ως ολοκληρωμένες
// 1. Returns the count of the tasks that have been marked as done
function getDoneCount() {
    return document.querySelectorAll("li.done").length
}
// 2. Επιστρέφει το πλήθος όλων των εργασιών
// 2. Returns the total count of all the tasks
function getTotalCount() {
    return document.querySelectorAll("li").length
}
// 3. Χρωματίζει όλες τις άρτιες εργασίες
// 3. Colors every odd task
function colorEveryOddTask() {
    let li = document.querySelectorAll("li")
    for (let i = 0; i < li.length; i++) {
        if (i % 2 == 0) {
            li[i].classList.add("odd")
        }
    }
}