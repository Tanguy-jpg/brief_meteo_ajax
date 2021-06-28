function temp(){
    let ville = prompt("Place: ");

    $(document).ready(function(){
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=e97d6758af72995c3e16f0f40300d7b3` ,
            type: "GET",
            success: function (result){
                document.querySelector("article#one").innerHTML= `Place: ${ville.toUpperCase()} <br><br>temperature: ${Math.round((result.list[0].main.temp-273.15)*100)/100}° <br><br><br><br><input type='button' value='Change Place' onclick='temp()'>`;

                if (result.list[0].main.temp-273.15 <= 0){
                    alert('très froid');
                } else if (result.list[0].main.temp-273.15 <= 10){
                    alert('froid');
                } else if (result.list[0].main.temp-273.15 <= 19){
                    alert('moyen');
                } else if(result.list[0].main.temp-273.15 <= 30){
                    alert('good');
                } else if(result.list[0].main.temp-273.15 >= 30){
                    alert('chaud');
                }      
                
                },
            error: function(error){
                document.querySelector("article#one").innerHTML= "veuillez entrer une ville valide <br><br><br><br> <input type='button' value='relancer' onclick='temp()'>";
            }
        })
    })
}