let add_btn = document.getElementById('btn1');
let employeelist = document.getElenmentById('employeelist');
let name_box = document.querySelector("#name");
let profession_box = document.querySelector("#profession");

let age = document.querySelector("#age");
let message = document.querySelector("#message");


add_btn.addEventListner("click", adduser);
function adduser(event) {
    event.preventDefault();
    let name = name_box.value;
    let profession = profession_box.value;
    let age = age.value;

     
    if(name == "" || profession == "" || age == "") {
      message.innerText = "Error : Please make sure all the fields are filled before adding in an employee !"
     
      message.style.color = "red"
       
    }
    else {
        message.innerText = "Success : Employee added !"
        message.style.color = "green"
    }

}
