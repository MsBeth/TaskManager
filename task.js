// TASK MANAGER

// Using Template Literal bec it recognozed a line breaks
const menu =`TASK MANAGER

What would you like to do (Please enter one of the option below):
"TASK" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;
// Display the menu for the user to seleect an option.

let userInput = prompt(menu);

//Loops and continues to display the menu until the user ends/closes the Task Manager(AKA until the user enters CLOSE)
while (userInput !== `CLOSE`){

    //Display the menu again
    userInput = prompt (menu);
}

//Alerts the user that they have closed the program
alert(`Thank you for using Task Manager`);