function validarEmail(){
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@].[^\s@]+$/;
    if(regex.test(email)){
        alert("Seu e-mail foi validado.");

    }else{
       alert("Por favor, insira um E-mail valido");
       return false;

    }
}
