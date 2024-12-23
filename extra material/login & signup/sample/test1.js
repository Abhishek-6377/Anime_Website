let arr=[
    {name:"ansh",    id:1},
    {name:"ajay",    id:2},
    {name:"shivani", id:3},
    {name:"ishika",  id:4},]

 for (let value of arr ) {
    if(value.id==3){
        console.log("found");   
        break;
    }
    else{
        console.log("not found");  
    }
    
}