
const contacts = []
const nameInput = document.getElementById("nameText")
const lastNameInput = document.getElementById("lastNameText")
const phoneInput = document.getElementById("phoneText")
/* Im creating the variables to call the info into the form */
const KEYFORM = "memory" /* this is the variable with the memory info */
const submitForm = (e) => {
    e.preventDefault()
    const name = nameInput.value
    const lastName = lastNameInput.value
    const phone = phoneInput.value
/* Im creating the variables with the value of the form */

    const contact = {/* this is the object with the info */
        name,
        lastName,
        phone,
    }
    localStorage.setItem(KEYFORM, JSON.stringify(contact))/* im inserting the info in the memory like a string */
}
    
const infoForm = document.getElementById("registerForm")
infoForm.addEventListener("submit", submitForm)

const loadForm = () =>{
    const data = localStorage.getItem(KEYFORM)
    
    if(data){
        const contact = JSON.parse(data)
        nameInput.value= contact.name
        lastNameInput.value = contact.lastName
        phoneInput.value = contact.phone

    }
}

const deleteForm = () => {
    localStorage.removeItem(KEYFORM)

    nameInput.value = ""
    lastNameInput.value = ""
    phoneInput.value = ""

    showSavedContact()
}
