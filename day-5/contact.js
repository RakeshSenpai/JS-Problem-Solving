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

function deleteContact(){}

function searchContact(){}

function listContact(contacts){
    console.log(contacts)
}

const contacts = []
let keepGoing = true

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