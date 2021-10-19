// TASK MANAGER

// Using Template Literal bec it recognozed a line breaks
const menu =`TASK MANAGER

What would you like to do (Please enter one of the option below):
"TASK" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
  `Charge MacBook`,
  `Master JavaScript`
];

//For displaying task to the user
let showTasks = ``;


// Display the menu for the user to seleect an option.

let userInput = prompt(menu);

//Loops and continues to display the menu until the user ends/closes the Task Manager(AKA until the user enters CLOSE)
while (userInput !== `CLOSE`){

    //Check if user entered TASKS
    if (userInput === `TASK`){

      //The For Of Loop is used here to concatenate each task (AKA Item)in the task array to the ShowTasks string Variable
      for (task of tasks){
        
        //Using \n to create a new line (AKA Line break)after each task
        showTasks += `${task}\n`;
     }

    //Displace the current tasks to the user
    alert(showTasks);

    //Set the value of the showTasks string varieble back to an empty string
    showTasks = "";

    }
    

    //Display the menu again
    userInput = prompt (menu);
}

//Alerts the user that they have closed the program
alert(`Thank you for using Task Manager`);