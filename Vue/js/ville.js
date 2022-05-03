$(document).ready(function(){
  console.log('ready');
    $('#codePostal').val("");
   $('#codePostal').change(remplirVille);
   
});


function remplirVille() {
    $('#ville').empty();
    console.log('remplirVille');
    $.ajax({
        url: './traitementVille.php',
        data: $('#codePostal').serialize(),
        dataType:'json',
        type:'GET',
        success: function (lesVilles, textStatus, jqXHR)
        {
            console.log("je suis la");
            $.each(lesVilles, function (key,val) {
               $('#ville').append('<option>' + val + '</option>'); 
            });
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            console.log("parametre : " + JSON.stringify(jqXHR));
            console.log("status : " + textStatus);
            console.log("erreur : " + errorThrown);
        }
    });
}