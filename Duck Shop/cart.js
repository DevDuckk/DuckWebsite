const btn = document.querySelectorAll(".product button")
btn.forEach(function(button, index){
button.addEventListener("click", function(event){
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("h1").innerText
    var productPrice = product.querySelector(".product span").innerText
    addcart(productImg,productName,productPrice)
    console.log(productName)
})

})

$(".notiCart").hide();// hide noti cart
function addcart(productImg,productName,productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length; i++){
        var productT = document.querySelectorAll(".titleName")
        if(productT[i].innerHTML == productName){
            
            $(".notiCart").show();
                setTimeout('$(".notiCart").hide()', 4000);  

            return
        }
    }
    var trcontent = '<tr class="product-tr"><td style = "display: flex; align-items: center;"><img style ="width: 70px;border-radius: 5px"src="'+productImg+'" alt="T-shirt"><span class="titleName">'+productName+'</span></td><td><span class="product-price">'+productPrice+'</span><sup>đ</sup></td><td><input style = "width: 30px; outline: none;"type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete"><i class="fa-solid fa-trash"></i></span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    $("tbody tr").addClass("cartcheck");
    $("tbody tr td:last-child").addClass("changeclass")
    inputChange();
    cartTotal();
    deleteCart();
    // productCount();
}
// -------------------delete cart--------------
function deleteCart(){
    var cartItem =document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener('click', function(event){
            var cartDeletee = event.target
            var cartItemR = cartDeletee.parentElement.parentElement.parentElement
            cartItemR.remove()
            // $("tr").removeClass("cartcheck")
            cartTotal()
            inputChange()
            productCount()
            // console.log(cartItemR)
        })

    } 
}


// ---------------total Price--------------
function cartTotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice =  cartItem[i].querySelector(".product-price").innerHTML
        totalA = inputValue*productPrice*1000
        totalC = totalC + totalA
    }
    var cartTotalA = document.querySelector(".price-total .price-cart")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputChange()
}

//----cart-----
// const cartbtn = document.getElementById('fa-times-id')
// const showCart = document.getElementById('shoping-cart-id')
// showCart.addEventListener('click', function(){
//     document.querySelector(".cart").style.right = "0"
// })
// cartbtn.addEventListener('click', function(){
//     document.querySelector(".cart").style.right = "-100%"
//     // console.log(cartbtn)
// })

//---------------input change-------
function inputChange(){
    var cartItem =document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener('change', function(){
            cartTotal()
            // productCount()
        })

    } 
}
$(document).ready(function(){
    $(".success").hide();
    $(".error").hide();

    $(".btn-buy").click(function(){
        if($("tr").hasClass("cartcheck")){
            $(".success").show();
            setTimeout('$(".success").hide()',4000);
            setTimeout('$(".cart .cartcheck").remove()',500)
            var cartTotalA = document.querySelector(".price-total .price-cart")
            cartTotalA.innerHTML = 0;

            $(".title-status").css({
                "display": "none"
            })

            $(".fa-truck-arrow-right").css({
                "display": "inline-block"
            })
        }
        else{
            $(".error").show();
            setTimeout('$(".error").hide()',4000);
        }
    })
    $(".remove-message").click(function(){
        $(".success").hide();
        $(".error").hide();
        $(".notiCart").hide()
        console.log("hello")
    })


})