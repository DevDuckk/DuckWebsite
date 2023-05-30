$(document).ready(function(){
    $(".wrapper").hide();
    $(".userbtn").click(function(){
        $(".wrapper").toggle();
        $(".shipping").hide()
        $(".search-btn").hide()
        $(".cart").hide()
    })
    $(".form-submit").click(function(){
        $(".wrapper").hide();
    })
})

// ------------ eye password --------------
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});
