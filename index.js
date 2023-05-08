const form = document.getElementById('form')
const Fname = document.getElementById('fname')
const Lname = document.getElementById('lname')
const email = document.getElementById('email')
const passwd = document.getElementById('passwd')

form.addEventListener('submit', e =>{
    e.preventDefault();

    var firstName = Fname.value.trim();
    var lastName = Lname.value.trim();
    var emailValue = email.value.trim();
    var passwdValue = passwd.value.trim();
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (firstName === ''){
        errorFunc(Fname, 'First Name cannot be empty')
    }else{
        successFunc(Fname)
    }
    if (lastName === ''){
        errorFunc(Lname, 'Last Name cannot be empty')
    }else{
        successFunc(Lname)
    }
    if (emailValue === ''){
        errorFunc(email , 'Email cannot be empty')

    }else if(!emailValue.match(pattern)){
        errorFunc(email , "Not a valid email ID")
    }else{
        successFunc(email )
    }
    if (passwdValue === ''){
        errorFunc(passwd, 'Password cannot be empty')
    }else{
        successFunc(passwd)
    }
}
)

function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-Text';
    if(req !== email){
        req.value = ''
    }else{
        req.style.color = "hsl(0, 100%, 74%)";
    }
}

function successFunc(req){
    req.className += 'success';
}