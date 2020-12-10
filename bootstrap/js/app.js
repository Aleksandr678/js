

$(document).ready(function(){

    console.log("Hello jQuery");

    //document.getElementById();

    $("#mybox").html("<p>Hello Vladimir!</p>");

    $('form :password').on('keydown', function(event){
        console.log(event);
        //console.log("clicked: " + event.keyCode);
        if (event.altKey == true 
            && event.ctrlKey == true 
            && event.key == "Shift")
        {
            console.log("you clicked ALt + " + event.keyCode);
        }
    });

    $('#frmCheckbox').on('change', function(){
        //console.log('checkbox changed ');
        let isCheced = this.checked;
        console.log('chkBox: ' + isCheced);
        if (isCheced == true) {
            $('.mylist :nth-child(3)').css('color', 'blue');
        } else {
            $('.mylist :nth-child(3)').css('color', 'red');
        }

    });


    $('#startAjax').on('click', function(){

        console.log ('ajax start');
        
        $.ajax({
            //type: "POST",
            url: "http://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=aaa380eb82df01ab56b1ddbc36370c52",
            crossDomain: true,
            //data: "data",
            dataType: "html",
            success: function (response) {

                response = JSON.parse(response);

                console.log('success');
                $("#content").html(response); 

                let city = response.name 
                let weather = response.weather[0];
                let temp = parseFloat(response.main.temp) - 273.15;

                if(weather.main == 'Clouds')
                {
                    $('#weather img').attr('src', '../dark.jpg');

                }
                else if (weather.main == 'Clear')
                {
                    $('#weather img').attr('src', '../dark.jpg');
                }

               let content = `<div><span>City:</span>${city}</div>`;
               content += `<div><span>Weather:</span> ${weather.main + '; ' + weather.description}</div>`;
               content += `<div><span>Temp:</span> ${temp.toFixed(2)} </div>`;

                $('#weather .card-text').html(content);

                
                
            },
            error: function (jqXHR,textStatus, errorThrown) {
                console.log('success');
                $("#content").html("Something wrong: " + textStatus + ',error:' +jqXHR +';Error Message: ' + errorThrown);
            }
           
        }).always(function(data) {
            console.log("Always at finish,despite of errors");

        });
    
    });

    // api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=aaa380eb82df01ab56b1ddbc36370c52

});

function changeColor() {
    //$("#mybox").addClass("red");
    // $("#mybox").css('background-color', 'rgb(15, 48, 141)');
    // chaining
    $("div[id=mybox]")
        .html('<p>Hello Vladimir!</p>')
        .addClass('myFont')
        .css('color', 'red')
        .css('padding', '10px');

    $('#mytable tr:odd').css('color', 'green');
    $('#mytable tr:even').css('color', 'red');

    $('.mylist :last-child').css('color', 'red');
    $('.mylist :first-child').css('color', 'green');
    $('.mylist :nth-child(3)').css('color', 'blue');

    $('form :text').addClass('frmText');
    $('form :password').addClass('frmPassword');
    $('form :submit').addClass('frmButton');
}

function updateWeather (){

    $.ajax({
        //type: "POST",
        url: "http://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=aaa380eb82df01ab56b1ddbc36370c52",
        crossDomain: true,
        //data: "data",
        dataType: "html",
        success: function (response) {

            response = JSON.parse(response);

            console.log('success');
            $("#content").html(response); 

            let city = response.name 
            let weather = response.weather[0];
            let temp = parseFloat(response.main.temp) - 273.15;

            if(weather.main == 'Clouds')
            {
                $('#weather img').attr('src', '../dark.jpg');

            }
            else if (weather.main == 'Clear')
            {
                $('#weather img').attr('src', '../dark.jpg');
            }

           let content = `<div><span>City:</span>${city}</div>`;
           content += `<div><span>Weather:</span> ${weather.main + '; ' + weather.description}</div>`;
           content += `<div><span>Temp:</span> ${temp.toFixed(2)} </div>`;

            $('#weather .card-text').html(content);

            
            
        },
        error: function (jqXHR,textStatus, errorThrown) {
            console.log('success');
            $("#content").html("Something wrong: " + textStatus + ',error:' +jqXHR +';Error Message: ' + errorThrown);
        }
       
    }).always(function(data) {
        console.log("Always at finish,despite of errors");

    });
}
let second = 1;
setInterval(function(){

    if (second == 5){
        updateWeather();
        second = 1;
    }

    $('#weather small').html(second + ' sec');
    second++;

}, 1000);