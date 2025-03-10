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
    ticketdiv.remove();
    event.stopPropagation();                            //stopPropagation to stop event bubbling
});

ticketContainer.appendChild(ticketdiv);             


}

//test data:
ticket("Edson Barboza", "Keep getting errors", "high")
ticket("Markus Nguen", "Cannot purchase an item", "medium")
ticket("Karim Abdul", "Need a driver update", "low")