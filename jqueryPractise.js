$(document).ready(function(){
    var a = $('.myName').html();
    var b = $('.myName').text();
    var c = $('*').html();

    var d = $("ul li:gt(2)").css("color", "red");

    // Log each li element and its color property
    $("ul li:gt(2)").each(function(index, element) {
        console.log($(element).text() + ' has color: ' + $(element).css("color"));
    });
});

