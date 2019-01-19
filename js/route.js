$(function(){

    $("#title_right").click(function(){

        $("#title_menu").toggle(400);

    });


    $("#dynamic").load("../page/chat-list.html")


    $("#chat-history").click(function(){
        $("#dynamic").load("../page/chat-list.html");
    });
    $("#moments").click(function(){
        $("#dynamic").load("../page/moments.html");
    })




})