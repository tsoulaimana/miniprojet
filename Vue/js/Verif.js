
function mail(){
    let mail = $("#mail").val();
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    $("#mail").next('p').remove();
    if (pattern.test(mail)){
        $("<p> Addresse mail valide </p>").insertAfter("#mail");
    }else{
         $("<p> Adresse mail invalide </p>").insertAfter("#mail");
    }
}

function mailpro(){
    let mail = $("#mailPro").val();
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    $("#mailPro").next('p').remove();
    if (pattern.test(mail)){
        $("<p> Addresse mail valide </p>").insertAfter("#mailPro");
    }else{
         $("<p> Adresse mail invalide </p>").insertAfter("#mailPro");
    }
}

function num(){
    let num = $("#telephone").val();
    let pattern = /(([0-9]{2})[.]){4}[0-9]{2}/;
    $("#telephone").next('p').remove();
    if(pattern.test(num)){
        $("<p> Numéro valide</p>").insertAfter("#telephone");
    }else{
         $("<p> Numéro invalide </p>").insertAfter("#telephone");
    }
}

$(document).ready(function(){
    $("#mail").keyup(mail);
    $("#mailPro").keyup(mailpro)
    $("#telephone").keyup(num);
});