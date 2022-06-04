$(document).ready(function(){
console.log("hello")
    $("#classButton").click(function(){

        $("#classButton p").css('color', 'red');
    })

    $("#slideButton").click(function(){

        if($("#slideButton p").is(":visible")){
            $("#slideButton p").slideUp();
        }
        else{
            $("#slideButton p").slideDown();
        }
    })

    $("h1").click(function(){
        $(".titles h1").toggle();
    })
    
    $("#appendButton").click(function(){    
        $("#appendButton p").append("<strong>Hello</strong>");
    })


});