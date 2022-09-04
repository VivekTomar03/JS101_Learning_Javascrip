//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


let std_username = "Vivek Tomar";
let std_password = 123456;
let input_username = "Vivek Tomar";
let input_password = 123456;

if (std_username == input_username)
{
  
  if (std_password ==input_password)
  {
    console.log("Login Successfull");
  } else
  {
  console.log("Wrong Password");
  }
}
 else {
  console.log("Incorrect Username");
}
