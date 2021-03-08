function Order(size,crust,toppings,number,total){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
    this.total = total;
}

$(document).ready(function(){
    $("#checkout").click(function(event){
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let number = $("#pizzaNum").val();
        let topping = [];
        $("input[name='checkbox']").each(function (index, obj)
        });
   
        let price, total;
     
     


}