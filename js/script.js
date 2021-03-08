function Order(size,crust,toppings,number,total){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
    this.total = total;
}

let outpuTag = document.getElementById('resume')

$(document).ready(function(){
    $("#checkout").click(function(event){
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let number = $("#pizzaNum").val();
        let toppings = [];
        $.each($('input[name="check"]:checked'), (function(){
            toppings.push($(this).val())    
        }));
        toppings.join(',')
   
        let price, price1, total;  

        switch(size){
            case "0":
                price =0;
                break;
            case "small":
                price = 3100;
                break;
            case "medium":
                price = 5500;
                break;
            case "large":
                price = 7000;
                break;
            default:
            alert('Check your the size of your pizza');
        }
        switch(crust){
            case "0":
                price1 = 0;
                break;
            case "crispy":
                price1 = 1000;
                break;
            case "stuffed":
                price1 = 1500;
                break;
            case "glutenf":
                price1 = 2000;
                break;
            default:
            alert('Check the crust of your pizza'); 
        }
        
        let toppingPrice;

        if (size === 'small'){
            toppingPrice = 1500;
        } else if (size === 'medium'){
            toppingPrice = 2000;
        }else {
            toppingPrice = 3000;
        }

        let quantity = document.getElementById('pizzaNum').value
        total = (price + price1 + toppingPrice) * quantity;
        console.log(total)
            
        let order = new Order(size,crust,toppings,number,total);
        outpuTag.innerHTML = `Your order is as follows: Size: ${order.size}, Crust: ${order.crust},
        Toppings: ${order.toppings}, Quantity: ${order.number}, Total: ${order.total} Fcfa`   
    });

    $("#pickUp").click(function(){
        alert('We will be waiting.')
        
    });

    $("#deliver").click(function(){
        var name = prompt("Enter your name");
        var telNum = prompt("Enter yourphone number");
        var address = prompt("Enter your address");
        alert('Your order will be delivered to your location');
    });
})
