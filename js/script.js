/*** Vid musklick på Bars aktiveras classen showing ***/

$(document).ready(function(){
    $(".menu-bars").on("click", function(){
        $("nav ul").toggleClass("showing1");
    });  
});
