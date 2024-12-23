    

let form=document.querySelector('form')
console.log(form);
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData= new formData(form)
    let data=Object.fromEntries(formData)
    let jsonData=JSON.stringify(data)
    localStorage.setItem('form',json)
    window.location.href="one.json"
})
