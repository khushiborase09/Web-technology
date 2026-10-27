function login(){
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("msg");

  if(user == "" || pass == ""){
    msg.innerHTML = "Please fill all fields";
  }
  else if(user == "admin" && pass == "1234"){
    msg.style.color = "green";
    msg.innerHTML = "Login Successful!";
  }
  else{
    msg.innerHTML = "Invalid Username or Password";
  }
}
