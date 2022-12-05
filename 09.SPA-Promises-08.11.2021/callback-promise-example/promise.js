// createUser function  // getUsers function

const users = [{ name : "Max" , email : "max@gmail.com" , age : 33},
                { name : "Sara" , email : "sara@gmail.com" , age :40}
                ];
const error = false;

function createUser(user){ 
    return new Promise( (resolve , reject)=> {

        setTimeout(()=>{

            users.push(user);
            if(!error){
                resolve(' all is done!');
            }
            reject(' we have an error')
            
          
        },2000) // 2 sec delay

    } )
   
}                

function getUsers(){
    let content = '';
    users.forEach((element)=>{
        content+= `<li> ${element.name}  - email : ${element.email}- age : ${element.age}</li>`

    });
    document.querySelector('#list').innerHTML = content;

}

createUser( { name : "Adam" , email : "adam@gmail.com" , age : 33} )
.then( (msg)=>{
console.log(msg);
getUsers();
})
.catch(err=> {
    console.log(err);
})
//getUsers();