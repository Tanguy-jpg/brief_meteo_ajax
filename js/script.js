function temp(n){
    let ville = prompt("Place: ");

    $(document).ready(function(){
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=e97d6758af72995c3e16f0f40300d7b3` ,
            type: "GET",

            success: function (result){
                document.querySelector(n+' p').style="color:black;"
                let temperature = Math.round((result.main.temp-273.15)*100)/100;

                document.querySelector(n+' p').innerHTML= `Place: ${ville.toUpperCase()} <br><br> <p>temperature: <strong>${temperature}°</strong></p> `;

                if(temperature >= 29){
                    document.querySelector(n+' strong').style="color:#c50d0d;" //red
                }else if(temperature>=20){
                    document.querySelector(n+' strong').style="color:#0feb0f;" //green
                }else if(temperature>=10){
                    document.querySelector(n+' strong').style="color:#dceb0f;" //yellow
                }else if(temperature>=0){
                    document.querySelector(n+' strong').style="color:#0f8ceb;" //blue
                }
                
            },

            error: function(error){
                document.querySelector(n+' p').style="color:#c50d0d;"
                document.querySelector(n+' p').innerHTML= "invalid entry";
            }
        })
    })
}