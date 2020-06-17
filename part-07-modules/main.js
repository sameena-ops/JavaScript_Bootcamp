export function sayHi(user) {
    return `Hello, ${user}!`;
}

import {usergrp,user} from './hello.js' 

document.body.innerHTML = "Hello "+usergrp + "Hello "+user;


//document.body.innerHTML = 

var abc= sayHi("mmmmmm");
console.log(abc);
