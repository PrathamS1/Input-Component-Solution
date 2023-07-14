function disable(){
    const check=document.getElementById('disableCheck');
    const inputBox=document.getElementById('disabled');
    if (check.checked==true){
        inputBox.disabled=true;
    }
    else{
        inputBox.disabled=false;
    }
}

function iconSelect(){
    const value = document.getElementById('icons');
    const icons = document.getElementById('icon');
    if (value.value=='mail'){
        icons.innerText = 'mail';
    }
    else if (value.value=='call'){
        icons.innerText = 'call';
    }
    else if (value.value=='comment'){
        icons.innerText = 'comment';
    }
    else if (value.value=='password'){
        icons.innerText = 'password';
    }
    else if (value.value=='contact_mail'){
        icons.innerText = 'contact_mail';
    }
}
function position(){
    const box = document.getElementById('box');
    const icon=document.getElementById('icon');
    const value=document.getElementById('position');
    if (value.value=='right'){
        icon.style.left='10.95rem';
        box.style.padding='0 30px 0 10px';
    }
    else if (value.value=='left'){
        box.style.padding='0 0 0 40px';
        icon.style.left='5px';
    }
}
function changeSize(){
    const value=document.getElementById('sizes');
    const box=document.getElementById('varSize');
    if (value.value=='medium'){
        box.style.width='12.5rem';
        box.style.height='3.5rem';
    }
    else if (value.value=='small'){
        box.style.width='12.5rem';
        box.style.height='2.5rem';
    }   
}