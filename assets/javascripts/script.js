$(document).ready(function(){
    
    //  hover button facebook
    $("div #fb-icon").mouseover(function(){
        $(".fa-facebook").addClass("fa-bounce");
        $("#navList").css({
            "border":"none",
        })
        $(this).css({
            "border-bottom":"2px solid blue",
        })
        
    })
    $("div #fb-icon").mouseleave(function(){
        $(".fa-facebook").removeClass("fa-bounce");
        $(this).css({
            "border":"none",
        })
        $("#navList").css({
            "border-bottom":"2px solid var(--cyan)",
        })
    })

    // hover button instagram
    $("div #ins-icon").mouseover(function(){
        $(".fa-instagram").addClass("fa-bounce");
        $("#navList").css({
            "border":"none",
        })
        $(this).css({
            "border-bottom":"2px solid red",
        })
        
    })
    $("div #ins-icon").mouseleave(function(){
        $(".fa-instagram").removeClass("fa-bounce");
        $(this).css({
            "border":"none",
        })
        $("#navList").css({
            "border-bottom":"2px solid var(--cyan)",
        })
    })
    // hover button phone
    $("div #phone-icon").mouseover(function(){
        $(".fa-phone").addClass("fa-bounce");
        $("#navList").css({
            "border":"none",
        })
        $(this).css({
            "border-bottom":"2px solid greenyellow",
        })
        
    })
    $("div #phone-icon").mouseleave(function(){
        $(".fa-phone").removeClass("fa-bounce");
        $(this).css({
            "border":"none",
        })
        $("#navList").css({
            "border-bottom":"2px solid var(--cyan)",
        })
    })
    // hover button more
    $("div #more-icon").mouseover(function(){
        $(".fa-ellipsis").addClass("fa-bounce");
        $("#navList").css({
            "border":"none",
        })
        $(this).css({
            "border-bottom":"2px solid var(--blackCyan)",
        })
        
    })
    $("div #more-icon").mouseleave(function(){
        $(".fa-ellipsis").removeClass("fa-bounce");
        $(this).css({
            "border":"none",
        })
        $("#navList").css({
            "border-bottom":"2px solid var(--cyan)",
        })
    })
})
// ---- mne - contact -------
$(document).ready(function(){
    $(".menu").click(function(){
        $("#navList").toggle()
        $(".box-facebook").hide()
        $(".box-instagram").hide()
        $(".box-phone").hide()
        $(".box-more").hide()
        
        $(".box-hide").hide()
        $(".inf").removeClass("active")
    })
    $("#phone-icon").click(function(){
        $(".box-phone").toggle()
        $(".box-facebook").hide()
        $(".box-instagram").hide()
        $(".box-more").hide()

        $(".box-hide").hide()

    })
    $("#fb-icon").click(function(){
        $(".box-facebook").toggle()
        $(".box-phone").hide()
        $(".box-more").hide()
        $(".box-instagram").hide()

        $(".box-hide").hide()
    })
    $("#ins-icon").click(function(){
        $(".box-instagram").toggle()
        $(".box-phone").hide()
        $(".box-more").hide()
        $(".box-facebook").hide()

        $(".box-hide").hide()
    })
    $("#more-icon").click(function(){
        $(".box-more").toggle()
        $(".box-phone").hide()
        $(".box-instagram").hide()
        $(".box-facebook").hide()

        $(".box-hide").hide()
    })
    
})


// ----- information -------
$(document).ready(function(){
    $(".video").click(function(){
        $(".box-video").toggle()
        $(".box-about-me").hide()
        $(".box-link-web").hide()
        $(".box-other").hide()


        $("#navList").hide()
        $(".box").hide()

    })

    // $(".box-about-me").hide()
    $(".about").click(function(){
        $(".box-about-me").toggle()
        $(".box-video").hide()
        $(".box-link-web").hide()
        $(".box-other").hide()


        $("#navList").hide()
        $(".box").hide()
    })

    $(".box-link-web").hide()
    $(".web").click(function(){
        $(".box-link-web").toggle()
        $(".box-about-me").hide()
        $(".box-video").hide()
        $(".box-other").hide()


        $("#navList").hide()
        $(".box").hide()
    })
    $(".otherProject").click(function(){
        $(".box-other").toggle()
        $(".box-link-web").hide()
        $(".box-about-me").hide()
        $(".box-video").hide()

        $("#navList").hide()
        $(".box").hide()
    })
})

$(document).ready(function(){
    $(".about").click(function(){
        $(".about").toggleClass("active")
        $(".video").removeClass("active")
        $(".web").removeClass("active")
        $(".otherProject").removeClass("active")

    })
    $(".video").click(function(){
        $(".video").toggleClass("active")
        $(".web").removeClass("active")
        $(".about").removeClass("active")
        $(".otherProject").removeClass("active")

    })
    $(".web").click(function(){
        $(".web").toggleClass("active")
        $(".about").removeClass("active")
        $(".video").removeClass("active")
        $(".otherProject").removeClass("active")

    })
    $(".otherProject").click(function(){
        $(".otherProject").toggleClass("active")
        $(".web").removeClass("active")
        $(".about").removeClass("active")
        $(".video").removeClass("active")
    })

    $(".btn-logo").click(function(){
        $(".nav-content").toggle(300);
    })
    $(".home").click(function(){
        $(".nav-content").toggle(300);
    })
})