export function greeting(name){
    alert(' Hello '+ name);
};

export const randomNum = ()=>{
    return Math.random() * 9 
}

export const car = {
    brand :"BMW",
    model :"X1",
    color :"red"
}
export const city = "Hamburg";

// we can export all the variables in one line 
// export  { greeting , randomNum , car , city }

