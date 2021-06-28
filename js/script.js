function temp(){
    let ville = prompt("Ville");

    $(document).ready(function(){
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=e97d6758af72995c3e16f0f40300d7b3` ,
            type: "GET",
            success: function (result){
                document.querySelector("article#one").innerHTML= `à ${ville} il fait <br> ${result.list[0].main.temp-273.15}°`
            },
            error: function(error){
                document.querySelector("article#one").innerHTML= "veuillez entrer une ville valide";
            }
        })
    })
}