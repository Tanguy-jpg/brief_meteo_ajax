const close = (n)=>(document.querySelector(n).style="display:none");

function temp(n){
    let ville = prompt("Place: ");
    
    document.querySelector('#chart h2').addEventListener('click',function(){
        close('#chart');
    })

    n==='#one'? placeOne=ville:'';
    n==='#two'? placeTwo=ville:'';
    n==='#three'? placeThree=ville:'';
    n==='#four'? placeFour=ville:'';

    $(document).ready(function(){
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=e97d6758af72995c3e16f0f40300d7b3` ,
            type: "GET",

            success: function (result){
                document.querySelector(n+' p').style="color:black;" //reset la couleur du texte
                let temperature = Math.round((result.main.temp-273.15)*100)/100; // kelvin to celcius
                document.querySelector(n+' input').classList.remove('hide');
                document.querySelector(n+' h2').style='writing-mode: horizontal-tb;';

                document.querySelector(n+' p').innerHTML=  `Place: ${ville.toUpperCase()} <br><br> <p>temperature: <strong>${temperature}°</strong></p> `; //

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

}

let placeOne;
let placeTwo;
let placeThree;
let placeFour;


function graph(n){
    n==='#one'? ville=placeOne:'';
    n==='#two'? ville=placeTwo:'';
    n==='#three'? ville=placeThree:'';
    n==='#four'? ville=placeFour:'';

    $(document).ready(function(){
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${ville}&units=metric&appid=e97d6758af72995c3e16f0f40300d7b3`,
            type:"GET",
            
            success: function(result){
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
                    chartInfo = [];
                    chartInfo.push(
                        [[result.list[0].dt_txt,result.list[0].main.temp],
                        [result.list[1].dt_txt,result.list[1].main.temp],
                        [result.list[2].dt_txt,result.list[2].main.temp],
                        [result.list[4].dt_txt,result.list[4].main.temp]],

                        [[result.list[8].dt_txt,result.list[8].main.temp],
                        [result.list[9].dt_txt,result.list[9].main.temp],
                        [result.list[10].dt_txt,result.list[10].main.temp],
                        [result.list[12].dt_txt,result.list[12].main.temp]],

                        [[result.list[16].dt_txt,result.list[16].main.temp],
                        [result.list[17].dt_txt,result.list[17].main.temp],
                        [result.list[18].dt_txt,result.list[18].main.temp],
                        [result.list[20].dt_txt,result.list[20].main.temp]],

                        [[result.list[24].dt_txt,result.list[24].main.temp],
                        [result.list[25].dt_txt,result.list[25].main.temp],
                        [result.list[26].dt_txt,result.list[26].main.temp],
                        [result.list[28].dt_txt,result.list[28].main.temp]],

                        [[result.list[32].dt_txt,result.list[32].main.temp],
                        [result.list[33].dt_txt,result.list[33].main.temp],
                        [result.list[34].dt_txt,result.list[34].main.temp],
                        [result.list[36].dt_txt,result.list[36].main.temp]]
                        );
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
                            const labels = [
                                "Aujourd'hui",
                                'Demain',
                                'Après-demain',
                                'Dans 3 jours',
                                'Dans 4 jours',
                            ];
                            const data = {
                                labels: labels,
                                datasets: [
                                {
                                label: chartInfo[0][0][0],
                                backgroundColor: 'rgb(94 43 255)',
                                borderColor: 'rgb(255, 99, 132)',
                                data: [0, 10, 5, 2, 20, 30, 45],
                                },
                                {
                                    label: 'Midi',
                                    backgroundColor: 'rgb(192 76 253)',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: [0, 10, 5, 2, 20, 30, 45],
                                },
                                {
                                    label: 'Après-midi',
                                    backgroundColor: 'rgb(252 109 171)',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: [5, 10, 5, 2, 20, 30, 45],
                                },
                                {
                                    label: 'Soir',
                                    backgroundColor: 'rgb(247 246 197)',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: [0, 10, 5, 2, 20, 30, 45],
                                },
                                ]
                            };
                            
                            const config = {
                                type: 'bar',
                                data,
                                options: {}
                            };

                            var myChart = new Chart(
                                document.getElementById('myChart'),
                                config
                            );
////////////////////////////////////////////////////////////////////////////////////////////////////      
                    document.querySelector('#chart').style="";
                        
            },
            error: function(error){
                console.log(error);
            }
        })
    })
}
let chartInfo = [];

