$(document).ready(function(){
    $(".btn-buy").click(function(){
        shippingTotal()
        
        var itemCopy = $(".body-tr");
        var HTMLitem = itemCopy.html();

        changeclassItem()

        var shippinItem = $(".shippin-tbody");
        shippinItem.html(HTMLitem);
        $(".shippin-tbody input").remove()
        $(".shippin-tbody i").remove()


        
    })

})
function changeclassItem(){
    var newItemshippin = document.querySelectorAll(".shippin-tbody tr")
    for(var i = 0; i < newItemshippin.length; i++){
        newshippinValue(inputPlus)
    }
}
function shippingTotal(){

    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    var inputPlus = 0
    for (var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice =  cartItem[i].querySelector(".product-price").innerHTML
        totalA = inputValue*productPrice*1000
        totalC = totalC + totalA
        inputPlus = inputPlus + inputValue 
        // newshippinValue(inputPlus)

    }

    var shippinTotal = document.querySelector(".total-shippin .total")
    shippinTotal.innerHTML = totalC.toLocaleString('de-DE')
}

function newshippinValue(inputPlus){
    var newValue = document.createElement("p")

    var changeValue = '<p>'+inputPlus+'</p>'
    
    newValue.innerHTML = changeValue

    var shippinTable = document.querySelector(".changeclass")
    shippinTable.append(newValue)
    console.log(newValue)
}
