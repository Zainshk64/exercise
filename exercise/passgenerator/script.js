let imgbtn = document.getElementById('imgtogle')

let pass = document.getElementById('pass')

imgbtn.addEventListener('click', (e)=>{
    const type = pass.getAttribute("type") === "password" ? "text" : "password" ;
    
    pass.setAttribute("type", type);
    if(type === "text"){
        
        imgbtn.src="./openeye.png"
    }
    else{

        imgbtn.src ='./closed-eye-icon-4.png'
    }

})

let btn = document.getElementById('btn');

let pass1 = document.getElementById('pass')

let length = 12;
let upercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let number = " 0123456789"

let all = upercase + lowercase + number;

btn.addEventListener('click' , (e)=>{

    let password = ""

    password += upercase[Math.floor(Math.random() * upercase.length )];
    password += lowercase[Math.floor(Math.random() * lowercase.length )];
    password += number[Math.floor(Math.random() * number.length )];

    while(length >password.length){
        password += all[Math.floor(Math.random() * all.length)];
    }
    pass1.value = password;
})


