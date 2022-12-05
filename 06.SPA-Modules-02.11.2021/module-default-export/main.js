// we can add only one default export
// default export 
export default function fetchData(){
    return { name :"Max" , city:"Berlin"};
}

// named export 
export function greet(){
    console.log(' Hello world');
}

export const city = 'London'