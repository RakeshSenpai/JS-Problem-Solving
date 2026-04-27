const prompt = require("prompt-sync")()

function addContact(){
    const name = prompt("Enter Name: ")
    const email = prompt("Enter Email: ")
    const contact = {
        name : name,
        email: email
    }
    contacts.push(contact)
}

function deleteContact(){
    for(let i = 0; i < contacts.length; i++){
        const contact = contacts[i];
        console.log((i+1).toString() + ":" , contact.name)
    }
    const number = parseInt(prompt('Enter an ID :'))
    if(isNaN(number) || number > contacts.length){
        console.log("Invalid")
        return;
    } 

    contacts.splice(number - 1 , 1)
    console.log("Removed")
}

function searchContact(){
    const searchString = prompt("Search: ").toLowerCase()
    let result = []
    for(let contact of contacts){
        if(contact.name.toLowerCase().includes(searchString))result.push(contact)
    }
    listContact(result)
}

function listContact(contacts){
    for(let contact of contacts){
        console.log("Name" , contact.name)
        console.log("Email" , contact.email)
    }
}

const contacts = [];
let keepGoing = true;

while(keepGoing){
    const number = prompt('Enter an operation (1-5) : ')
    switch(number){
        case "1":
            addContact()
            break;
        case "2":
            deleteContact()
            break;
        case "3":
            listContact(contacts)
            break;
        case "4":
            searchContact()
            break;
        case "5":
            keepGoing = false
            break;
        default : 
        console.log('Unkwown')
        break;
    }

}