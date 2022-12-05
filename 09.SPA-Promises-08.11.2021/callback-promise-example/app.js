// createUser function  // getUsers function

const users = [{ name : "Max" , email : "max@gmail.com" , age : 33},
                { name : "Sara" , email : "sara@gmail.com" , age :40}
                ];

function createUser(user , callback){
    setTimeout(()=>{
        users.push(user);
        callback()
    },2000) // 2 sec delay
}                

function getUsers(){
    let content = '';
    users.forEach((element)=>{
        content+= `<li> ${element.name}  - email : ${element.email}- age : ${element.age}</li>`

    });
    document.querySelector('#list').innerHTML = content;

}




createUser( { name : "Adam" , email : "adam@gmail.com" , age : 33} ,getUsers);
//getUsers();