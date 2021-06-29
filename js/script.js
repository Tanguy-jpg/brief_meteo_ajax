function temp(n){
    let ville = prompt("Place: ");

    $(document).ready(function(){
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=e97d6758af72995c3e16f0f40300d7b3` ,
            type: "GET",

            success: function (result){
                document.querySelector(n+' p').style="color:black;" //reset la couleur du texte
                let temperature = Math.round((result.main.temp-273.15)*100)/100; // kelvin to celcius

                document.querySelector(n+' p').innerHTML= `Place: ${ville.toUpperCase()} <br><br> <p>temperature: <strong>${temperature}°</strong></p> `; //

                if(temperature >= 29){
                    document.querySelector(n+' strong').style="color:#c50d0d;" //red
                }else if(temperature>=20){
                    document.querySelector(n+' strong').style="color:#0feb0f;" //green
                }else if(temperature>=15){
                    document.querySelector(n+' strong').style="color:#c1f58a;" //green
                }else if(temperature>=10){
                    document.querySelector(n+' strong').style="color:#dceb0f;" //yellow
                }else if(temperature>=0){
                    document.querySelector(n+' strong').style="color:#0f8ceb;" //blue
                }
                
            },

            error: function(error){
                console.log(error);
                document.querySelector(n+' p').style="color:#c50d0d;"
                document.querySelector(n+' p').innerHTML= "invalid entry";
            }
        })
    })

    $(document).ready(function(){
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${ville}&units=metric&appid=e97d6758af72995c3e16f0f40300d7b3`,
            type:"GET",
            
            success: function(result){
                console.log(result);
                console.log(`Aujourd'hui)
   MATIN: ${result.list[0].dt_txt}, temperature: ${result.list[0].main.temp}°
   MIDI: ${result.list[1].dt_txt}, temperature: ${result.list[1].main.temp}°
   APRES-MIDI: ${result.list[2].dt_txt}, temperature: ${result.list[2].main.temp}°
   SOIR: ${result.list[4].dt_txt}, temperature: ${result.list[4].main.temp}°

Demain)
   MATIN: ${result.list[8].dt_txt}, temperature: ${result.list[8].main.temp}°
   MIDI: ${result.list[9].dt_txt}, temperature: ${result.list[9].main.temp}°
   APRES-MIDI: ${result.list[10].dt_txt}, temperature: ${result.list[10].main.temp}°
   SOIR: ${result.list[12].dt_txt}, temperature: ${result.list[12].main.temp}°

Après-Demain)
   MATIN: ${result.list[16].dt_txt}, temperature: ${result.list[16].main.temp}°
   MIDI: ${result.list[17].dt_txt}, temperature: ${result.list[17].main.temp}°
   APRES-MIDI: ${result.list[18].dt_txt}, temperature: ${result.list[18].main.temp}°
   SOIR: ${result.list[20].dt_txt}, temperature: ${result.list[20].main.temp}°
   
Dans trois jours)
   MATIN: ${result.list[24].dt_txt}, temperature: ${result.list[24].main.temp}°
   MIDI: ${result.list[25].dt_txt}, temperature: ${result.list[25].main.temp}°
   APRES-MIDI: ${result.list[26].dt_txt}, temperature: ${result.list[26].main.temp}°
   SOIR: ${result.list[28].dt_txt}, temperature: ${result.list[28].main.temp}°
   
Dans quatre jours)
   MATIN: ${result.list[32].dt_txt}, temperature: ${result.list[32].main.temp}°
   MIDI: ${result.list[33].dt_txt}, temperature: ${result.list[33].main.temp}°
   APRES-MIDI: ${result.list[34].dt_txt}, temperature: ${result.list[34].main.temp}°
   SOIR: ${result.list[36].dt_txt}, temperature: ${result.list[36].main.temp}°`);
            },
            error: function(error){
                console.log(error);
            }
        })
    })
}