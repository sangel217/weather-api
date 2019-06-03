import $ from 'jquery';

$().ready(function(){



    $("#button").click(function() {
    

        let city = $("#location").val();
        $("#location").val("");

        let apikey = process.env.API_KEY;


        //VANILLA JS
        let request = new XMLHttpRequest();
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apikey}&units=imperial`

        request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                getElements(response);
            }
        }

        request.open("GET", url, true);
        request.send();


        const getElements = function(response){
            $('.showHumidity').text(`The humidy in ${city} is ${response.main.humidity}%`);
            $(".showTemp").text(`The temperature is ${response.main.temp}`);
        }

        //AJAX WRAPPER
        // $.ajax({
            
        //     url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a9bb83bada1d516234356e24a6a8fcd5&units=metric`,
        //     type: 'GET',
        //     data: {
        //         format: "json"
        //     },
        //     success: function(response) {
        //         $('.showHumidity').text(`The humidy in ${city} is ${response.main.humidity}%`);


        //         let temp = response.main.temp// - 273.15) * 9/5 + 32).toFixed(2);
        //         $(".showTemp").text(`The temperature is ${temp}`);
        //     },
        //     error: function() {
        //         $(".showTemp").text("There was an error processing your request. Please try again.")
        //     }
        
        // })


    })

});