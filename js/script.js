
function temp(){
    let ville = prompt("Ville");

    $(document).ready(function(){
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=e97d6758af72995c3e16f0f40300d7b3` ,
            type: "GET",
            success: function (result){
                console.log(result.list[0].main.temp-273.15);
                document.querySelector("div").innerHTML= `à ${ville} il fait ${result.list[0].main.temp-273.15}°`
            },
            error: function(error){
                console.log(error);
                document.querySelector("div").innerHTML= "veuillez entrer une ville valide";
            }
        })
    })
}
