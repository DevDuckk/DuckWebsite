$(document).ready(function(){
    $("#subnav1").click(function(){
        $(".product-1").toggle()
        $(".product-2").hide()
        $(".product-3").hide()
    })
    $("#subnav2").click(function(){
        $(".product-2").toggle()
        $(".product-1").hide()
        $(".product-3").hide()
    })
    $("#subnav3").click(function(){
        $(".product-3").toggle()
        $(".producr-1").hide()
        $(".product-2").hide(   )
    })
})

$(document).ready(function(){
    $(".shippingbtn").click(function(){
        $(".shipping").toggle()
        $(".wrapper").hide()
        $(".search-btn").hide()
        $(".cart").hide()

        $(this).toggleClass("active")
        $(".userbtn").removeClass("active")
        $(".shopping-cart").removeClass("active")
        $(".search").removeClass("active")
        // $(".wrapper").removeClass("active")
    })
    $(".userbtn").click(function(){


        $(this).toggleClass("active")
        $(".shippingbtn").removeClass("active")
        $(".shopping-cart").removeClass("active")
        $(".search").removeClass("active")
        // $(".wrapper").removeClass("active")
    })
    $(".shopping-cart").click(function(){
        $(".cart").toggle()
        $(".shipping").hide()
        $(".search-btn").hide()
        $(".wrapper").hide()

        $(this).toggleClass("active")
        $(".userbtn").removeClass("active")
        $(".shippingbtn").removeClass("active")
        $(".search").removeClass("active")
        // $(".wrapper").removeClass("active")
    })
    $(".search").click(function(){
        $(".search-btn").toggle()
        $(".wrapper").hide()
        $(".shipping").hide()
        $(".cart").hide()


        $(this).toggleClass("active")
        $(".userbtn").removeClass("active")
        $(".shopping-cart").removeClass("active")
        $(".shippingbtn").removeClass("active")
        $(".wrapper").removeClass("active")
    })

    $(".subnav").click(function(){
        $(".header-feature").hide()
    })
    $(".header-feature-btn").click(function(){
        $(".product").hide()
    })
})