// import default export
import fetchData  from "./main.js";

// import named export

import { greet } from './main.js';

import * as mainFunctions from './main.js'
console.log(mainFunctions);


// to import defualt and named export together 
// import fetchData , { greet} from './main.js'

greet();
console.log(fetchData());