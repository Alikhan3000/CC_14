//Task 2: Adding Support Tickets Dynamically

function ticket(customer, issue, priority){                 //created a function that takes 3 variables (customer’s name, issue description, priority level) 

let ticketContainer = document.getElementById("ticketContainer");

    const ticketdiv = document.createElement('div');        //used createElement that creates a div element for the ticket
    ticketdiv.setAttribute('class', 'ticket-card');

const customerName = document.createElement('H2');          //assigned H2 for the name of the customer 
customerName.setAttribute('class', 'customer-name');        //set attributes using setAttribute for each variable
customerName.textContent = customer;
ticketdiv.append(customerName);

const issueDescription = document.createElement('p')        //assigned p for the name of the issue description 
issueDescription.setAttribute('class','issue-description');
issueDescription.textContent = `Issue: ${issue}`;
ticketdiv.append(issueDescription);

const priorityLevel = document.createElement('p');
priorityLevel.setAttribute('class', 'priority-level');      //assigned p for the name of the priority level 
priorityLevel.textContent = `Priority: ${priority}`;
ticketdiv.append(priorityLevel);

const resolveButton = document.createElement('button');     //a resolve button that removes the details of ticket 
resolveButton.setAttribute('class', 'buttonid');
resolveButton.textContent = "Resolve";
ticketdiv.append(resolveButton);
resolveButton.addEventListener('click', (event) => {
    console.log(`Resolved for: ${customer}`);               //when resolve button is clicked you can see the output in the console
    ticketdiv.remove();
    event.stopPropagation();                            //stopPropagation to stop event bubbling
});

//Task 4: Implementing Ticket Resolution with Event Bubbling
ticketdiv.addEventListener('click', (event) => {        //aadded a click event that logs a message when tickets are clicked
    event.stopPropagation();                        //stopPropagation to stop event bubbling
    console.log(`${customer} is clicked`);

    
});

document.getElementById("ticketContainer").addEventListener("click", function(event) {
    console.log("Ticket container is clicked")
});

ticketContainer.appendChild(ticketdiv);             


}


//test data:
ticket("Edson Barboza", "Keep getting errors", "high")
ticket("Markus Nguen", "Cannot purchase an item", "medium")
ticket("Karim Abdul", "Need a driver update", "low")

priorityHigh();

//Task 3: Converting NodeLists to Arrays for Bulk Updates

function priorityHigh (){                                           //created a function wtih document.querySelectorAll to select all tickets 
    const selectAll = document.querySelectorAll('.ticket-card');

    let array = [...selectAll];         //created an array for the function output


    array.forEach(ticket => {           
        const priorityHighLoop = ticket.querySelector('.priority-level');   //used forEach and querySelector to look for priority-level id
    
    //used if statement to look for the priority that is high 
    if (priorityHighLoop.textContent.toLowerCase().includes("high")){       //utilized .included for to find fot the match in the array 
        ticket.classList.add('high-priority');                              //all the matches are added to high-priority class      

    }
});
}