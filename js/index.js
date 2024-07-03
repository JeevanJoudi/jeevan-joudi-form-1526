
let submitButton = document.getElementById("submit-button");
let fullnameInput= document.getElementById("fullname");
let emailInput= document.getElementById("email");
let messageInput= document.getElementById("message");






function formValidate(event){
    event.preventDefault();
    let formData = {};
    let errors = [];

    let fullnameContent = fullnameInput.value;
    let messageContent = messageInput.value;
    let emailContent = emailInput.value;
    
    if (fullnameContent.trim() !== ""){
        formData.fullname = fullnameContent;
        
    } else{
        errors.push("Fullname is required");
    }


    if (emailContent.trim() !== ""){
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailRegex.test(emailContent)){
            formData.email=emailContent;
        }else{
            errors.push("Invalid email address!");
        }
    } else{
        errors.push("Email is required");
    }

    if ( messageContent !== ""){
        formData.message = messageContent;
    } else {
        errors.push("Enter your message!");
    }
     
    if (errors.length > 0){
        console.log("ERRORS :", errors);
        console.log("COLLECTED DATA", formData);

    } else {
        console.log("COLLECTED DATA" , formData);
        fullnameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }
     

} 

submitButton.addEventListener("click", formValidate);