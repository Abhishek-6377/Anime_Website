const signUpButton=document.getElementById('signUp');
const signInButton=document.getElementById('signIn');
const container=document.getElementById('container');

signUpButton.addEventListener('click',()=>{
    container.classList.add("right-panel-active")
});

signInButton.addEventListener('click',()=>{
    container.classList.remove("right-panel-active")
});



// Data
let firstname_input=document.getElementById('firstname-input')
let email_input=document.getElementById('email-input')
let password_input=document.getElementById('password-input')
let error_message=document.getElementById('error-message')


let dataArray=[]

container.addEventListener('submit',(e)=>{
    let objectData={
        name:firstname_input.value,
        email:email_input.value,
        password: password_input.value
    }
    dataArray.push(objectData)

    let errors=[]
    if(firstname_input){
        errors=getSignupFormErrors(firstname_input.value,email_input.value,password_input.value)
    }
    else{
        error.getLoginFormErrors(email_input,password_input)
    }
    if(errors.length> 0){
        e.preventDefault()
        error_message.innerText=errors.join(". ")
    }
  
})
console.log(dataArray)

function getSignupFormErrors(firstname,email,password){
    let errors=[]
    if(firstname === '' || firstname == null){
        errors.push("Name is Required")
        firstname_input.parentElement.classList.add('Incorrect')
    }
    if(email === '' || email == null){
        errors.push("Email is Required")
        email_input.parentElement.classList.add('Incorrect')
    }
    if(password === '' || password == null){
        errors.push("Password is Required")
        password_input.parentElement.classList.add('Incorrect')
    }
    return errors;
}

let checkEmail=document.getElementById("checkmail")
let checkPass=document.getElementById("checkpassword")
const container2=document.getElementById("container2")







container2.addEventListener('submit',(e)=>{
   for (const values of dataArray) {
       if(checkEmail.value==values.email &&  checkPass.value==values.password){
           window.location.href="../project.html"
       
   }
   else{
       
   }
}
})
































// // data fatch

// let form=document.querySelector('form')

// let result=form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let fd=new fd(form);
//     console.log(fd)
//     // let obj= Object.fromEntries(fd);
//     // let json=JSON.stringify(obj)
//     // localStorage.setItem('form',json);
    
// })

// console.log(result);




