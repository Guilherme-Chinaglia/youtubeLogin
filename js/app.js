var btnsignin = document.querySelector("#welcome-btn");
var btnsignup = document.querySelector("#greeting-btn");

var body = document.querySelector('body'); 


function addsigninjs() {
    body.setAttribute('class','signin-js');
}

function signoutjs() {
    if (body.hasAttribute('class')) {
        body.setAttribute('class','signout-js')
    }
}


btnsignin.addEventListener('click',addsigninjs,true);
btnsignup.addEventListener('click',signoutjs,true);

