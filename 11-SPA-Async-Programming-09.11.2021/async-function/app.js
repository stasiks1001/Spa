// async function greet(){
//     return 'Hello world';
// }

// console.log(greet());

// async function greeting(){
//     return new Promise((resolve , reject)=>{
//         resolve('Hello world');
//     })
// }
// greet()
// .then(msg => {
//     console.log(msg);
// })
// .catch(err => {
//     console.log(err);
// });

// // consuming the promise 
// greeting()
// .then(msg =>{
//     console.log(msg);
// })
// .catch(err => {
//     console.log(err);
// })

//##################################################
/// rejecting the promise using async
async function getData(){
    // return new Promise (( resolve, reject )=>{
    //     reject( new Error (' Server Error'))

    // })
    return { name :" Anna" , email :"anna@gmail.com"}
}
getData()
.then(msg => {
    console.log(msg);
})
.catch(err => {
    console.log(err.name);
});


// create async function with arrow function 
// const login = async ()=>{
//     return 'Hello';

// }
// login()
// .then(msg => {
//     console.log(msg);
// })

//###########################################
// await keyword // 
async function register(){
    const error = true;
    const promise = new Promise((resolve ,reject)=>{
        if(error){
            reject('we have an error')

        }
        resolve(' you are registered!')
      
    });
    return promise


}

async function start(){
   
    const result = await register();
    console.log(result);
   
}


// register()
// .then( msg => {
//     console.log(msg);
// })

start();


function randomImg() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('https://picsum.photos/200/300?random=1');
      }, 2000);
    });
  }
  
  async function getImg() {
    const img = await randomImg();
    const imgElement = document.createElement('img')
    imgElement.src = img;  
    document.body.append(imgElement)
  }
  
  getImg();