let form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let fd=newformdata(form)
    // console.log(fd)
    let obj= Object.fromEntries(fd);
    let json=JSON.stringify(obj)
    localStorage.setItem('form',json);
    
})