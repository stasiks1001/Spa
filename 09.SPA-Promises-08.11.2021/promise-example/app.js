// creating a promise 

const blackFriday = false;

function amazonPromise(){
    return new Promise((resolve , reject)=>{
        if(blackFriday === true){
            // rejected
            reject( ' Sorry for not sending your article on time 😐');
        }
        else{
            // fulfilled
            resolve(' this is your product as promised 🙂')
        }

    })
}

const promise = amazonPromise();

promise.then((msg)=>{
    console.log(msg);
});
promise.catch((msg)=>{
    console.log(msg);
});

console.log(promise);
console.log('##################################');
//###########################################################//
const flowersInseason = true ;

const flowerPromise = new Promise((resolve , reject)=>{
    if(flowersInseason){
        resolve({ msg : 'you get a flower' ,img :"https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_960_720.jpg"});
    }
    else {
        reject(' sorry we have no flowers ');
    }


});

console.log(flowerPromise);
flowerPromise
.then(( data)=>{
    console.log(data.img); 
    const img = document.createElement('img');
    img.src = data.img;
    document.body.appendChild(img)

})
.catch((msg)=>{
 console.log(msg);
});