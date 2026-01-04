function check(){
  const pass = document.getElementById('pass').value;
  const msg = document.getElementById('msg');

  if(pass.length < 6){
    msg.innerText = 'Weak password';
    msg.style.color = 'red';
  }else if(/[A-Z]/.test(pass) && /\d/.test(pass)){
    msg.innerText = 'Strong password';
    msg.style.color = 'lightgreen';
  }else{
    msg.innerText = 'Medium password';
    msg.style.color = 'orange';
  }
}
