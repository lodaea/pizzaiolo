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
        let topping  = [];
        $("input[name='checkbox']").each(function (index, obj){});
   
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

        let quantity = document.getElementById('number').value
        total = (price + price1 + toppingPrice) * quantity;
        console.log(total)
            
        let order = new Order(size,crust,toppings,number,total);
        outpuTag.innerHTML = total

        
    });
});
