
$(document).ready(function(){
    $("#search-id").click(function(){
        $(".search-btn").css({
            "bottom": "300px",
        })
    })
    $("#fa-times-id-header").click(function(){
        $(".search-btn").css({
            "bottom":"-100%",
        })
    })
})